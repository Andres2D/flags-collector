export interface RootState {
  game: GameState
}

export interface GameState {
  gameMode: GameMode;
  currentLevel: number;
  game: FetchGame[];
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
  options: OptionFlag[]
}

interface OptionFlag {
  name: string;
  flag: string;
}