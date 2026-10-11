import React, { useState, useEffect } from 'react';
import {
  ResponsiveContainer,
  ComposedChart,
  BarChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  Area,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis
} from 'recharts';
import {
  TrendingUp,
  Award,
  Sliders,
  AlertCircle,
  Clock,
  Zap,
  Info
} from 'lucide-react';
import { CSIT_SUBJECTS } from '../data/csitSyllabusData';
import { SubjectCode } from '../types';
import { useWorkspace } from '../context/WorkspaceContext';

export interface DaySubjectMetric {
  dayNumber: number;
  dayLabel: string;
  dateStr: string;
  studyHours: number;
  confidenceScore: number;
  keyTopicStudied: string;
}

export type SubjectAnalyticsRecord = Record<SubjectCode, DaySubjectMetric[]>;

const STORAGE_KEY = 'winter_arc_subject_analytics_v2';

const generateDefaultAnalytics = (currentDay: number): SubjectAnalyticsRecord => {
  const dayOffset = Math.max(7, currentDay);
  const startDay = dayOffset - 6;

  const topicsMap: Record<SubjectCode, string[]> = {
    CSC165: [
      'Sets, Power Sets & Venn Laws',
      'Propositional Logic & Truth Tables',
      'Rules of Inference & Fallacies',
      'Proof Methods (Induction & Contradiction)',
      'Divisibility & Euclidean Algorithm',
      'Extended GCD & Bézout Identity',
      'Modular Arithmetic & Congruence'
    ],
    CSC166: [
      'OOP Principles vs Procedural C',
      'Classes, Objects & Memory Layout',
      'Constructors, Destructors & Copying',
      'Operator Overloading (+, ==, <<)',
      'Single & Multilevel Inheritance',
      'Multiple Inheritance & Diamond Problem',
      'Virtual Base Classes & Function Overriding'
    ],
    CSC167: [
      '8085 Architecture & Functional Blocks',
      'Address & Data Bus Demultiplexing',
      'Control & Status Signals (IO/M, S0, S1)',
      'Machine Cycles & Fetch/Execute Timing',
      '8085 Instruction Set (MOV, LXI, MVI)',
      'Branching, Stacks & Subroutines (CALL/RET)',
      'Hardware Interrupts (TRAP, RST 7.5-5.5)'
    ],
    MTH168: [
      'Systems of Linear Equations & Row Ops',
      'Echelon Form & Reduced RREF',
      'Vector Equations & Linear Combinations',
      'Matrix Operations & Inverses (A^-1)',
      'Subspaces, Null Space & Column Space',
      'Dimension & Rank-Nullity Theorem',
      'Eigenvalues & Characteristic Equation'
    ],
    STA169: [
      'Data Presentation & Frequency Histograms',
      'Measures of Central Tendency (Mean/Median)',
      'Measures of Dispersion (Variance, StdDev)',
      'Coefficient of Variation (C.V.) Analysis',
      'Raw & Central Moments (r-th moments)',
      'Skewness & Kurtosis (Karl Pearson & Bowley)',
      'Probability Axioms & Bayes Theorem'
    ]
  };

  const baselineStats: Record<SubjectCode, { hours: number[]; confidence: number[] }> = {
    CSC165: {
      hours: [1.8, 2.2, 1.5, 2.5, 2.0, 3.0, 2.5],
      confidence: [45, 50, 56, 62, 68, 74, 80]
    },
    CSC166: {
      hours: [2.5, 3.0, 2.0, 3.5, 2.8, 4.0, 3.2],
      confidence: [52, 58, 65, 72, 78, 85, 88]
    },
    CSC167: {
      hours: [1.5, 2.0, 1.8, 2.2, 1.5, 2.5, 2.2],
      confidence: [38, 44, 48, 55, 60, 68, 72]
    },
    MTH168: {
      hours: [2.2, 2.8, 2.5, 3.2, 2.5, 3.5, 3.0],
      confidence: [42, 48, 52, 58, 62, 68, 74]
    },
    STA169: {
      hours: [1.5, 1.8, 2.0, 1.5, 2.2, 2.0, 2.5],
      confidence: [50, 55, 62, 66, 70, 76, 82]
    }
  };

  const record: Partial<SubjectAnalyticsRecord> = {};

  (Object.keys(baselineStats) as SubjectCode[]).forEach((code) => {
    record[code] = baselineStats[code].hours.map((hrs, idx) => {
      const dNum = startDay + idx;
      return {
        dayNumber: dNum,
        dayLabel: `Day ${dNum}`,
        dateStr: `D${dNum}`,
        studyHours: hrs,
        confidenceScore: baselineStats[code].confidence[idx],
        keyTopicStudied: topicsMap[code][idx % topicsMap[code].length]
      };
    });
  });

  return record as SubjectAnalyticsRecord;
};

export const SubjectStudyConfidenceVisualizer: React.FC = () => {
  const { currentDay } = useWorkspace();
  const [selectedSubject, setSelectedSubject] = useState<SubjectCode | 'ALL'>('CSC166');
  const [activeTab, setActiveTab] = useState<'dual_trend' | 'subject_comparison' | 'mastery_radar'>('dual_trend');
  const [analyticsData, setAnalyticsData] = useState<SubjectAnalyticsRecord>(() => {
    if (typeof window !== 'undefined') {
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
          const parsed = JSON.parse(stored);
          if (parsed && parsed.CSC165 && parsed.CSC166) {
            return parsed;
          }
        }
      } catch (e) {
        console.error('Failed to parse analyticsData from localStorage', e);
      }
    }
    return generateDefaultAnalytics(currentDay);
  });

  // Edit / Log modal state
  const [isLogModalOpen, setIsLogModalOpen] = useState(false);
  const [logSubject, setLogSubject] = useState<SubjectCode>('CSC166');
  const [logDayIndex, setLogDayIndex] = useState<number>(6);
  const [inputHours, setInputHours] = useState<number>(3.0);
  const [inputConfidence, setInputConfidence] = useState<number>(85);
  const [inputTopic, setInputTopic] = useState<string>('');

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(analyticsData));
    } catch (e) {
      console.error('Failed to save analyticsData', e);
    }
  }, [analyticsData]);

  const handleSaveMetric = () => {
    setAnalyticsData((prev) => {
      const updated = { ...prev };
      const subjectDays = [...updated[logSubject]];
      if (subjectDays[logDayIndex]) {
        subjectDays[logDayIndex] = {
          ...subjectDays[logDayIndex],
          studyHours: Number(inputHours),
          confidenceScore: Number(inputConfidence),
          keyTopicStudied: inputTopic.trim() || subjectDays[logDayIndex].keyTopicStudied
        };
      }
      updated[logSubject] = subjectDays;
      return updated;
    });
    setIsLogModalOpen(false);
  };

  const handleOpenLogModal = (code: SubjectCode, dayIdx = 6) => {
    setLogSubject(code);
    setLogDayIndex(dayIdx);
    const curr = analyticsData[code][dayIdx] || analyticsData[code][0];
    setInputHours(curr.studyHours);
    setInputConfidence(curr.confidenceScore);
    setInputTopic(curr.keyTopicStudied);
    setIsLogModalOpen(true);
  };

  const handleResetDefaults = () => {
    const def = generateDefaultAnalytics(currentDay);
    setAnalyticsData(def);
  };

  // Data for View 1: 7-Day Trend
  const currentSubjectData = selectedSubject === 'ALL'
    ? analyticsData.CSC166.map((item, idx) => {
        const totalHours = (Object.keys(analyticsData) as SubjectCode[]).reduce(
          (sum, code) => sum + analyticsData[code][idx].studyHours,
          0
        );
        const avgConfidence = Math.round(
          (Object.keys(analyticsData) as SubjectCode[]).reduce(
            (sum, code) => sum + analyticsData[code][idx].confidenceScore,
            0
          ) / 5
        );
        return {
          dayNumber: item.dayNumber,
          dayLabel: item.dayLabel,
          dateStr: item.dateStr,
          studyHours: Number((totalHours / 5).toFixed(1)),
          totalStudyHours: Number(totalHours.toFixed(1)),
          confidenceScore: avgConfidence,
          keyTopicStudied: 'All 5 Subjects Combined'
        };
      })
    : analyticsData[selectedSubject];

  // Data for View 2: Cross-Subject Comparison
  const crossSubjectData = (Object.keys(analyticsData) as SubjectCode[]).map((code) => {
    const subj = CSIT_SUBJECTS.find((s) => s.code === code);
    const metrics = analyticsData[code];
    const totalHours = metrics.reduce((acc, curr) => acc + curr.studyHours, 0);
    const avgConfidence = Math.round(
      metrics.reduce((acc, curr) => acc + curr.confidenceScore, 0) / metrics.length
    );
    const latestConfidence = metrics[metrics.length - 1].confidenceScore;

    return {
      code,
      name: subj?.alias || code,
      totalHours: Number(totalHours.toFixed(1)),
      avgHours: Number((totalHours / metrics.length).toFixed(1)),
      confidence: latestConfidence,
      avgConfidence,
      color: subj?.color || '#3b82f6'
    };
  });

  // Data for View 3: Radar Chart
  const radarData = crossSubjectData.map((item) => ({
    subject: item.code,
    name: item.name,
    normalizedHours: Math.min(100, Math.round((item.totalHours / 25) * 100)),
    actualHours: item.totalHours,
    confidence: item.confidence
  }));

  const highestConfidenceSubj = [...crossSubjectData].sort((a, b) => b.confidence - a.confidence)[0];
  const lowestConfidenceSubj = [...crossSubjectData].sort((a, b) => a.confidence - b.confidence)[0];
  const total7DayHours = crossSubjectData.reduce((acc, s) => acc + s.totalHours, 0);
  const avgOverallConfidence = Math.round(
    crossSubjectData.reduce((acc, s) => acc + s.confidence, 0) / crossSubjectData.length
  );

  return (
    <div className="p-5 rounded-xl bg-[#14161b] border border-[#22252e] space-y-5">
      {/* Header and Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#22252e] pb-4">
        <div>
          <div className="flex items-center gap-2 text-xs text-neutral-400">
            <span className="text-cyan-400 font-medium">Performance Analytics</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span>Last 7 Days Rolling Window</span>
          </div>
          <h2 className="text-base sm:text-lg font-semibold text-white mt-1">
            Study Hours vs Learning Confidence
          </h2>
          <p className="text-xs text-neutral-400 mt-0.5">
            Correlation between deep work hours invested and self-assessed syllabus mastery.
          </p>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          {/* Segmented control for view mode */}
          <div className="flex items-center p-0.5 rounded-lg bg-[#181a20] border border-[#252832] text-xs">
            <button
              onClick={() => setActiveTab('dual_trend')}
              className={`px-3 py-1 rounded-md text-[11px] font-medium transition-colors ${
                activeTab === 'dual_trend'
                  ? 'bg-[#282b35] text-white font-semibold shadow-xs'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              7-Day Trend
            </button>
            <button
              onClick={() => setActiveTab('subject_comparison')}
              className={`px-3 py-1 rounded-md text-[11px] font-medium transition-colors ${
                activeTab === 'subject_comparison'
                  ? 'bg-[#282b35] text-white font-semibold shadow-xs'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              Subject Comparison
            </button>
            <button
              onClick={() => setActiveTab('mastery_radar')}
              className={`px-3 py-1 rounded-md text-[11px] font-medium transition-colors ${
                activeTab === 'mastery_radar'
                  ? 'bg-[#282b35] text-white font-semibold shadow-xs'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              Mastery Radar
            </button>
          </div>

          <button
            onClick={() => handleOpenLogModal(selectedSubject === 'ALL' ? 'CSC166' : selectedSubject)}
            className="px-3 py-1 rounded-lg bg-[#1a1c22] hover:bg-[#22252e] text-neutral-200 border border-[#2a2d38] text-xs font-medium flex items-center gap-1.5 transition-colors"
          >
            <Sliders className="w-3.5 h-3.5 text-cyan-400" />
            <span>Log Metric</span>
          </button>
        </div>
      </div>

      {/* Subject Filter Segmented Bar (Visible when in 7-Day Trend) */}
      {activeTab === 'dual_trend' && (
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
          <button
            onClick={() => setSelectedSubject('ALL')}
            className={`px-3 py-1.5 rounded-md font-mono text-[11px] transition-colors shrink-0 ${
              selectedSubject === 'ALL'
                ? 'bg-[#282b35] text-white font-semibold border border-[#383d4c]'
                : 'bg-[#181a20] text-neutral-400 hover:text-white border border-[#252832]'
            }`}
          >
            All 5 Subjects (Average)
          </button>

          {CSIT_SUBJECTS.map((subj) => {
            const isSelected = selectedSubject === subj.code;
            return (
              <button
                key={subj.code}
                onClick={() => setSelectedSubject(subj.code)}
                className={`px-3 py-1.5 rounded-md font-mono text-[11px] transition-colors shrink-0 flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-[#282b35] text-white font-semibold border border-[#383d4c]'
                    : 'bg-[#181a20] text-neutral-400 hover:text-white border border-[#252832]'
                }`}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: subj.color }}
                />
                <span>{subj.code}</span>
                <span className="text-[10px] text-neutral-400 font-sans hidden md:inline">
                  {subj.alias}
                </span>
              </button>
            );
          })}
        </div>
      )}

      {/* Main Chart Canvas Area */}
      <div className="rounded-xl bg-[#101115] border border-[#22252e] p-4 sm:p-5">
        {activeTab === 'dual_trend' && (
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-neutral-400 gap-2">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-xs bg-cyan-500 inline-block" />
                  <span className="text-neutral-300">
                    {selectedSubject === 'ALL' ? 'Total Study Hours' : 'Study Hours (Daily Bars)'}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-1 rounded-full bg-emerald-400 inline-block" />
                  <span className="text-neutral-300">Learning Confidence (% Line)</span>
                </div>
              </div>
              <div className="text-[11px] font-mono text-neutral-500">
                Left Axis: Hours (h) · Right Axis: Confidence (%)
              </div>
            </div>

            <div className="w-full h-72 sm:h-80">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart
                  data={currentSubjectData}
                  margin={{ top: 10, right: 15, left: -10, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="hoursBarGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#06b6d4" stopOpacity={0.7} />
                      <stop offset="100%" stopColor="#0891b2" stopOpacity={0.2} />
                    </linearGradient>
                    <linearGradient id="confidenceAreaGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#10b981" stopOpacity={0.25} />
                      <stop offset="100%" stopColor="#10b981" stopOpacity={0.0} />
                    </linearGradient>
                  </defs>

                  <CartesianGrid strokeDasharray="3 3" stroke="#22242a" vertical={false} />
                  <XAxis
                    dataKey="dayLabel"
                    stroke="#525666"
                    tick={{ fill: '#8c909e', fontSize: 11 }}
                    tickLine={{ stroke: '#2e313b' }}
                  />
                  <YAxis
                    yAxisId="left"
                    orientation="left"
                    stroke="#06b6d4"
                    domain={[0, selectedSubject === 'ALL' ? 18 : 6]}
                    tick={{ fill: '#06b6d4', fontSize: 11 }}
                    tickLine={{ stroke: '#06b6d4' }}
                    unit="h"
                  />
                  <YAxis
                    yAxisId="right"
                    orientation="right"
                    stroke="#10b981"
                    domain={[0, 100]}
                    tick={{ fill: '#10b981', fontSize: 11 }}
                    tickLine={{ stroke: '#10b981' }}
                    unit="%"
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#14161b',
                      border: '1px solid #2a2d38',
                      borderRadius: '8px',
                      color: '#ffffff',
                      fontSize: '12px'
                    }}
                    labelStyle={{ color: '#06b6d4', fontWeight: '600' }}
                    formatter={(value: any, name?: any) => {
                      const nameStr = String(name || '');
                      if (nameStr === 'studyHours' || nameStr === 'Study Hours' || nameStr === 'totalStudyHours') {
                        return [`${value} Hours`, 'Study Time'];
                      }
                      if (nameStr === 'confidenceScore' || nameStr === 'Learning Confidence') {
                        return [`${value}%`, 'Confidence'];
                      }
                      return [value, nameStr];
                    }}
                  />

                  <Bar
                    yAxisId="left"
                    dataKey={selectedSubject === 'ALL' ? 'totalStudyHours' : 'studyHours'}
                    name="Study Hours"
                    fill="url(#hoursBarGradient)"
                    radius={[3, 3, 0, 0]}
                    maxBarSize={40}
                  />

                  <Area
                    yAxisId="right"
                    type="monotone"
                    dataKey="confidenceScore"
                    fill="url(#confidenceAreaGradient)"
                    stroke="none"
                  />

                  <Line
                    yAxisId="right"
                    type="monotone"
                    dataKey="confidenceScore"
                    name="Learning Confidence"
                    stroke="#10b981"
                    strokeWidth={2}
                    dot={{ fill: '#10b981', r: 3.5, strokeWidth: 1, stroke: '#14161b' }}
                    activeDot={{ r: 5, fill: '#34d399' }}
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </div>

            {/* Daily Topic Highlights Footer */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 pt-2 border-t border-[#1f2129] text-[11px]">
              {currentSubjectData.map((d, idx) => (
                <div
                  key={idx}
                  onClick={() => handleOpenLogModal(selectedSubject === 'ALL' ? 'CSC166' : selectedSubject, idx)}
                  className="p-2 rounded bg-[#15171d] hover:bg-[#1a1d25] border border-[#22242e] cursor-pointer transition-colors"
                >
                  <div className="flex items-center justify-between font-mono text-neutral-400">
                    <span className="font-semibold text-neutral-300">{d.dayLabel}</span>
                    <span className="text-cyan-400 tabular-nums">{d.studyHours}h</span>
                  </div>
                  <div className="text-emerald-400 font-mono font-medium mt-0.5 tabular-nums">
                    {d.confidenceScore}% conf
                  </div>
                  <div className="text-neutral-400 line-clamp-1 mt-1 text-[10px]">
                    {d.keyTopicStudied}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'subject_comparison' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs text-neutral-400">
              <span>All 5 Subjects: Total Study Hours vs Current Confidence Level</span>
              <span className="font-mono text-neutral-500">Aggregated Over Last 7 Days</span>
            </div>

            <div className="w-full h-72 sm:h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={crossSubjectData}
                  margin={{ top: 10, right: 15, left: -10, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#22242a" vertical={false} />
                  <XAxis
                    dataKey="name"
                    stroke="#525666"
                    tick={{ fill: '#8c909e', fontSize: 11 }}
                  />
                  <YAxis
                    yAxisId="left"
                    orientation="left"
                    stroke="#06b6d4"
                    tick={{ fill: '#06b6d4', fontSize: 11 }}
                    unit="h"
                  />
                  <YAxis
                    yAxisId="right"
                    orientation="right"
                    stroke="#10b981"
                    domain={[0, 100]}
                    tick={{ fill: '#10b981', fontSize: 11 }}
                    unit="%"
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#14161b',
                      border: '1px solid #2a2d38',
                      borderRadius: '8px',
                      color: '#ffffff',
                      fontSize: '12px'
                    }}
                  />
                  <Legend
                    wrapperStyle={{ fontSize: '11px', paddingTop: '8px' }}
                  />
                  <Bar
                    yAxisId="left"
                    dataKey="totalHours"
                    name="7-Day Study Hours"
                    fill="#06b6d4"
                    radius={[3, 3, 0, 0]}
                  />
                  <Bar
                    yAxisId="right"
                    dataKey="confidence"
                    name="Confidence (%)"
                    fill="#10b981"
                    radius={[3, 3, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-5 gap-2.5 pt-2">
              {crossSubjectData.map((item) => (
                <div
                  key={item.code}
                  className="p-3 rounded-lg bg-[#15171d] border border-[#22252e] space-y-1"
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono font-semibold" style={{ color: item.color }}>
                      {item.code}
                    </span>
                    <span className="font-mono text-cyan-400 tabular-nums">{item.totalHours}h</span>
                  </div>
                  <div className="text-[11px] font-medium text-white truncate">{item.name}</div>
                  <div className="flex items-center justify-between text-[11px] pt-1 text-neutral-400">
                    <span>Confidence:</span>
                    <span className="font-mono font-medium text-emerald-400 tabular-nums">{item.confidence}%</span>
                  </div>
                  <div className="w-full bg-[#0d0e11] h-1.5 rounded-full overflow-hidden">
                    <div
                      className="bg-emerald-500 h-full rounded-full transition-all"
                      style={{ width: `${item.confidence}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'mastery_radar' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs text-neutral-400">
              <span>Syllabus Balance Radar: Study Hours Effort vs Confidence Score</span>
              <span className="font-mono text-neutral-500">Polygon Analysis</span>
            </div>

            <div className="w-full h-80 flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart outerRadius="75%" data={radarData}>
                  <PolarGrid stroke="#262832" />
                  <PolarAngleAxis
                    dataKey="name"
                    tick={{ fill: '#a3a7b5', fontSize: 11 }}
                  />
                  <PolarRadiusAxis
                    angle={30}
                    domain={[0, 100]}
                    stroke="#3e4250"
                    tick={{ fill: '#6b7080', fontSize: 10 }}
                  />
                  <Radar
                    name="Confidence (%)"
                    dataKey="confidence"
                    stroke="#10b981"
                    fill="#10b981"
                    fillOpacity={0.25}
                  />
                  <Radar
                    name="Effort Scale (Hours)"
                    dataKey="normalizedHours"
                    stroke="#06b6d4"
                    fill="#06b6d4"
                    fillOpacity={0.15}
                  />
                  <Legend wrapperStyle={{ fontSize: '11px' }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#14161b',
                      border: '1px solid #2a2d38',
                      borderRadius: '8px',
                      color: '#ffffff',
                      fontSize: '12px'
                    }}
                    formatter={(value: any, name?: any) => {
                      const nameStr = String(name || '');
                      if (nameStr === 'Effort Scale (Hours)') {
                        return [`${value}% (scaled from total hours)`, 'Study Effort'];
                      }
                      return [`${value}%`, nameStr];
                    }}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>

            <div className="p-3 rounded-lg bg-[#15171d] border border-[#22252e] text-xs text-neutral-400 flex items-start gap-2.5">
              <Info className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span className="leading-relaxed">
                Balanced preparation requires the green confidence polygon to expand evenly across all five vertices. Indented vertices indicate topics requiring targeted revision.
              </span>
            </div>
          </div>
        )}
      </div>

      {/* 4 Analytics Insight Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
        <div className="p-3.5 rounded-lg bg-[#14161b] border border-[#22252e] flex items-start gap-3">
          <div className="p-2 rounded-md bg-[#1a1d25] text-emerald-400 shrink-0 border border-[#262832]">
            <Award className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[11px] text-neutral-400">Peak Mastery Subject</div>
            <div className="text-white font-semibold text-sm mt-0.5">
              {highestConfidenceSubj.code} ({highestConfidenceSubj.name})
            </div>
            <div className="text-emerald-400 font-mono text-[11px] mt-0.5 tabular-nums">
              {highestConfidenceSubj.confidence}% Confidence · {highestConfidenceSubj.totalHours}h
            </div>
          </div>
        </div>

        <div className="p-3.5 rounded-lg bg-[#14161b] border border-[#22252e] flex items-start gap-3">
          <div className="p-2 rounded-md bg-[#1a1d25] text-amber-400 shrink-0 border border-[#262832]">
            <AlertCircle className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[11px] text-neutral-400">Exam Priority Alert</div>
            <div className="text-white font-semibold text-sm mt-0.5">
              {lowestConfidenceSubj.code} ({lowestConfidenceSubj.name})
            </div>
            <div className="text-amber-400 font-mono text-[11px] mt-0.5 tabular-nums">
              {lowestConfidenceSubj.confidence}% Confidence · Needs Practice
            </div>
          </div>
        </div>

        <div className="p-3.5 rounded-lg bg-[#14161b] border border-[#22252e] flex items-start gap-3">
          <div className="p-2 rounded-md bg-[#1a1d25] text-cyan-400 shrink-0 border border-[#262832]">
            <Clock className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[11px] text-neutral-400">7-Day Study Investment</div>
            <div className="text-white font-semibold text-sm mt-0.5 font-mono tabular-nums">
              {total7DayHours.toFixed(1)} Total Hours
            </div>
            <div className="text-cyan-400 font-mono text-[11px] mt-0.5 tabular-nums">
              Avg {(total7DayHours / 7).toFixed(1)}h/day across 5 courses
            </div>
          </div>
        </div>

        <div className="p-3.5 rounded-lg bg-[#14161b] border border-[#22252e] flex items-start gap-3">
          <div className="p-2 rounded-md bg-[#1a1d25] text-neutral-400 shrink-0 border border-[#262832]">
            <Zap className="w-4 h-4 text-purple-400" />
          </div>
          <div>
            <div className="text-[11px] text-neutral-400">Overall Syllabus Confidence</div>
            <div className="text-white font-semibold text-sm mt-0.5 font-mono tabular-nums">
              {avgOverallConfidence}% Average Grasp
            </div>
            <div className="text-neutral-400 font-mono text-[11px] mt-0.5 tabular-nums">
              +14% progression over 7 days
            </div>
          </div>
        </div>
      </div>

      {/* Metric Customization / Log Modal */}
      {isLogModalOpen && (
        <div className="fixed inset-0 bg-black/75 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-[#14161b] border border-[#252832] rounded-xl max-w-md w-full p-5 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-[#22252e] pb-3">
              <div className="flex items-center gap-2">
                <Sliders className="w-4 h-4 text-cyan-400" />
                <h3 className="text-sm font-semibold text-white">Log Study Hours & Confidence</h3>
              </div>
              <button
                onClick={() => setIsLogModalOpen(false)}
                className="text-neutral-400 hover:text-white text-xs p-1"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <label className="block text-neutral-400 mb-1 font-medium">Course Subject</label>
                <select
                  value={logSubject}
                  onChange={(e) => {
                    const code = e.target.value as SubjectCode;
                    setLogSubject(code);
                    const curr = analyticsData[code][logDayIndex];
                    if (curr) {
                      setInputHours(curr.studyHours);
                      setInputConfidence(curr.confidenceScore);
                      setInputTopic(curr.keyTopicStudied);
                    }
                  }}
                  className="w-full bg-[#181a20] border border-[#262832] rounded-lg px-3 py-2 text-white font-mono focus:outline-hidden focus:border-cyan-500"
                >
                  {CSIT_SUBJECTS.map((s) => (
                    <option key={s.code} value={s.code}>
                      {s.code} — {s.alias} ({s.name})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-neutral-400 mb-1 font-medium">Day Timeline Slot</label>
                <select
                  value={logDayIndex}
                  onChange={(e) => {
                    const idx = Number(e.target.value);
                    setLogDayIndex(idx);
                    const curr = analyticsData[logSubject][idx];
                    if (curr) {
                      setInputHours(curr.studyHours);
                      setInputConfidence(curr.confidenceScore);
                      setInputTopic(curr.keyTopicStudied);
                    }
                  }}
                  className="w-full bg-[#181a20] border border-[#262832] rounded-lg px-3 py-2 text-white font-mono focus:outline-hidden focus:border-cyan-500"
                >
                  {analyticsData[logSubject].map((item, idx) => (
                    <option key={idx} value={idx}>
                      {item.dayLabel} (Day {item.dayNumber})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-neutral-400 font-medium">Study Hours Logged</label>
                  <span className="font-mono text-cyan-400 font-semibold tabular-nums">{inputHours} Hours</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="6"
                  step="0.5"
                  value={inputHours}
                  onChange={(e) => setInputHours(Number(e.target.value))}
                  className="w-full accent-cyan-400 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-neutral-400 font-medium">Learning Confidence</label>
                  <span className="font-mono text-emerald-400 font-semibold tabular-nums">{inputConfidence}%</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="100"
                  step="1"
                  value={inputConfidence}
                  onChange={(e) => setInputConfidence(Number(e.target.value))}
                  className="w-full accent-emerald-400 cursor-pointer"
                />
              </div>

              <div>
                <label className="block text-neutral-400 mb-1 font-medium">Core Topic Practiced</label>
                <input
                  type="text"
                  value={inputTopic}
                  onChange={(e) => setInputTopic(e.target.value)}
                  placeholder="e.g. Virtual Base Classes, Eigenvalues, 8085 Interrupts"
                  className="w-full bg-[#181a20] border border-[#262832] rounded-lg px-3 py-2 text-white placeholder-neutral-500 focus:outline-hidden focus:border-cyan-500"
                />
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between">
              <button
                type="button"
                onClick={handleResetDefaults}
                className="text-neutral-500 hover:text-neutral-300 text-xs underline"
              >
                Reset Defaults
              </button>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsLogModalOpen(false)}
                  className="px-3 py-1.5 rounded-lg bg-[#181a20] hover:bg-[#20222a] text-neutral-300 text-xs font-medium"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSaveMetric}
                  className="px-4 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-semibold shadow-xs"
                >
                  Save & Update Chart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
