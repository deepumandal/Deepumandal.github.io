import { IgeneralState } from "../initialState/general";

export default function (state: IgeneralState) {
  if (state.activeTheme === "dark") {
    state.activeTheme = "light";
    document.body.classList.remove("dark");
  } else {
    state.activeTheme = "dark";
    document.body.classList.add("dark");
  }
}
