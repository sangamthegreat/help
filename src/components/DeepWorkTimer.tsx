import React, { useState, useEffect, useRef } from 'react';
import {
  Play,
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
  Sparkles,
  Award,
  Zap,
  CheckCircle2,
  Clock
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useWorkspace } from '../context/WorkspaceContext';
import { ambientSound } from '../utils/audioGenerator';

export const DeepWorkTimer: React.FC = () => {
  const { logStudyMinutes, state } = useWorkspace();
  const [timerMode, setTimerMode] = useState<'pomodoro' | 'deepwork' | 'stopwatch'>('deepwork');
  const [timeLeft, setTimeLeft] = useState<number>(90 * 60); // 90 mins default for Winter Arc
  const [initialDuration, setInitialDuration] = useState<number>(90 * 60);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [soundMode, setSoundMode] = useState<'rain' | 'whitenoise' | 'lofi' | 'off'>('rain');
  const [volume, setVolume] = useState<number>(0.15);
  const [completedSessionsCount, setCompletedSessionsCount] = useState<number>(0);
  const [sessionNotes, setSessionNotes] = useState<string>('');

  const intervalRef = useRef<number | null>(null);

  // Sound handler
  useEffect(() => {
    if (isRunning && soundMode !== 'off') {
      ambientSound.play(soundMode);
      ambientSound.setVolume(volume);
    } else {
      ambientSound.stop();
    }
    return () => {
      ambientSound.stop();
    };
  }, [isRunning, soundMode]);

  useEffect(() => {
    ambientSound.setVolume(volume);
  }, [volume]);

  // Timer Tick
  useEffect(() => {
    if (isRunning) {
      intervalRef.current = window.setInterval(() => {
        if (timerMode === 'stopwatch') {
          setTimeLeft((prev) => prev + 1);
        } else {
          setTimeLeft((prev) => {
            if (prev <= 1) {
              handleTimerComplete();
              return 0;
            }
            return prev - 1;
          });
        }
      }, 1000);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRunning, timerMode]);

  const handleTimerComplete = () => {
    setIsRunning(false);
    ambientSound.stop();
    try {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 }
      });
    } catch {
      // ignore
    }
    const minutes = Math.round(initialDuration / 60);
    logStudyMinutes(minutes);
    setCompletedSessionsCount((prev) => prev + 1);
  };

  const handleManualLog = () => {
    const minutes = Math.round((initialDuration - timeLeft) / 60);
    if (minutes > 0) {
      logStudyMinutes(minutes);
      alert(`Logged ${minutes} minutes of deep work to your total study time!`);
    }
  };

  const switchMode = (mode: 'pomodoro' | 'deepwork' | 'stopwatch', minutes: number = 25) => {
    setIsRunning(false);
    ambientSound.stop();
    setTimerMode(mode);
    if (mode === 'stopwatch') {
      setTimeLeft(0);
      setInitialDuration(0);
    } else {
      setTimeLeft(minutes * 60);
      setInitialDuration(minutes * 60);
    }
  };

  const resetTimer = () => {
    setIsRunning(false);
    ambientSound.stop();
    if (timerMode === 'stopwatch') {
      setTimeLeft(0);
    } else {
      setTimeLeft(initialDuration);
    }
  };

  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    if (hrs > 0) {
      return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Progress circle
  const progressPercent =
    initialDuration > 0 ? ((initialDuration - timeLeft) / initialDuration) * 100 : 0;

  return (
    <div className="space-y-6 max-w-4xl mx-auto pb-12">
      {/* Header */}
      <div className="p-5 rounded-xl bg-[#202020] border border-[#2e2e2e] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded">
              WINTER ARC FOCUS ENGINE
            </span>
            <span className="text-xs text-neutral-400">• Ambient Sound Generator</span>
          </div>
          <h2 className="text-xl font-bold text-white mt-1">Deep Work Focus Timer</h2>
          <p className="text-xs text-neutral-400 mt-0.5">
            Lock in for 90-minute study blocks. Zero notifications. Total immersion.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="p-3 rounded-lg bg-[#272727] border border-[#333333] text-right">
            <div className="text-[11px] text-neutral-400">Total Study Time</div>
            <div className="text-sm font-mono font-bold text-cyan-400">
              {(state.totalStudyMinutes / 60).toFixed(1)} Hours
            </div>
          </div>
        </div>
      </div>

      {/* Timer Presets */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        <button
          onClick={() => switchMode('deepwork', 90)}
          className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
            timerMode === 'deepwork' && initialDuration === 90 * 60
              ? 'bg-cyan-500 text-black shadow-md'
              : 'bg-[#202020] hover:bg-[#282828] text-neutral-300 border border-[#2e2e2e]'
          }`}
        >
          ❄️ 90-Min Winter Arc Deep Block
        </button>

        <button
          onClick={() => switchMode('pomodoro', 50)}
          className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
            timerMode === 'pomodoro' && initialDuration === 50 * 60
              ? 'bg-cyan-500 text-black shadow-md'
              : 'bg-[#202020] hover:bg-[#282828] text-neutral-300 border border-[#2e2e2e]'
          }`}
        >
          ⏱️ 50-Min Sprint
        </button>

        <button
          onClick={() => switchMode('pomodoro', 25)}
          className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
            timerMode === 'pomodoro' && initialDuration === 25 * 60
              ? 'bg-cyan-500 text-black shadow-md'
              : 'bg-[#202020] hover:bg-[#282828] text-neutral-300 border border-[#2e2e2e]'
          }`}
        >
          🍅 25-Min Pomodoro
        </button>

        <button
          onClick={() => switchMode('stopwatch')}
          className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
            timerMode === 'stopwatch'
              ? 'bg-cyan-500 text-black shadow-md'
              : 'bg-[#202020] hover:bg-[#282828] text-neutral-300 border border-[#2e2e2e]'
          }`}
        >
          ⏱️ TU Exam Paper Stopwatch
        </button>
      </div>

      {/* Main Timer Display */}
      <div className="p-8 rounded-2xl bg-[#202020] border border-[#2e2e2e] text-center space-y-6 shadow-lg relative overflow-hidden">
        {/* Background glow when active */}
        {isRunning && (
          <div className="absolute inset-0 bg-cyan-500/5 animate-pulse pointer-events-none" />
        )}

        <div className="text-xs font-mono uppercase tracking-widest text-neutral-400">
          {timerMode === 'deepwork'
            ? '❄️ Winter Arc Deep Work Session'
            : timerMode === 'pomodoro'
            ? '⚡ Focused Study Sprint'
            : '📝 Timed Board Exam Simulation'}
        </div>

        {/* Big Digital Clock */}
        <div className="font-mono text-6xl sm:text-7xl md:text-8xl font-black text-white tracking-wider">
          {formatTime(timeLeft)}
        </div>

        {/* Action Controls */}
        <div className="flex items-center justify-center gap-3 pt-2">
          <button
            onClick={() => setIsRunning(!isRunning)}
            className={`px-8 py-3.5 rounded-xl font-bold text-sm flex items-center gap-2 transition-all shadow-md ${
              isRunning
                ? 'bg-amber-500 hover:bg-amber-400 text-black'
                : 'bg-cyan-500 hover:bg-cyan-400 text-black'
            }`}
          >
            {isRunning ? (
              <>
                <Pause className="w-5 h-5 fill-current" />
                <span>Pause</span>
              </>
            ) : (
              <>
                <Play className="w-5 h-5 fill-current" />
                <span>Lock In (Start)</span>
              </>
            )}
          </button>

          <button
            onClick={resetTimer}
            className="p-3.5 rounded-xl bg-[#292929] hover:bg-[#333333] text-neutral-300 transition-colors border border-[#383838]"
            title="Reset Timer"
          >
            <RotateCcw className="w-5 h-5" />
          </button>
        </div>

        {/* Ambient Sound Controller */}
        <div className="pt-4 border-t border-[#2e2e2e] flex flex-col sm:flex-row items-center justify-between gap-4 max-w-xl mx-auto">
          <div className="flex items-center gap-2 text-xs">
            <span className="text-neutral-400">Ambient Noise:</span>
            <div className="flex items-center gap-1 bg-[#262626] p-1 rounded-lg border border-[#333333]">
              {(['rain', 'whitenoise', 'lofi', 'off'] as const).map((type) => (
                <button
                  key={type}
                  onClick={() => setSoundMode(type)}
                  className={`px-2.5 py-1 rounded text-[11px] font-medium transition-colors ${
                    soundMode === type
                      ? 'bg-cyan-500 text-black font-semibold'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {type === 'rain'
                    ? '🌧️ Rain'
                    : type === 'whitenoise'
                    ? '🌊 White'
                    : type === 'lofi'
                    ? '🍂 Vinyl'
                    : 'Mute'}
                </button>
              ))}
            </div>
          </div>

          {soundMode !== 'off' && (
            <div className="flex items-center gap-2 text-xs">
              <Volume2 className="w-4 h-4 text-neutral-400" />
              <input
                type="range"
                min="0"
                max="0.4"
                step="0.01"
                value={volume}
                onChange={(e) => setVolume(parseFloat(e.target.value))}
                className="w-24 accent-cyan-400 cursor-pointer"
              />
            </div>
          )}
        </div>
      </div>

      {/* Deep Work Wisdom Card */}
      <div className="p-4 rounded-xl bg-[#202020] border border-[#2e2e2e] flex items-start gap-3 text-xs text-neutral-300">
        <Sparkles className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
        <div>
          <span className="font-semibold text-white">Winter Arc Focus Protocol: </span>
          <span>
            During deep work blocks, close social media tabs and put your mobile phone in another room.
            Studies show it takes 23 minutes to regain deep focus after a single phone interruption.
            Lock into one topic at a time.
          </span>
        </div>
      </div>
    </div>
  );
};
