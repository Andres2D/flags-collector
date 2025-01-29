import { CaseReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GameMode, GameState } from "../interface/store";

const initialState: GameState = {
  gameMode: 'guessByFlag',
  currentLevel: 0,
  currentQuestion: '',
  currentOptions: [],
  correctAnswer: '',
  score: {
    correct: 0,
    wrong: 0
  }
};

const setStartGame: CaseReducer<GameState, PayloadAction<GameMode>> = 
 (state: GameState, action: PayloadAction<GameMode>) => {
  state.gameMode = action.payload;
}

const nextQuestion: CaseReducer<GameState, PayloadAction<string>> = 
(state: GameState, action: PayloadAction<string>) => {
  const answer = action.payload;

  answer === state.correctAnswer ? state.score.correct++ : state.score.wrong++;
  state.currentLevel = state.currentLevel++;
  state.currentQuestion = 'Define';
  state.correctAnswer = 'Test';
  state.currentOptions = ['A', 'B', 'C', 'D'];
}

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setStartGame,
    nextQuestion
  }
});

export const gameActions = gameSlice.actions;
export default gameSlice.reducer;
