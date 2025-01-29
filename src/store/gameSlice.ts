import { CaseReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GameState } from "../interface/store";

const initialState: GameState = {
  test: 'Andres'
};

const updateTest: CaseReducer<GameState, PayloadAction<string>> = 
 (state: GameState, action: PayloadAction<string>) => {
  state.test = action.payload;
 } 

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    updateTest
  }
});

export const gameActions = gameSlice.actions;
export default gameSlice.reducer;
