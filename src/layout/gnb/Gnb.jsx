import { Box } from "@mui/material";
import React, { useState } from "react";
import GnbButton from "./GnbButton";

const Gnb = ({ gnbDisplay }) => {
  const [tap, setTap] = useState("전체");
  return (
    <>
      <Box
        zIndex={5}
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
        <GnbButton
          btnname="전체"
          onclick={() => setTap("전체")}
          bgcolor={tap === "전체" ? "#333" : "#f2f2f2"}
          color={tap === "전체" ? "#fff" : "#000"}
        />
        <GnbButton
          btnname="음악"
          onclick={() => setTap("음악")}
          bgcolor={tap === "음악" ? "#333" : "#f2f2f2"}
          color={tap === "음악" ? "#fff" : "#000"}
        />
        <GnbButton
          btnname="실시간"
          onclick={() => setTap("실시간")}
          bgcolor={tap === "실시간" ? "#333" : "#f2f2f2"}
          color={tap === "실시간" ? "#fff" : "#000"}
        />
        <GnbButton
          btnname="수학"
          onclick={() => setTap("수학")}
          bgcolor={tap === "수학" ? "#333" : "#f2f2f2"}
          color={tap === "수학" ? "#fff" : "#000"}
        />
        <GnbButton
          btnname="야구"
          onclick={() => setTap("야구")}
          bgcolor={tap === "야구" ? "#333" : "#f2f2f2"}
          color={tap === "야구" ? "#fff" : "#000"}
        />

        <GnbButton
          btnname="축구"
          onclick={() => setTap("축구")}
          bgcolor={tap === "축구" ? "#333" : "#f2f2f2"}
          color={tap === "축구" ? "#fff" : "#000"}
        />

        <GnbButton
          btnname="공예"
          onclick={() => setTap("공예")}
          bgcolor={tap === "공예" ? "#333" : "#f2f2f2"}
          color={tap === "공예" ? "#fff" : "#000"}
        />

        <GnbButton
          btnname="애니메이션"
          onclick={() => setTap("애니메이션")}
          bgcolor={tap === "애니메이션" ? "#333" : "#f2f2f2"}
          color={tap === "애니메이션" ? "#fff" : "#000"}
        />

        <GnbButton
          btnname="반려동물"
          onclick={() => setTap("반려동물")}
          bgcolor={tap === "반려동물" ? "#333" : "#f2f2f2"}
          color={tap === "반려동물" ? "#fff" : "#000"}
        />
        <GnbButton
          btnname="최근에 업로드된 영상"
          onclick={() => setTap("최근에 업로드된 영상")}
          bgcolor={tap === "최근에 업로드된 영상" ? "#333" : "#f2f2f2"}
          color={tap === "최근에 업로드된 영상" ? "#fff" : "#000"}
        />
      </Box>
      <Box mt={6} borderBottom="1px solid #ccc" />
    </>
  );
};

export default Gnb;
