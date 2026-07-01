export interface Question {
  id: number;
  // text può contenere LaTeX tra $...$ o $$...$$
  text: string;
  // Per domande a scelta multipla singola o multipla
  type: 'single' | 'multi';
  options: string[];
  // Indici corretti (0-based)
  correctIndices: number[];
  explanation: string;
  // Categoria per il tracking
  category: string;
}

export enum AppView {
  HOME = 'HOME',
  QUIZ = 'QUIZ',
  RESULTS = 'RESULTS',
  STATS = 'STATS',
}

export interface QuizResult {
  questionId: number;
  correct: boolean;
  selectedIndices: number[];
}
