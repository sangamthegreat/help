import { HabitItem } from '../types';

export const WINTER_ARC_HABITS: HabitItem[] = [
  {
    id: 'wake_cold',
    name: '5:30 AM Discipline Wakeup & Cold Splash',
    emoji: '❄️',
    category: 'discipline',
    description: 'Wake up at 5:30 AM sharp. Zero snoozing. Cold water splash or cold shower. No phone screen for first 30 mins.',
    target: '5:30 AM'
  },
  {
    id: 'deep_work_1',
    name: 'Deep Work Session 1 (90 Mins)',
    emoji: '🧠',
    category: 'study',
    description: 'Morning prime focus block: hardest subject (e.g. Linear Algebra / Discrete Proofs / 8085 Timing). Full airplane mode.',
    target: '90 Mins'
  },
  {
    id: 'deep_work_2',
    name: 'Deep Work Session 2 (90 Mins)',
    emoji: '⚡',
    category: 'study',
    description: 'Evening technical block: C++ OOP programming / Assembly coding / Statistics numericals.',
    target: '90 Mins'
  },
  {
    id: 'physical_training',
    name: '45-Min Physical Training / Workout',
    emoji: '🏋️',
    category: 'body',
    description: 'Calisthenics, gym lift, run or intense cardio to sharpen cognitive energy and blood circulation.',
    target: '45 Mins'
  },
  {
    id: 'hydration_nutrition',
    name: '3L Water Hydration & Clean Fuel',
    emoji: '💧',
    category: 'body',
    description: 'Hit 3 liters of water. Clean food, high protein, zero sugary snacks or sluggish junk food.',
    target: '3.0 Liters'
  },
  {
    id: 'tu_pyq_solve',
    name: 'Daily TU PYQ Sprint (Min 3 Questions)',
    emoji: '📝',
    category: 'study',
    description: 'Solve at least 3 TU past year board questions on physical paper from Hamro CSIT / Easy CSIT collections.',
    target: '3+ PYQs'
  },
  {
    id: 'digital_detox_reflection',
    name: 'Night Audit & Digital Lockdown',
    emoji: '🌙',
    category: 'mind',
    description: 'Log day progress, review mistakes, plan tomorrow\'s chapters. Phone off 45 mins before sleep. Sleep by 10:30 PM.',
    target: '15 Mins'
  }
];
