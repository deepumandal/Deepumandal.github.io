import { configureStore } from "@reduxjs/toolkit";
import appConfig from "../appConfig/appConfig";
import generalSlice from "./Slices/general.slice";

const ReduxStore = configureStore({
  reducer: {
    generalSlice,
    // todo
  },
  devTools: appConfig.env,
});

export type RootState = ReturnType<typeof ReduxStore.getState>;
export type AppDispatch = typeof ReduxStore.dispatch;

export default ReduxStore;
