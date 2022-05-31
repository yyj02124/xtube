import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import Main from "../../page/Main";
import Gnb from "../gnb/Gnb";
import SnbHomeIcon from "./SnbHomeIcon";

const Snb = ({ snbOpen }) => {
  return (
    <Box position="fixed" display="flex">
      {snbOpen === true ? (
        <Box
          width={200}
          mt={-1.2}
          position="relative"
          display="flex"
          flexDirection="column"
          zIndex={1}
          sx={{ bgcolor: "#ffffff" }}
        >
          <Box height={72}>menu1asdsadasdas</Box>
        </Box>
      ) : (
        <Box
          width={72}
          mt={-1.2}
          position="relative"
          display="flex"
          flexDirection="column"
          zIndex={10}
          sx={{ bgcolor: "#ffffff" }}
        >
          <SnbHomeIcon
            menuname="홈"
            path="M4, 10 V 21 h 6 V 15 h 4 v 6 h 6 V 10 L 12,3Z"
          />

          <SnbHomeIcon
            menuname="탐색"
            path="M 9.8 9.8 l -3.83 8.23 l 8.23 -3.83 l 3.83 -8.23 L 9.8 9.8 Z M 13.08 12.77 c -0.21 0.29 -0.51 0.48 -0.86 0.54 c -0.07 0.01 -0.15 0.02 -0.22 0.02 c -0.28 0 -0.54 -0.08 -0.77 -0.25 c -0.29 -0.21 -0.48 -0.51 -0.54 -0.86 c -0.06 -0.35 0.02 -0.71 0.23 -0.99 c 0.21 -0.29 0.51 -0.48 0.86 -0.54 c 0.35 -0.06 0.7 0.02 0.99 0.23 c 0.29 0.21 0.48 0.51 0.54 0.86 C 13.37 12.13 13.29 12.48 13.08 12.77 Z M 12 3 c 4.96 0 9 4.04 9 9 s -4.04 9 -9 9 s -9 -4.04 -9 -9 S 7.04 3 12 3 M 12 2 C 6.48 2 2 6.48 2 12 s 4.48 10 10 10 s 10 -4.48 10 -10 S 17.52 2 12 2 L 12 2 Z"
          />

          <SnbHomeIcon
            menuname="쇼츠"
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
      )}
      <Main />
    </Box>
  );
};

export default Snb;
