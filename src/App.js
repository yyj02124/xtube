import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Header from "./layout/Header";
import Main from "./page/Main";
import theme from "./util/Colorcss";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<AppLayout></AppLayout>} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
