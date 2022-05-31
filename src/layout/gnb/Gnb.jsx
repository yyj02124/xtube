import { Box } from "@mui/material";
import React from "react";
import GnbButton from "./GnbButton";

const Gnb = () => {
  return (
    <>
      <Box
        pb={1}
        position="fixed"
        display="flex"
        flexDirection="row"
        justifyContent="center"
        sx={{ width: 1 }}
      >
        <GnbButton btnname="전체" />
        <GnbButton btnname="음악" />
        <GnbButton btnname="실시간" />
        <GnbButton btnname="야구" />
        <GnbButton btnname="축구" />
      </Box>
    </>
  );
};

export default Gnb;
