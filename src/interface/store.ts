export interface RootState {
  game: GameState
}

export interface GameState {
  gameMode: GameMode;
  currentLevel: number;
  currentQuestion: string;
  currentOptions: string[];
  correctAnswer: string;
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
