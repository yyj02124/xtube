import { CssBaseline, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Snb from "./layout/snb/Snb";

import Main from "./page/Main";
import theme from "./util/Colorcss";

function App() {
  const [snbOpen, setSnbOpen] = useState(false);

  const onSnbClick = () => {
    setSnbOpen(!snbOpen);
  };
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route
            path="/"
            element={
              <AppLayout onSnbClick={() => onSnbClick()} snbOpen={snbOpen}>
                <Main onclick={snbOpen} />
              </AppLayout>
            }
          />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
