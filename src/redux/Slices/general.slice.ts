import { createSlice } from "@reduxjs/toolkit";
import { generalState } from "../initialState/general";
import switchThemeMode from "../modules/switchThemeMode";
import switchTab from "../modules/switchTab";

const GeneralSlice = createSlice({
  name: "GeneralSlice",
  initialState: generalState,
  reducers: {
    switchThemeModeReducer: switchThemeMode,
    switchTabReducer : switchTab
    // TODO
  },
});

export const { switchThemeModeReducer,switchTabReducer } = GeneralSlice.actions;

export default GeneralSlice.reducer;
