export interface RootState {
  game: GameState
}

export interface GameState {
  gameMode: GameMode;
  currentLevel: number;
  currentQuestion: string;
  currentOptions: {flag: string; name: string}[];
  correctAnswer: string;
  answerSelected: string;
  score: {
    correct: number;
    wrong: number;
  }
}

export type GameMode = 
'guessByName' | 
'guessByFlag' |
'colorTheFlag' |
'guessByMap' |
'random';

export interface FetchGame {
  answer: OptionFlag,
  wrongAnswers: OptionFlag[]
}

interface OptionFlag {
  name: string;
  flag: string;
}