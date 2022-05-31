import { Box } from "@mui/material";
import React from "react";
import Header from "./Header";
import Snb from "./snb/Snb";

const AppLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default AppLayout;
