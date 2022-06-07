import { Box } from "@mui/material";
import React from "react";
import GnbButton from "./GnbButton";

const Gnb = ({ gnbDisplay }) => {
  return (
    <>
      <Box
        pb={1}
        position="absolute"
        right={0}
        display="flex"
        flexDirection="row"
        justifyContent={"center"}
        sx={
          gnbDisplay === true
            ? { width: "85%", float: "right" }
            : { width: "100%" }
        }
      >
        <GnbButton btnname="전체" />
        <GnbButton btnname="음악" />
        <GnbButton btnname="실시간" />
        <GnbButton btnname="야구" />
        <GnbButton btnname="축구" />
        <GnbButton btnname="공예" />
        <GnbButton btnname="액션 어드벤처 게임" />
        <GnbButton btnname="요리" />
        <GnbButton btnname="만화 영화" />
        <GnbButton btnname="최근에 업로드된 영상" />
      </Box>
      <Box mt={6} borderBottom="1px solid #ccc" />
    </>
  );
};

export default Gnb;
