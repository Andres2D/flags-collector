import { CaseReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FetchGame, GameMode, GameState } from "../interface/store";

const initialState: GameState = {
  gameMode: 'guessByName',
  currentLevel: 0,
  game: [],
  score: {
    correct: 0,
    wrong: 0
  }
};

const setStartGame: CaseReducer<GameState, PayloadAction<{gameMode: GameMode, data: FetchGame[]}>> = 
 (state: GameState, action: PayloadAction<{gameMode: GameMode, data: FetchGame[]}>) => {
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
  action.payload === currentGame.answer.name ? state.score.correct++ : state.score.wrong++; 
}

const nextQuestion: CaseReducer<GameState> = 
(state: GameState) => {
  state.currentLevel = state.currentLevel + 1;
}

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setStartGame,
    nextQuestion,
    updateScore
  }
});

export const gameActions = gameSlice.actions;
export default gameSlice.reducer;
