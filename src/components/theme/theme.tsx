import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  colors: {
    thistheme: {
      text: "#001c55",
      background: "#edf9fe",
      notselected: "#576c93",
      describe: "#7f8daa"
    },
  },
});

// theme.js
export const appTheme = {
  body: "#EDF9FE",
  text: "#001C55",
  expTxtColor: "#000a12",
  highlight: "#A6E1FA",
  dark: "#00072D",
  secondaryText: "#7F8DAA",
  imageHighlight: "#0E6BA8",
  compImgHighlight: "#E6E6E6",
  jacketColor: "#0A2472",
  headerColor: "#0E6BA877",
  splashBg: "#001C55",
};
export interface ThemeInterface {
  body: string;
  text: string;
  expTxtColor: string;
  highlight: string;
  dark: string;
  secondaryText: string;
  imageHighlight: string;
  compImgHighlight: string;
  jacketColor: string;
  headerColor: string;
  splashBg: string;
}
export default theme;
