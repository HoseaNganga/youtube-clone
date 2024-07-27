import { createTheme } from "@mui/material";

export const Colors = {
  primary: "#5f2c3e",
  secondary: "#d1adcc",
  success: "#FFF",
  info: "#fff",
  danger: "#FF5722",
  warning: "#FFC107",
  dark: "#0e1b20",
  light: "#aaa",
  muted: "#abafb3",
  border: "#DDDFE1",
  inverse: "#2F3D4A",
  shaft: "red",
  ///////////////
  // Grays
  ///////////////
  dim_grey: "#696969",
  dove_gray: "#d5d5d5",
  body_bg: "#f3f6f9",
  light_gray: "rgb(230,230,230)",
  ///////////////
  // Solid Color
  ///////////////
  white: "#fff",
  black: "#000",
};

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: Colors.primary,
    },
    secondary: {
      main: Colors.secondary,
    },
    info: {
      main: Colors.info,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
    },
  },
});

export default theme;
