import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000",
      contrastText: "#fff",
    },
    secondary: {
      main: "#f2f2f2",
      contrastText: "#fff",
    },

    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});

export default theme;
