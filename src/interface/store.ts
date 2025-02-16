export interface RootState {
  game: GameState
}

export interface GameState {
  gameMode: GameMode;
  currentLevel: number;
  game: FetchGame[] | ColorsGame[];
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

export interface ColorsGame {
  answer: string[];
  options: string[];
  countryName: string;
  direction: 'vertical' | 'horizontal'
}

export interface OptionFlag {
  name: string;
  flag: string;
}