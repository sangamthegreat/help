// Pure Web Audio API Ambient Sound Synthesizer (Zero external assets required)

class AmbientSoundEngine {
  private ctx: AudioContext | null = null;
  private currentSource: AudioNode | null = null;
  private gainNode: GainNode | null = null;
  private isPlaying: boolean = false;
  private soundType: 'rain' | 'whitenoise' | 'lofi' | 'off' = 'off';

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public play(type: 'rain' | 'whitenoise' | 'lofi') {
    this.stop();
    this.initContext();
    if (!this.ctx) return;

    this.soundType = type;
    this.gainNode = this.ctx.createGain();
    this.gainNode.gain.setValueAtTime(0.08, this.ctx.currentTime);
    this.gainNode.connect(this.ctx.destination);

    const bufferSize = 2 * this.ctx.sampleRate;
    const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);

    if (type === 'whitenoise') {
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }
      const whiteNoise = this.ctx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;
      whiteNoise.loop = true;

      // Lowpass filter to make it softer pink noise
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(800, this.ctx.currentTime);

      whiteNoise.connect(filter);
      filter.connect(this.gainNode);
      whiteNoise.start();
      this.currentSource = whiteNoise;
    } else if (type === 'rain') {
      // Pink/Brown noise + random droplets
      let lastOut = 0.0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        output[i] = (lastOut + 0.02 * white) / 1.02;
        lastOut = output[i];
        output[i] *= 3.5; // boost
      }
      const rainNoise = this.ctx.createBufferSource();
      rainNoise.buffer = noiseBuffer;
      rainNoise.loop = true;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(600, this.ctx.currentTime);
      filter.Q.setValueAtTime(0.7, this.ctx.currentTime);

      rainNoise.connect(filter);
      filter.connect(this.gainNode);
      rainNoise.start();
      this.currentSource = rainNoise;
    } else if (type === 'lofi') {
      // Gentle vinyl hum and crackle
      for (let i = 0; i < bufferSize; i++) {
        const crackle = Math.random() > 0.998 ? (Math.random() * 2 - 1) * 0.8 : 0;
        output[i] = crackle + (Math.random() * 0.05);
      }
      const lofiNoise = this.ctx.createBufferSource();
      lofiNoise.buffer = noiseBuffer;
      lofiNoise.loop = true;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(1200, this.ctx.currentTime);

      lofiNoise.connect(filter);
      filter.connect(this.gainNode);
      lofiNoise.start();
      this.currentSource = lofiNoise;
    }

    this.isPlaying = true;
  }

  public stop() {
    if (this.currentSource) {
      try {
        (this.currentSource as AudioBufferSourceNode).stop();
        this.currentSource.disconnect();
      } catch {
        // ignore
      }
      this.currentSource = null;
    }
    this.isPlaying = false;
    this.soundType = 'off';
  }

  public setVolume(vol: number) {
    if (this.gainNode && this.ctx) {
      this.gainNode.gain.setValueAtTime(Math.max(0, Math.min(1, vol)), this.ctx.currentTime);
    }
  }

  public getStatus() {
    return { isPlaying: this.isPlaying, soundType: this.soundType };
  }
}

export const ambientSound = new AmbientSoundEngine();
