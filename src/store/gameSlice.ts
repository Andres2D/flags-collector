import { CaseReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ColorsGame, FetchGame, GameMode, GameState, OptionFlag } from "../interface/store";

const initialState: GameState = {
  gameMode: 'guessByName',
  currentLevel: 0,
  game: [],
  score: {
    correct: 0,
    wrong: 0
  }
};

const setStartGame: CaseReducer<GameState, PayloadAction<{gameMode: GameMode, data: FetchGame[] | ColorsGame[]}>> = 
 (state: GameState, action: PayloadAction<{gameMode: GameMode, data: FetchGame[] | ColorsGame[]}>) => {
  const { gameMode, data } = action.payload; 
  state.gameMode = gameMode;
  state.currentLevel = 1;
  state.game = data;
  state.score = {
    correct: 0,
    wrong: 0
  }
}

const updateScore: CaseReducer<GameState, PayloadAction<string>> = 
  (state: GameState, action: PayloadAction<string>) => {
  const currentGame = state.game[state.currentLevel - 1];
  const gameAnswer = currentGame.answer as OptionFlag; 
  action.payload === gameAnswer.name ? state.score.correct++ : state.score.wrong++; 
}

const updateColorsScore: CaseReducer<GameState, PayloadAction<string[]>> = 
  (state: GameState, action: PayloadAction<string[]>) => {
  const currentGame = state.game[state.currentLevel - 1];

  if(JSON.stringify(currentGame.answer) === JSON.stringify(action.payload)) {
    state.score.correct++;
  } else {
    state.score.wrong++;
  }

}

const nextQuestion: CaseReducer<GameState> = 
(state: GameState) => {
  state.currentLevel = state.currentLevel + 1;
}

const setEndGame: CaseReducer<GameState> = 
(_state: GameState) => {
  _state = initialState;
}

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setStartGame,
    nextQuestion,
    updateScore,
    setEndGame,
    updateColorsScore
  }
});

export const gameActions = gameSlice.actions;
export default gameSlice.reducer;
