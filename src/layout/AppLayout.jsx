import { Box } from "@mui/material";
import React, { useState } from "react";
import Header from "./Header";
import Snb from "./snb/Snb";

const AppLayout = ({ children }) => {
  const [snbOpen, setSnbOpen] = useState(false);

  const onSnbClick = () => {
    setSnbOpen(!snbOpen);
  };
  return (
    <div>
      <Header snbOpen={snbOpen} onSnbClick={onSnbClick} />
      <Snb snbOpen={snbOpen} />
      <Box ml={snbOpen ? 23 : 3} pt={13}>
        {children}
      </Box>
    </div>
  );
};

export default AppLayout;
