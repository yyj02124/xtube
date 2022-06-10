import { Box, Button, SvgIcon, Typography } from "@mui/material";
import React from "react";
import Footer from "../footer/Footer";
import SnbExtendedHomeIcon from "./SnbExtendedHomeIcon";
import SnbExtendedImgIcon from "./SnbExtendedImgIcon";
import SnbHomeIcon from "./SnbHomeIcon";
import "./extendedscrollbar.css";

const Snb = ({ snbOpen }) => {
  return (
    <Box
      mt={8}
      zIndex={15}
      className="hoverBar"
      position="fixed"
      display="flex"
      flexDirection="row"
    >
      {snbOpen === true ? (
        <Box
          sx={{ height: "calc(100% - 50px)" }}
          className="snbExtended"
          overflow="auto"
          position="fixed"
          display="flex"
          flexDirection="row"
        >
          <Box position="relative">
            <Box
              width={222}
              display="flex"
              flexDirection="column"
              zIndex={10}
              sx={{ bgcolor: "#ffffff" }}
            >
              <SnbExtendedHomeIcon
                name="홈"
                path="M4, 10 V 21 h 6 V 15 h 4 v 6 h 6 V 10 L 12,3Z"
              />

              <SnbExtendedHomeIcon
                name="탐색"
                path="M 9.8 9.8 l -3.83 8.23 l 8.23 -3.83 l 3.83 -8.23 L 9.8 9.8 Z M 13.08 12.77 c -0.21 0.29 -0.51 0.48 -0.86 0.54 c -0.07 0.01 -0.15 0.02 -0.22 0.02 c -0.28 0 -0.54 -0.08 -0.77 -0.25 c -0.29 -0.21 -0.48 -0.51 -0.54 -0.86 c -0.06 -0.35 0.02 -0.71 0.23 -0.99 c 0.21 -0.29 0.51 -0.48 0.86 -0.54 c 0.35 -0.06 0.7 0.02 0.99 0.23 c 0.29 0.21 0.48 0.51 0.54 0.86 C 13.37 12.13 13.29 12.48 13.08 12.77 Z M 12 3 c 4.96 0 9 4.04 9 9 s -4.04 9 -9 9 s -9 -4.04 -9 -9 S 7.04 3 12 3 M 12 2 C 6.48 2 2 6.48 2 12 s 4.48 10 10 10 s 10 -4.48 10 -10 S 17.52 2 12 2 L 12 2 Z"
              />
              <SnbExtendedHomeIcon
                name="Shorts"
                path="M 10 14.65 v -5.3 L 15 12 l -5 2.65 Z m 7.77 -4.33 c -0.77 -0.32 -1.2 -0.5 -1.2 -0.5 L 18 9.06 c 1.84 -0.96 2.53 -3.23 1.56 -5.06 s -3.24 -2.53 -5.07 -1.56 L 6 6.94 c -1.29 0.68 -2.07 2.04 -2 3.49 c 0.07 1.42 0.93 2.67 2.22 3.25 c 0.03 0.01 1.2 0.5 1.2 0.5 L 6 14.93 c -1.83 0.97 -2.53 3.24 -1.56 5.07 c 0.97 1.83 3.24 2.53 5.07 1.56 l 8.5 -4.5 c 1.29 -0.68 2.06 -2.04 1.99 -3.49 c -0.07 -1.42 -0.94 -2.68 -2.23 -3.25 Z m -0.23 5.86 l -8.5 4.5 c -1.34 0.71 -3.01 0.2 -3.72 -1.14 c -0.71 -1.34 -0.2 -3.01 1.14 -3.72 l 2.04 -1.08 v -1.21 l -0.69 -0.28 l -1.11 -0.46 c -0.99 -0.41 -1.65 -1.35 -1.7 -2.41 c -0.05 -1.06 0.52 -2.06 1.46 -2.56 l 8.5 -4.5 c 1.34 -0.71 3.01 -0.2 3.72 1.14 c 0.71 1.34 0.2 3.01 -1.14 3.72 L 15.5 9.26 v 1.21 l 1.8 0.74 c 0.99 0.41 1.65 1.35 1.7 2.41 c 0.05 1.06 -0.52 2.06 -1.46 2.56 Z"
              />
              <SnbExtendedHomeIcon
                name="구독"
                path="M 10 18 v -6 l 5 3 L 10 18 Z M 17 3 H 7 v 1 h 10 V 3 Z M 20 6 H 4 v 1 h 16 V 6 Z M 22 9 H 2 v 12 h 20 V 9 Z M 3 10 h 18 v 10 H 3 V 10 Z"
              />
              <Box borderTop="1px solid #bbbbbb" mt={1} mb={1} />

              <SnbExtendedHomeIcon
                name="보관함"
                path="M 11 7 l 6 3.5 L 11 14 V 7 L 11 7 Z M 18 20 H 4 V 6 H 3 v 15 h 15 V 20 Z M 21 18 H 6 V 3 h 15 V 18 Z M 7 17 h 13 V 4 H 7 V 17 Z"
              />

              <SnbExtendedHomeIcon
                name="시청 기록"
                path="M 14.97 16.95 L 10 13.87 V 7 h 2 v 5.76 l 4.03 2.49 L 14.97 16.95 Z M 22 12 c 0 5.51 -4.49 10 -10 10 S 2 17.51 2 12 h 1 c 0 4.96 4.04 9 9 9 s 9 -4.04 9 -9 s -4.04 -9 -9 -9 C 8.81 3 5.92 4.64 4.28 7.38 C 4.17 7.56 4.06 7.75 3.97 7.94 C 3.96 7.96 3.95 7.98 3.94 8 H 8 v 1 H 1.96 V 3 h 1 v 4.74 C 3 7.65 3.03 7.57 3.07 7.49 C 3.18 7.27 3.3 7.07 3.42 6.86 C 5.22 3.86 8.51 2 12 2 C 17.51 2 22 6.49 22 12 Z"
              />
              <Box
                mt={1}
                mb={1}
                p={1}
                pt={2}
                pl={3}
                borderTop="1px solid #bbbbbb"
                borderBottom="1px solid #bbbbbb"
              >
                <Typography fontSize="14px">
                  로그인하면 동영상에 좋아요를 표시하고 댓글을 달거나 구독할 수
                  있습니다.
                </Typography>
                <Button
                  sx={{
                    borderRadius: "2px",
                    marginTop: "12px",
                    marginBottom: "12px",
                  }}
                  variant="outlined"
                  color="info"
                >
                  <SvgIcon>
                    <path d="M 12 2 C 6.48 2 2 6.48 2 12 c 0 5.52 4.48 10 10 10 s 10 -4.48 10 -10 C 22 6.48 17.52 2 12 2 Z M 12 3 c 4.96 0 9 4.04 9 9 c 0 1.42 -0.34 2.76 -0.93 3.96 c -1.53 -1.72 -3.98 -2.89 -7.38 -3.03 C 14.57 12.6 16 10.97 16 9 c 0 -2.21 -1.79 -4 -4 -4 C 9.79 5 8 6.79 8 9 c 0 1.97 1.43 3.6 3.31 3.93 c -3.4 0.14 -5.85 1.31 -7.38 3.03 C 3.34 14.76 3 13.42 3 12 C 3 7.04 7.04 3 12 3 Z M 9 9 c 0 -1.65 1.35 -3 3 -3 s 3 1.35 3 3 c 0 1.65 -1.35 3 -3 3 S 9 10.65 9 9 Z M 12 21 c -3.16 0 -5.94 -1.64 -7.55 -4.12 C 6.01 14.93 8.61 13.9 12 13.9 c 3.39 0 5.99 1.03 7.55 2.98 C 17.94 19.36 15.16 21 12 21 Z" />
                  </SvgIcon>
                  로그인
                </Button>
              </Box>

              <Box>
                <Typography ml={2}>인기 YOUTUBE</Typography>
                <SnbExtendedImgIcon
                  src="https://yt3.ggpht.com/hJYteupJuM2N43U7LXb9lFLSxXwOZHlYwrv7oUwaXVvNtsDIxcZbWeHlL4erKyfJ4NMO_9wtOQ=s88-c-k-c0x00ffffff-no-rj"
                  name="음악"
                />
                <SnbExtendedImgIcon
                  src="https://yt3.ggpht.com/c58SswnJjLFeXoT1Wr4g-21fj3LWsmhxniA8xjLWF_8huAzREvLWm2F0DO_nXl0gBbCzqQkJvXc=s88-c-k-c0x00ffffff-no-rj"
                  name="스포츠"
                />
                <SnbExtendedImgIcon
                  src="https://yt3.ggpht.com/AKpjal8XQ5-TJFIwGyy4v3vpgbOq5BX3GkPXU_obyg5MY3vdpJ8rO9geHVF4FzlaJy_XggsXFQ=s88-c-k-c0x00ffffff-no-rj"
                  name="게임"
                />
                <SnbExtendedImgIcon
                  src="https://yt3.ggpht.com/6lo97rUTO7xhIBXZqLiaW2kA_eMBIEmqc27EqlKLyE4nAY-yzcKBG0Hs0YdUka3gJ629HcwgyzQ=s88-c-k-c0x00ffffff-no-rj"
                  name="영화"
                />
                <SnbExtendedImgIcon
                  src="https://yt3.ggpht.com/K9BzDvWNMKeg31sN74H_WGtYXsSBWNSF0OICeXPy4XGKksJt8RxFqgO2xTL1CPE4m4NfXgkkyA=s88-c-k-c0x00ffffff-no-rj"
                  name="뉴스"
                />
                <SnbExtendedImgIcon
                  src="https://yt3.ggpht.com/8D6JlsnvwDZFMdcbjqVji82kggP3aXXbO-yBD0RFrKlp4G1zNt9wcqcVTSPnAI8GuUAbDYQwsg=s88-c-k-c0x00ffffff-no-rj"
                  name="실시간"
                />
                <SnbExtendedImgIcon
                  src="https://yt3.ggpht.com/iqjgoywI_JTHRUUypR1bijHqGs0HHMJabgmkcu_bIe5-zSuoSiWY6PwmowuGBTM6DJTOhpKBnA=s88-c-k-c0x00ffffff-no-rj"
                  name="학습"
                />
                <SnbExtendedImgIcon
                  src="https://yt3.ggpht.com/21sC18ayRvUsLmXCix-zmvMsbY_hh-00zhAG2QHw3Wou8iDQ016iyk2luBNBavsQmkmLV4WvnQ=s88-c-k-c0x00ffffff-no-rj"
                  name="360º 동영상"
                />
                <hr />
              </Box>
              <SnbExtendedHomeIcon
                name="채널 탐색"
                path="M 17 13 h -4 v 4 h -2 v -4 H 7 v -2 h 4 V 7 h 2 v 4 h 4 V 13 Z M 12 3 c -4.96 0 -9 4.04 -9 9 s 4.04 9 9 9 c 4.96 0 9 -4.04 9 -9 S 16.96 3 12 3 M 12 2 c 5.52 0 10 4.48 10 10 s -4.48 10 -10 10 C 6.48 22 2 17.52 2 12 S 6.48 2 12 2 L 12 2 Z"
              />
              <Box
                mt={1}
                mb={1}
                pb={1}
                borderTop="1px solid #bbbbbb"
                borderBottom="1px solid #bbbbbb"
              >
                <Typography mt={2} ml={3}>
                  YOUTUBE 더보기
                </Typography>
                <SnbExtendedHomeIcon
                  name="Youtube Premium"
                  path="M 10 9.35 L 15 12 l -5 2.65 Z M 12 6 a 54.36 54.36 0 0 0 -7.56 0.38 A 1.53 1.53 0 0 0 3.38 7.44 A 24.63 24.63 0 0 0 3 12 a 24.63 24.63 0 0 0 0.38 4.56 a 1.53 1.53 0 0 0 1.06 1.06 A 54.36 54.36 0 0 0 12 18 a 54.36 54.36 0 0 0 7.56 -0.38 a 1.53 1.53 0 0 0 1.06 -1.06 A 24.63 24.63 0 0 0 21 12 a 24.63 24.63 0 0 0 -0.38 -4.56 a 1.53 1.53 0 0 0 -1.06 -1.06 A 54.36 54.36 0 0 0 12 6 h 0 m 0 -1 s 6.25 0 7.81 0.42 a 2.51 2.51 0 0 1 1.77 1.77 A 25.87 25.87 0 0 1 22 12 a 25.87 25.87 0 0 1 -0.42 4.81 a 2.51 2.51 0 0 1 -1.77 1.77 C 18.25 19 12 19 12 19 s -6.25 0 -7.81 -0.42 a 2.51 2.51 0 0 1 -1.77 -1.77 A 25.87 25.87 0 0 1 2 12 a 25.87 25.87 0 0 1 0.42 -4.81 A 2.51 2.51 0 0 1 4.19 5.42 C 5.75 5 12 5 12 5 Z"
                />
                <SnbExtendedHomeIcon
                  name="실시간"
                  path="M 14 12 c 0 1.1 -0.9 2 -2 2 s -2 -0.9 -2 -2 s 0.9 -2 2 -2 S 14 10.9 14 12 Z M 8.48 8.45 L 7.77 7.75 C 6.68 8.83 6 10.34 6 12 s 0.68 3.17 1.77 4.25 l 0.71 -0.71 C 7.57 14.64 7 13.39 7 12 S 7.57 9.36 8.48 8.45 Z M 16.23 7.75 l -0.71 0.71 C 16.43 9.36 17 10.61 17 12 s -0.57 2.64 -1.48 3.55 l 0.71 0.71 C 17.32 15.17 18 13.66 18 12 S 17.32 8.83 16.23 7.75 Z M 5.65 5.63 L 4.95 4.92 C 3.13 6.73 2 9.24 2 12 s 1.13 5.27 2.95 7.08 l 0.71 -0.71 C 4.02 16.74 3 14.49 3 12 S 4.02 7.26 5.65 5.63 Z M 19.05 4.92 l -0.71 0.71 C 19.98 7.26 21 9.51 21 12 s -1.02 4.74 -2.65 6.37 l 0.71 0.71 C 20.87 17.27 22 14.76 22 12 S 20.87 6.73 19.05 4.92 Z"
                />
              </Box>
              <Box mb={1} pb={1} borderBottom="1px solid #bbbbbb">
                <SnbExtendedHomeIcon
                  name="설정"
                  path="M 12 9 c 1.65 0 3 1.35 3 3 s -1.35 3 -3 3 s -3 -1.35 -3 -3 S 10.35 9 12 9 M 12 8 c -2.21 0 -4 1.79 -4 4 s 1.79 4 4 4 s 4 -1.79 4 -4 S 14.21 8 12 8 L 12 8 Z M 13.22 3 l 0.55 2.2 l 0.13 0.51 l 0.5 0.18 c 0.61 0.23 1.19 0.56 1.72 0.98 l 0.4 0.32 l 0.5 -0.14 l 2.17 -0.62 l 1.22 2.11 l -1.63 1.59 l -0.37 0.36 l 0.08 0.51 c 0.05 0.32 0.08 0.64 0.08 0.98 s -0.03 0.66 -0.08 0.98 l -0.08 0.51 l 0.37 0.36 l 1.63 1.59 l -1.22 2.11 l -2.17 -0.62 l -0.5 -0.14 l -0.4 0.32 c -0.53 0.43 -1.11 0.76 -1.72 0.98 l -0.5 0.18 l -0.13 0.51 L 13.22 21 h -2.44 l -0.55 -2.2 l -0.13 -0.51 l -0.5 -0.18 C 9 17.88 8.42 17.55 7.88 17.12 l -0.4 -0.32 l -0.5 0.14 l -2.17 0.62 L 3.6 15.44 l 1.63 -1.59 l 0.37 -0.36 l -0.08 -0.51 C 5.47 12.66 5.44 12.33 5.44 12 s 0.03 -0.66 0.08 -0.98 l 0.08 -0.51 l -0.37 -0.36 L 3.6 8.56 l 1.22 -2.11 l 2.17 0.62 l 0.5 0.14 l 0.4 -0.32 C 8.42 6.45 9 6.12 9.61 5.9 l 0.5 -0.18 l 0.13 -0.51 L 10.78 3 H 13.22 M 14 2 h -4 L 9.26 4.96 c -0.73 0.27 -1.4 0.66 -2 1.14 L 4.34 5.27 l -2 3.46 l 2.19 2.13 C 4.47 11.23 4.44 11.61 4.44 12 s 0.03 0.77 0.09 1.14 l -2.19 2.13 l 2 3.46 l 2.92 -0.83 c 0.6 0.48 1.27 0.87 2 1.14 L 10 22 h 4 l 0.74 -2.96 c 0.73 -0.27 1.4 -0.66 2 -1.14 l 2.92 0.83 l 2 -3.46 l -2.19 -2.13 c 0.06 -0.37 0.09 -0.75 0.09 -1.14 s -0.03 -0.77 -0.09 -1.14 l 2.19 -2.13 l -2 -3.46 L 16.74 6.1 c -0.6 -0.48 -1.27 -0.87 -2 -1.14 L 14 2 L 14 2 Z"
                />
                <SnbExtendedHomeIcon
                  name="신고 기록"
                  path="M 13.18 4 l 0.24 1.2 L 13.58 6 h 0.82 H 19 v 7 h -5.18 l -0.24 -1.2 L 13.42 11 H 12.6 H 6 V 4 H 13.18 M 14 3 H 5 v 18 h 1 v -9 h 6.6 l 0.4 2 h 7 V 5 h -5.6 L 14 3 L 14 3 Z"
                />
                <SnbExtendedHomeIcon
                  name="고객센터"
                  path="M 15.36 9.96 c 0 1.09 -0.67 1.67 -1.31 2.24 c -0.53 0.47 -1.03 0.9 -1.16 1.6 L 12.85 14 h -1.75 l 0.03 -0.28 c 0.14 -1.17 0.8 -1.76 1.47 -2.27 c 0.52 -0.4 1.01 -0.77 1.01 -1.49 c 0 -0.51 -0.23 -0.97 -0.63 -1.29 c -0.4 -0.31 -0.92 -0.42 -1.42 -0.29 c -0.59 0.15 -1.05 0.67 -1.19 1.34 L 10.32 10 H 8.57 l 0.06 -0.42 c 0.2 -1.4 1.15 -2.53 2.42 -2.87 c 1.05 -0.29 2.14 -0.08 2.98 0.57 C 14.88 7.92 15.36 8.9 15.36 9.96 Z M 12 18 c 0.55 0 1 -0.45 1 -1 s -0.45 -1 -1 -1 s -1 0.45 -1 1 S 11.45 18 12 18 Z M 12 3 c -4.96 0 -9 4.04 -9 9 s 4.04 9 9 9 s 9 -4.04 9 -9 S 16.96 3 12 3 M 12 2 c 5.52 0 10 4.48 10 10 s -4.48 10 -10 10 S 2 17.52 2 12 S 6.48 2 12 2 L 12 2 Z"
                />
                <SnbExtendedHomeIcon
                  name="의견 보내기"
                  path="M 13 14 h -2 v -2 h 2 V 14 Z M 13 5 h -2 v 6 h 2 V 5 Z M 19 3 H 5 v 16.59 l 3.29 -3.29 L 8.59 16 H 9 h 10 V 3 M 20 2 v 15 H 9 l -5 5 V 2 H 20 L 20 2 Z"
                />
              </Box>
            </Box>
            <Footer />
          </Box>
        </Box>
      ) : (
        <Box
          width="72px"
          mt={-1.2}
          position="relative"
          display="flex"
          flexDirection="row"
          zIndex={10}
          sx={{ bgcolor: "#ffffff" }}
        >
          <Box>
            <SnbHomeIcon
              menuname="홈"
              path="M4, 10 V 21 h 6 V 15 h 4 v 6 h 6 V 10 L 12,3Z"
            />

            <SnbHomeIcon
              menuname="탐색"
              path="M 9.8 9.8 l -3.83 8.23 l 8.23 -3.83 l 3.83 -8.23 L 9.8 9.8 Z M 13.08 12.77 c -0.21 0.29 -0.51 0.48 -0.86 0.54 c -0.07 0.01 -0.15 0.02 -0.22 0.02 c -0.28 0 -0.54 -0.08 -0.77 -0.25 c -0.29 -0.21 -0.48 -0.51 -0.54 -0.86 c -0.06 -0.35 0.02 -0.71 0.23 -0.99 c 0.21 -0.29 0.51 -0.48 0.86 -0.54 c 0.35 -0.06 0.7 0.02 0.99 0.23 c 0.29 0.21 0.48 0.51 0.54 0.86 C 13.37 12.13 13.29 12.48 13.08 12.77 Z M 12 3 c 4.96 0 9 4.04 9 9 s -4.04 9 -9 9 s -9 -4.04 -9 -9 S 7.04 3 12 3 M 12 2 C 6.48 2 2 6.48 2 12 s 4.48 10 10 10 s 10 -4.48 10 -10 S 17.52 2 12 2 L 12 2 Z"
            />

            <SnbHomeIcon
              menuname="Shorts"
              path="M 10 14.65 v -5.3 L 15 12 l -5 2.65 Z m 7.77 -4.33 c -0.77 -0.32 -1.2 -0.5 -1.2 -0.5 L 18 9.06 c 1.84 -0.96 2.53 -3.23 1.56 -5.06 s -3.24 -2.53 -5.07 -1.56 L 6 6.94 c -1.29 0.68 -2.07 2.04 -2 3.49 c 0.07 1.42 0.93 2.67 2.22 3.25 c 0.03 0.01 1.2 0.5 1.2 0.5 L 6 14.93 c -1.83 0.97 -2.53 3.24 -1.56 5.07 c 0.97 1.83 3.24 2.53 5.07 1.56 l 8.5 -4.5 c 1.29 -0.68 2.06 -2.04 1.99 -3.49 c -0.07 -1.42 -0.94 -2.68 -2.23 -3.25 Z m -0.23 5.86 l -8.5 4.5 c -1.34 0.71 -3.01 0.2 -3.72 -1.14 c -0.71 -1.34 -0.2 -3.01 1.14 -3.72 l 2.04 -1.08 v -1.21 l -0.69 -0.28 l -1.11 -0.46 c -0.99 -0.41 -1.65 -1.35 -1.7 -2.41 c -0.05 -1.06 0.52 -2.06 1.46 -2.56 l 8.5 -4.5 c 1.34 -0.71 3.01 -0.2 3.72 1.14 c 0.71 1.34 0.2 3.01 -1.14 3.72 L 15.5 9.26 v 1.21 l 1.8 0.74 c 0.99 0.41 1.65 1.35 1.7 2.41 c 0.05 1.06 -0.52 2.06 -1.46 2.56 Z"
            />

            <SnbHomeIcon
              menuname="구독"
              path="M 10 18 v -6 l 5 3 L 10 18 Z M 17 3 H 7 v 1 h 10 V 3 Z M 20 6 H 4 v 1 h 16 V 6 Z M 22 9 H 2 v 12 h 20 V 9 Z M 3 10 h 18 v 10 H 3 V 10 Z"
            />

            <SnbHomeIcon
              menuname="보관함"
              path="M 11 7 l 6 3.5 L 11 14 V 7 L 11 7 Z M 18 20 H 4 V 6 H 3 v 15 h 15 V 20 Z M 21 18 H 6 V 3 h 15 V 18 Z M 7 17 h 13 V 4 H 7 V 17 Z"
            />

            <SnbHomeIcon
              menuname="시청 기록"
              path="M 14.97 16.95 L 10 13.87 V 7 h 2 v 5.76 l 4.03 2.49 L 14.97 16.95 Z M 22 12 c 0 5.51 -4.49 10 -10 10 S 2 17.51 2 12 h 1 c 0 4.96 4.04 9 9 9 s 9 -4.04 9 -9 s -4.04 -9 -9 -9 C 8.81 3 5.92 4.64 4.28 7.38 C 4.17 7.56 4.06 7.75 3.97 7.94 C 3.96 7.96 3.95 7.98 3.94 8 H 8 v 1 H 1.96 V 3 h 1 v 4.74 C 3 7.65 3.03 7.57 3.07 7.49 C 3.18 7.27 3.3 7.07 3.42 6.86 C 5.22 3.86 8.51 2 12 2 C 17.51 2 22 6.49 22 12 Z"
            />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Snb;
