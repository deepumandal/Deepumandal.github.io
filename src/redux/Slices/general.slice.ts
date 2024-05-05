import { createSlice } from "@reduxjs/toolkit";
import { generalState } from "../initialState/general";
import switchThemeMode from "../modules/switchThemeMode";

const GeneralSlice = createSlice({
  name: "GeneralSlice",
  initialState: generalState,
  reducers: {
    // TODO
    switchThemeModeReducer: switchThemeMode,
  },
});

export const { switchThemeModeReducer } = GeneralSlice.actions;

export default GeneralSlice.reducer;
