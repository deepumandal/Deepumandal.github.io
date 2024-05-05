export interface IgeneralState {
  activeTheme: "dark" | "light";
}
export const generalState: IgeneralState = {
  activeTheme: window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light",
};
