import { CaseReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FetchGame, GameMode, GameState } from "../interface/store";

const initialState: GameState = {
  gameMode: 'guessByName',
  currentLevel: 0,
  currentQuestion: '',
  currentOptions: [],
  correctAnswer: '',
  answerSelected: '',
  score: {
    correct: 0,
    wrong: 0
  }
};

const setStartGame: CaseReducer<GameState, PayloadAction<GameMode>> = 
 (state: GameState, action: PayloadAction<GameMode>) => {
   state.gameMode = action.payload;
   state.currentLevel = 0;
   state.currentQuestion = '';
   state.currentOptions = [];
   state.correctAnswer = '';
   state.correctAnswer = '';
   state.score = {
    correct: 0,
    wrong: 0
    }
}

const selectAnswer: CaseReducer<GameState, PayloadAction<string>> =
 (state: GameState, action: PayloadAction<string>) => {
  state.answerSelected = action.payload;
}

const nextQuestion: CaseReducer<GameState, PayloadAction<FetchGame>> = 
(state: GameState, action: PayloadAction<FetchGame>) => {
  const { answer, wrongAnswers } = action.payload;

  if(state.currentLevel !== 0) {
    state.answerSelected === state.correctAnswer ? state.score.correct++ : state.score.wrong++; 
  }

  state.currentLevel = state.currentLevel + 1;
  state.currentQuestion = state.gameMode === 'guessByFlag' ? answer.name : answer.flag;
  state.correctAnswer = answer.name;
  state.currentOptions = wrongAnswers;
}

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setStartGame,
    nextQuestion,
    selectAnswer
  }
});

export const gameActions = gameSlice.actions;
export default gameSlice.reducer;
