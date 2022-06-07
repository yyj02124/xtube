import { Box, Button, SvgIcon, Typography } from "@mui/material";
import React from "react";
import SettingLnbBtn from "./SettingLnbBtn";
import SettingLnbBtnIncludeRightArrow from "./SettingLnbBtnIncludeRightArrow";

const SettingLnb = ({ displayBox }) => {
  return (
    <Box
      position="absolute"
      right={114}
      zIndex={10}
      display={displayBox === true ? "block" : "none"}
      width={300}
      height={386}
      sx={{
        backgroundColor: "#fff",
        border: "1px solid #bdbdbd",
        borderTop: "1px solid #ffffff",
      }}
    >
      <SettingLnbBtnIncludeRightArrow
        name="디자인:밝은 테마"
        path="M 12 22 C 10.93 22 9.86998 21.83 8.83998 21.48 L 7.41998 21.01 L 8.83998 20.54 C 12.53 19.31 15 15.88 15 12 C 15 8.12 12.53 4.69 8.83998 3.47 L 7.41998 2.99 L 8.83998 2.52 C 9.86998 2.17 10.93 2 12 2 C 17.51 2 22 6.49 22 12 C 22 17.51 17.51 22 12 22 Z M 10.58 20.89 C 11.05 20.96 11.53 21 12 21 C 16.96 21 21 16.96 21 12 C 21 7.04 16.96 3 12 3 C 11.53 3 11.05 3.04 10.58 3.11 C 13.88 4.81 16 8.21 16 12 C 16 15.79 13.88 19.19 10.58 20.89 Z"
      />
      <SettingLnbBtnIncludeRightArrow
        name="언어:한국어"
        path="M 12.26 16.18 l -2.93 -2.87 c -0.8 0.86 -1.64 1.71 -2.48 2.54 L 4.6 18.1 L 3.9 17.4 l 2.25 -2.25 c 0.84 -0.84 1.68 -1.69 2.48 -2.55 c -1.18 -1.23 -2.17 -2.64 -2.9 -4.18 L 5.73 8.4 h 1.14 c 0.65 1.26 1.47 2.43 2.44 3.45 c 1.59 -1.81 2.89 -3.69 3.43 -5.7 H 2.08 v -1 h 6.65 V 3 h 1 v 2.15 h 6.78 v 1 h -2.73 c -0.54 2.32 -2.01 4.42 -3.77 6.42 l 2.63 2.58 C 12.51 15.5 12.39 15.82 12.26 16.18 Z M 21.51 21.01 h -0.95 l -1.12 -3.04 h -4.91 l -1.11 3.04 h -0.96 l 4.09 -10.81 h 0.87 L 21.51 21.01 Z M 19.15 17.2 l -2.17 -5.89 l -2.17 5.89 H 19.15 Z"
      />
      <SettingLnbBtnIncludeRightArrow
        name="위치:미국"
        path="M 11.99 1.98 C 6.46 1.98 1.98 6.47 1.98 12 s 4.48 10.02 10.01 10.02 c 5.54 0 10.03 -4.49 10.03 -10.02 S 17.53 1.98 11.99 1.98 Z M 8.86 14.5 c -0.16 -0.82 -0.25 -1.65 -0.25 -2.5 c 0 -0.87 0.09 -1.72 0.26 -2.55 h 6.27 c 0.17 0.83 0.26 1.68 0.26 2.55 c 0 0.85 -0.09 1.68 -0.25 2.5 H 8.86 Z M 14.89 15.5 c -0.54 1.89 -1.52 3.64 -2.89 5.15 c -1.37 -1.5 -2.35 -3.25 -2.89 -5.15 H 14.89 Z M 9.12 8.45 c 0.54 -1.87 1.52 -3.61 2.88 -5.1 c 1.36 1.49 2.34 3.22 2.88 5.1 H 9.12 Z M 16.15 9.45 h 4.5 c 0.24 0.81 0.37 1.66 0.37 2.55 c 0 0.87 -0.13 1.71 -0.36 2.5 h -4.51 c 0.15 -0.82 0.24 -1.65 0.24 -2.5 C 16.39 11.13 16.3 10.28 16.15 9.45 Z M 20.29 8.45 h -4.38 c -0.53 -1.97 -1.47 -3.81 -2.83 -5.4 C 16.33 3.45 19.04 5.56 20.29 8.45 Z M 10.92 3.05 c -1.35 1.59 -2.3 3.43 -2.83 5.4 H 3.71 C 4.95 5.55 7.67 3.44 10.92 3.05 Z M 3.35 9.45 h 4.5 C 7.7 10.28 7.61 11.13 7.61 12 c 0 0.85 0.09 1.68 0.24 2.5 H 3.34 c -0.23 -0.79 -0.36 -1.63 -0.36 -2.5 C 2.98 11.11 3.11 10.26 3.35 9.45 Z M 3.69 15.5 h 4.39 c 0.52 1.99 1.48 3.85 2.84 5.45 C 7.65 20.56 4.92 18.42 3.69 15.5 Z M 13.09 20.95 c 1.36 -1.6 2.32 -3.46 2.84 -5.45 h 4.39 C 19.08 18.42 16.35 20.55 13.09 20.95 Z"
      />
      <SettingLnbBtn
        name="설정"
        path="M 12 9 c 1.65 0 3 1.35 3 3 s -1.35 3 -3 3 s -3 -1.35 -3 -3 S 10.35 9 12 9 M 12 8 c -2.21 0 -4 1.79 -4 4 s 1.79 4 4 4 s 4 -1.79 4 -4 S 14.21 8 12 8 L 12 8 Z M 13.22 3 l 0.55 2.2 l 0.13 0.51 l 0.5 0.18 c 0.61 0.23 1.19 0.56 1.72 0.98 l 0.4 0.32 l 0.5 -0.14 l 2.17 -0.62 l 1.22 2.11 l -1.63 1.59 l -0.37 0.36 l 0.08 0.51 c 0.05 0.32 0.08 0.64 0.08 0.98 s -0.03 0.66 -0.08 0.98 l -0.08 0.51 l 0.37 0.36 l 1.63 1.59 l -1.22 2.11 l -2.17 -0.62 l -0.5 -0.14 l -0.4 0.32 c -0.53 0.43 -1.11 0.76 -1.72 0.98 l -0.5 0.18 l -0.13 0.51 L 13.22 21 h -2.44 l -0.55 -2.2 l -0.13 -0.51 l -0.5 -0.18 C 9 17.88 8.42 17.55 7.88 17.12 l -0.4 -0.32 l -0.5 0.14 l -2.17 0.62 L 3.6 15.44 l 1.63 -1.59 l 0.37 -0.36 l -0.08 -0.51 C 5.47 12.66 5.44 12.33 5.44 12 s 0.03 -0.66 0.08 -0.98 l 0.08 -0.51 l -0.37 -0.36 L 3.6 8.56 l 1.22 -2.11 l 2.17 0.62 l 0.5 0.14 l 0.4 -0.32 C 8.42 6.45 9 6.12 9.61 5.9 l 0.5 -0.18 l 0.13 -0.51 L 10.78 3 H 13.22 M 14 2 h -4 L 9.26 4.96 c -0.73 0.27 -1.4 0.66 -2 1.14 L 4.34 5.27 l -2 3.46 l 2.19 2.13 C 4.47 11.23 4.44 11.61 4.44 12 s 0.03 0.77 0.09 1.14 l -2.19 2.13 l 2 3.46 l 2.92 -0.83 c 0.6 0.48 1.27 0.87 2 1.14 L 10 22 h 4 l 0.74 -2.96 c 0.73 -0.27 1.4 -0.66 2 -1.14 l 2.92 0.83 l 2 -3.46 l -2.19 -2.13 c 0.06 -0.37 0.09 -0.75 0.09 -1.14 s -0.03 -0.77 -0.09 -1.14 l 2.19 -2.13 l -2 -3.46 L 16.74 6.1 c -0.6 -0.48 -1.27 -0.87 -2 -1.14 L 14 2 L 14 2 Z"
      />
      <SettingLnbBtn
        name="YouTube의 내 데이터"
        path="M 12 3.06 l 7 3.21 v 4.84 c 0 1.3 -0.25 2.6 -0.75 3.86 c -0.15 0.37 -0.33 0.76 -0.55 1.17 c -0.15 0.27 -0.31 0.54 -0.48 0.81 c -1.32 2.01 -3.17 3.42 -5.23 3.98 c -2.06 -0.56 -3.91 -1.97 -5.23 -3.98 c -0.17 -0.27 -0.33 -0.54 -0.48 -0.81 c -0.22 -0.41 -0.4 -0.79 -0.55 -1.17 C 5.25 13.71 5 12.41 5 11.11 V 6.27 L 12 3.06 M 12 1.96 L 4 5.63 v 5.49 c 0 1.47 0.3 2.9 0.81 4.22 c 0.17 0.44 0.37 0.86 0.6 1.28 c 0.16 0.3 0.34 0.6 0.52 0.88 c 1.42 2.17 3.52 3.82 5.95 4.44 L 12 21.96 l 0.12 -0.03 c 2.43 -0.61 4.53 -2.26 5.95 -4.43 c 0.19 -0.29 0.36 -0.58 0.52 -0.88 c 0.22 -0.41 0.43 -0.84 0.6 -1.28 C 19.7 14.01 20 12.58 20 11.11 V 5.63 L 12 1.96 L 12 1.96 Z M 13.08 12.11 c -0.32 -0.06 -0.64 -0.11 -0.96 -0.12 C 13.72 11.92 15 10.62 15 9 c 0 -1.66 -1.34 -3 -3 -3 S 9 7.34 9 9 c 0 1.62 1.28 2.92 2.88 2.99 c -0.32 0.01 -0.64 0.06 -0.96 0.12 h 0 C 8.64 12.58 7 14.62 7 17 h 10 C 17 14.62 15.36 12.58 13.08 12.11 Z M 10 9 c 0 -1.1 0.9 -2 2 -2 s 2 0.9 2 2 s -0.9 2 -2 2 S 10 10.1 10 9 Z M 11.12 13.09 c 0.37 -0.08 0.64 -0.11 0.88 -0.11 s 0.51 0.03 0.88 0.11 c 1.48 0.3 2.63 1.46 3 2.91 H 8.12 C 8.49 14.55 9.64 13.39 11.12 13.09 Z"
      />
      <SettingLnbBtn
        name="고객센터"
        path="M 15.36 9.96 c 0 1.09 -0.67 1.67 -1.31 2.24 c -0.53 0.47 -1.03 0.9 -1.16 1.6 L 12.85 14 h -1.75 l 0.03 -0.28 c 0.14 -1.17 0.8 -1.76 1.47 -2.27 c 0.52 -0.4 1.01 -0.77 1.01 -1.49 c 0 -0.51 -0.23 -0.97 -0.63 -1.29 c -0.4 -0.31 -0.92 -0.42 -1.42 -0.29 c -0.59 0.15 -1.05 0.67 -1.19 1.34 L 10.32 10 H 8.57 l 0.06 -0.42 c 0.2 -1.4 1.15 -2.53 2.42 -2.87 c 1.05 -0.29 2.14 -0.08 2.98 0.57 C 14.88 7.92 15.36 8.9 15.36 9.96 Z M 12 18 c 0.55 0 1 -0.45 1 -1 s -0.45 -1 -1 -1 s -1 0.45 -1 1 S 11.45 18 12 18 Z M 12 3 c -4.96 0 -9 4.04 -9 9 s 4.04 9 9 9 s 9 -4.04 9 -9 S 16.96 3 12 3 M 12 2 c 5.52 0 10 4.48 10 10 s -4.48 10 -10 10 S 2 17.52 2 12 S 6.48 2 12 2 L 12 2 Z"
      />
      <SettingLnbBtn
        name="의견 보내기"
        path="M 13 14 h -2 v -2 h 2 V 14 Z M 13 5 h -2 v 6 h 2 V 5 Z M 19 3 H 5 v 16.59 l 3.29 -3.29 L 8.59 16 H 9 h 10 V 3 M 20 2 v 15 H 9 l -5 5 V 2 H 20 L 20 2 Z"
      />
      <SettingLnbBtn
        name="단축키"
        path="M 16 16 H 8 v -2 h 8 V 16 Z M 16 11 h -2 v 2 h 2 V 11 Z M 19 11 h -2 v 2 h 2 V 11 Z M 13 11 h -2 v 2 h 2 V 11 Z M 10 11 H 8 v 2 h 2 V 11 Z M 7 11 H 5 v 2 h 2 V 11 Z M 16 8 h -2 v 2 h 2 V 8 Z M 19 8 h -2 v 2 h 2 V 8 Z M 13 8 h -2 v 2 h 2 V 8 Z M 10 8 H 8 v 2 h 2 V 8 Z M 7 8 H 5 v 2 h 2 V 8 Z M 22 5 v 14 H 2 V 5 H 22 Z M 21 6 H 3 v 12 h 18 V 6 Z"
      />
      <hr />
      <Box>
        <Button
          sx={{
            width: "300px",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "left",
            paddingLeft: "20px",
          }}
        >
          <Typography sx={{ color: "#030303" }} fontSize={14} ml={1}>
            제한 모드 : 사용 안함
          </Typography>
          <Box position="absolute" right={15} top={8}>
            <SvgIcon>
              <path d="M 9.4 18.4 l -0.7 -0.7 l 5.6 -5.6 L 8.6 6.4 l 0.7 -0.7 l 6.4 6.4 L 9.4 18.4 Z" />
            </SvgIcon>
          </Box>
        </Button>
      </Box>
    </Box>
  );
};

export default SettingLnb;