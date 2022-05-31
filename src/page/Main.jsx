import { Box, Typography } from "@mui/material";
import React from "react";
import XtubeContent from "../component/XtubeContent";
import Gnb from "../layout/gnb/Gnb";

const Main = () => {
  return (
    <Box position="relative">
      <Gnb />
      <Box display="grid" gridTemplateColumns="repeat(4, 1fr)">
        <XtubeContent />
      </Box>
    </Box>
  );
};

export default Main;
