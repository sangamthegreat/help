import { PYQQuestion, SubjectCode } from '../types';
import { FIVE_YEAR_QUESTION_BANK } from './pastPapersData';

// Flatten all questions from the curated 5-Year Question Bank (2078 - 2082 TU)
export interface EnrichedPYQQuestion extends PYQQuestion {
  type?: string;
}

export const ALL_PYQS: EnrichedPYQQuestion[] = FIVE_YEAR_QUESTION_BANK.flatMap((paper) =>
  paper.sections.flatMap((section) =>
    section.questions.map((q) => ({
      ...q,
      type: q.questionType, // backward compatibility with older filters
    }))
  )
);
