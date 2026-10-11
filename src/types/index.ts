export type SubjectCode = 'CSC165' | 'CSC166' | 'CSC167' | 'MTH168' | 'STA169';

export type EnergyMode = 'minimum' | 'normal' | 'high'; // 2-3h, 4-6h, 6-8h

export type QuestionDifficulty = 1 | 2 | 3 | 4 | 5; // 1: Foundation, 2: Understanding, 3: Exam, 4: Challenge, 5: CS Application

export type QuestionClassification =
  | 'CORE_SYLLABUS'
  | 'PAST_QUESTION'
  | 'PRACTICE'
  | 'CHALLENGE'
  | 'PRACTICAL'
  | 'EXTRA';

export type QuestionType =
  | 'Definition'
  | 'Conceptual'
  | 'Explain'
  | 'Compare/Differentiate'
  | 'Proof'
  | 'Numerical'
  | 'Derivation'
  | 'Diagram'
  | 'Programming'
  | 'Assembly'
  | 'Short Answer'
  | 'Long Answer'
  | 'Practical'
  | 'Application'
  | 'Viva';

export type MistakeCode =
  | 'A' // Didn't understand concept
  | 'B' // Forgot formula
  | 'C' // Forgot definition
  | 'D' // Calculation mistake
  | 'E' // Logic mistake
  | 'F' // Programming syntax mistake
  | 'G' // Programming logic mistake
  | 'H' // Misread question
  | 'I' // Time-management problem
  | 'J' // Careless mistake
  | 'K'; // Could explain verbally but couldn't write solution

export type RevisionStage = 'R0' | 'R1' | 'R2' | 'R3' | 'R4' | 'R5'; // Same day, +1d, +3d, +7d, +14d, Before exam

export interface MistakeLogEntry {
  id: string;
  questionId?: string;
  questionText: string;
  subjectCode: SubjectCode;
  topic: string;
  mistakeCode: MistakeCode;
  whyIFailed: string;
  correctConcept: string;
  correctionAction: string;
  createdAt: string;
  nextRevisionDate: string;
  revisionStage: RevisionStage;
  isFixed: boolean;
}

export interface PYQQuestion {
  id: string;
  subjectCode: SubjectCode;
  unit: number;
  topic: string;
  subtopic?: string;
  year: string; // e.g. '2082 TU', '2081 TU', '2080 TU', '2079 TU', '2078 TU'
  section?: 'Section A (Long)' | 'Section B (Short)' | 'Section C (Objective/Problems)';
  question: string;
  marks: number;
  difficulty: QuestionDifficulty;
  questionType: QuestionType;
  classification: QuestionClassification;
  frequency: 'Frequently Observed' | 'Occasionally Observed' | 'Observed Once' | 'Model Question';
  source: 'Hamro CSIT' | 'EasyCSIT' | 'TU IOST Official';
  sourceUrl?: string;
  solutionHint?: string;
  solved?: boolean;
}

export interface SubjectUnit {
  unitNumber: number;
  title: string;
  hours: number;
  weightageMarks: number;
  topics: string[];
  keyFormulasOrConcepts?: string[];
  csApplications?: string[];
  commonMistakes?: string[];
  importantPYQs: PYQQuestion[];
}

export interface SubjectData {
  code: SubjectCode;
  legacyCode?: string; // e.g. 'CSC160'
  name: string;
  alias: string;
  credits: number;
  fullMarks: number;
  passMarks: number;
  theoryMarks: number;
  practicalMarks: number;
  internalMarks: number;
  description: string;
  color: string;
  badgeBg: string;
  badgeText: string;
  icon: string;
  hamroCsitUrl: string;
  easyCsitUrl: string;
  recommendedBooks: string[];
  examStrategy: string[];
  dependencyTree: {
    prerequisite: string;
    coreRoleInCS: string;
    nextInSemester3: string;
  };
  units: SubjectUnit[];
}

export interface DailyBlockTheory {
  topicTitle: string;
  whatIsIt: string;
  whyDoesItExist: string;
  howDoesItWork: string;
  whereIsItUsedInCS: string;
  keyDefinitions: string[];
  importantFormulasOrDiagrams: string[];
  commonMistakes: string[];
  simpleExample: string;
  csApplicationExample: string;
}

export interface ActiveRecallDrill {
  definitionQuestions: string[];
  explainQuestions: string[];
  whyQuestions: string[];
  differenceQuestions: string[];
  numericalOrCodeQuestions: string[];
}

export interface QuestionPracticeBlock {
  level1Easy: string;
  level2Medium: string;
  level3Exam: string;
  level4Challenge: string;
}

export interface DailySubjectPlan {
  subjectCode: SubjectCode;
  unit: number;
  topic: string;
  theory: DailyBlockTheory;
  activeRecall: ActiveRecallDrill;
  practiceQuestions: QuestionPracticeBlock;
  tuPyqTarget: string;
  codingTask: string;
}

export interface FortyFiveDayPlan {
  day: number;
  phase: 1 | 2 | 3 | 4 | 5;
  phaseName: string;
  phaseGoal: string;
  theme: string;
  targetHours: {
    minimum: number; // 2-3h
    normal: number; // 4-6h
    high: number; // 6-8h
  };
  subjects: DailySubjectPlan[];
  codingHabit: {
    task: string;
    difficulty: 'Beginner' | 'Intermediate' | 'OOP' | 'Algorithm';
    durationMinutes: number;
  };
  spacedRevisionDue: string[];
  sideQuest?: string;
  dailyChallenge: string;
  quote: string;
  completed: boolean;
  notes?: string;
  timeSpentMinutes?: number;
}

export interface HabitItem {
  id: string;
  name: string;
  emoji: string;
  category: 'mind' | 'body' | 'study' | 'discipline';
  description: string;
  target: string;
}

export type HabitDayLog = Record<string, boolean>;

export interface PracticalProject {
  id: string;
  title: string;
  tier: 'MICRO' | 'MINI' | 'SIDE' | 'CAPSTONE';
  level: 1 | 2 | 3 | 4 | 5;
  subjectConnection: SubjectCode;
  timeEstimate: string; // e.g. '1-3 Hours', '1-3 Days'
  description: string;
  skills: string[];
  features: string[];
  githubRepoTemplate: string;
  whatYouWillLearn: string;
  completed: boolean;
}

export interface SideQuest {
  id: string;
  title: string;
  category: 'Coding' | 'System' | 'Theory' | 'Linux' | 'Exploration' | 'Mindset';
  xpReward: number;
  description: string;
  completed: boolean;
}

export interface CsExplorationField {
  id: string;
  name: string;
  icon: string;
  whatIsIt: string;
  whyDoesItMatter: string;
  prerequisites: string[];
  beginnerProject: string;
  intermediateProject: string;
  toolsAndLanguages: string[];
  freeResources: { title: string; url: string }[];
  careerRoles: string[];
  connectionToCsitSem2: string;
}

export interface AiDependencyLog {
  id: string;
  date: string;
  problem: string;
  myOwnAttempt: string;
  aiHintReceived: string;
  whatILearned: string;
  canReproduceWithoutAi: boolean;
  status: 'In Progress' | 'Reproduced Independently' | 'Needs Review';
}

export interface BossBattle {
  week: number;
  title: string;
  description: string;
  milestoneTasks: string[];
  xpReward: number;
  isUnlocked: boolean;
  isCompleted: boolean;
}

export interface UserNote {
  id: string;
  title: string;
  subjectCode?: SubjectCode | 'GENERAL';
  content: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
  isPinned?: boolean;
}

export interface AppState {
  currentDay: number;
  energyMode: EnergyMode;
  userXp: number;
  dayPlans: FortyFiveDayPlan[];
  habitLogs: Record<number, HabitDayLog>;
  completedTopics: Record<string, boolean>;
  solvedPyqs: Record<string, boolean>;
  mistakeLogs: MistakeLogEntry[];
  aiDependencyLogs: AiDependencyLog[];
  projects: PracticalProject[];
  sideQuests: SideQuest[];
  bossBattles: BossBattle[];
  notes: UserNote[];
  totalStudyMinutes: number;
  winterArcStartDate: string;
  currentStreak: number;
  bestStreak: number;
  hasRecoveryShield: boolean;
}
