import { Box } from "@mui/material";
import React from "react";
import XtubeContent from "../component/XtubeContent";

const Main = ({ onclick }) => {
  return (
    <Box display="flex" justifyContent="end">
      <Box
        sx={{ backgroundColor: "#f9f9f9" }}
        width={"100%"}
        position="relative"
        ml={onclick === true ? 28 : 9}
        mt={13}
        display="grid"
        gridTemplateColumns="repeat(4, 1fr)"
        justifycontents="start"
      >
        <XtubeContent />
        <XtubeContent />
        <XtubeContent />
        <XtubeContent />
        <XtubeContent />
        <XtubeContent />
        <XtubeContent />
        <XtubeContent />
        <XtubeContent />
        <XtubeContent />
        <XtubeContent />
        <XtubeContent />
      </Box>
    </Box>
  );
};

export default Main;
