import { Box, Button, Link, SvgIcon, TextField } from "@mui/material";
import React, { useState } from "react";

import Gnb from "./gnb/Gnb";
import AppLnb from "./lnb/applnb/AppLnb";
import SettingLnb from "./lnb/settinglnb/SettingLnb";

const Header = ({ snbOpen, onSnbClick }) => {
  const [appLnbOpen, setAppLnbOpen] = useState(false);
  const [settingLnbOpen, setsettingLnbOpen] = useState(false);

  // const [snbOpen, setSnbOpen] = useState(false);
  // const onSnbClick = () => {
  //   setSnbOpen(!snbOpen);
  // };

  const onSettingLnbClick = () => {
    setsettingLnbOpen(!settingLnbOpen);
  };

  const onAppLnbClick = () => {
    setAppLnbOpen(!appLnbOpen);
  };
  return (
    <Box position="fixed" sx={{ width: 1, bgcolor: "#ffffff" }} zIndex={1}>
      <Box
        height={50}
        pt={1}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box display="flex">
          <Button
            onClick={() => onSnbClick()}
            sx={{ height: "50px", width: "72px" }}
          >
            <SvgIcon>
              <path d="M 21 6 H 3 V 5 h 18 V 6 Z M 21 11 H 3 v 1 h 18 V 11 Z M 21 17 H 3 v 1 h 18 V 17 Z" />
            </SvgIcon>
          </Button>
          <Link href="/">
            <Box
              component="img"
              alt="tube"
              src="https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg"
              sx={{
                width: "84px",
                height: "40px",
                margin: "4px",
              }}
            />
          </Link>
        </Box>
        <Box>
          <TextField
            sx={{ width: "500px", borderRadius: "0" }}
            type="search"
            placeholder="검색"
            size="small"
          ></TextField>
          <Button
            variant="outlined"
            sx={{
              height: "40px",
              borderRadius: "0 2px 2px 0",
              borderColor: "#bdbdbd",
              bgcolor: "#f9f9f9",
            }}
          >
            <SvgIcon>
              <path d="M 20.87 20.17 l -5.59 -5.59 C 16.35 13.35 17 11.75 17 10 c 0 -3.87 -3.13 -7 -7 -7 s -7 3.13 -7 7 s 3.13 7 7 7 c 1.75 0 3.35 -0.65 4.58 -1.71 l 5.59 5.59 L 20.87 20.17 Z M 10 16 c -3.31 0 -6 -2.69 -6 -6 s 2.69 -6 6 -6 s 6 2.69 6 6 S 13.31 16 10 16 Z" />
            </SvgIcon>
          </Button>
          <Button
            sx={{
              marginLeft: "8px",
              minWidth: "40px",
              height: "40px",
              borderRadius: "50%",
              borderColor: "#bdbdbd",
              bgcolor: "#f9f9f9",
            }}
          >
            <SvgIcon>
              <path d="M 12 3 C 10.34 3 9 4.37 9 6.07 V 11.93 C 9 13.63 10.34 15 12 15 C 13.66 15 15 13.63 15 11.93 V 6.07 C 15 4.37 13.66 3 12 3 Z M 18.5 12 H 17.5 C 17.5 15.03 15.03 17.5 12 17.5 C 8.97 17.5 6.5 15.03 6.5 12 H 5.5 C 5.5 15.24 7.89 17.93 11 18.41 V 21 H 13 V 18.41 C 16.11 17.93 18.5 15.24 18.5 12 Z" />
            </SvgIcon>
          </Button>
        </Box>
        <Box mt={20} display="flex" flexDirection="row" height={200}>
          <Box>
            <Button
              sx={{ minWidth: "40px", height: 40, marginRight: "10px" }}
              onClick={() => onAppLnbClick()}
            >
              <SvgIcon>
                <path d="M 16 4 v 4 h 4 V 4 H 16 Z M 19 7 h -2 V 5 h 2 V 7 Z M 16 10 v 4 h 4 v -4 H 16 Z M 19 13 h -2 v -2 h 2 V 13 Z M 10 4 v 4 h 4 V 4 H 10 Z M 13 7 h -2 V 5 h 2 V 7 Z M 10 10 v 4 h 4 v -4 H 10 Z M 13 13 h -2 v -2 h 2 V 13 Z M 16 16 v 4 h 4 v -4 H 16 Z M 19 19 h -2 v -2 h 2 V 19 Z M 10 16 v 4 h 4 v -4 H 10 Z M 13 19 h -2 v -2 h 2 V 19 Z M 4 4 v 4 h 4 V 4 H 4 Z M 7 7 H 5 V 5 h 2 V 7 Z M 4 10 v 4 h 4 v -4 H 4 Z M 7 13 H 5 v -2 h 2 V 13 Z M 4 16 v 4 h 4 v -4 H 4 Z M 7 19 H 5 v -2 h 2 V 19 Z" />
              </SvgIcon>
            </Button>
            <AppLnb displayBox={appLnbOpen} />
          </Box>

          <Box>
            <Button
              sx={{ minWidth: "40px", height: 40, marginRight: "10px" }}
              onClick={() => onSettingLnbClick()}
            >
              <SvgIcon>
                <path d="M 12 16.5 c 0.83 0 1.5 0.67 1.5 1.5 s -0.67 1.5 -1.5 1.5 s -1.5 -0.67 -1.5 -1.5 S 11.17 16.5 12 16.5 Z M 10.5 12 c 0 0.83 0.67 1.5 1.5 1.5 s 1.5 -0.67 1.5 -1.5 s -0.67 -1.5 -1.5 -1.5 S 10.5 11.17 10.5 12 Z M 10.5 6 c 0 0.83 0.67 1.5 1.5 1.5 s 1.5 -0.67 1.5 -1.5 S 12.83 4.5 12 4.5 S 10.5 5.17 10.5 6 Z" />
              </SvgIcon>
            </Button>
            <SettingLnb displayBox={settingLnbOpen} />
          </Box>
          <Box mr={2}>
            <Button
              sx={{ borderRadius: "2px" }}
              variant="outlined"
              color="info"
            >
              <SvgIcon>
                <path d="M 12 2 C 6.48 2 2 6.48 2 12 c 0 5.52 4.48 10 10 10 s 10 -4.48 10 -10 C 22 6.48 17.52 2 12 2 Z M 12 3 c 4.96 0 9 4.04 9 9 c 0 1.42 -0.34 2.76 -0.93 3.96 c -1.53 -1.72 -3.98 -2.89 -7.38 -3.03 C 14.57 12.6 16 10.97 16 9 c 0 -2.21 -1.79 -4 -4 -4 C 9.79 5 8 6.79 8 9 c 0 1.97 1.43 3.6 3.31 3.93 c -3.4 0.14 -5.85 1.31 -7.38 3.03 C 3.34 14.76 3 13.42 3 12 C 3 7.04 7.04 3 12 3 Z M 9 9 c 0 -1.65 1.35 -3 3 -3 s 3 1.35 3 3 c 0 1.65 -1.35 3 -3 3 S 9 10.65 9 9 Z M 12 21 c -3.16 0 -5.94 -1.64 -7.55 -4.12 C 6.01 14.93 8.61 13.9 12 13.9 c 3.39 0 5.99 1.03 7.55 2.98 C 17.94 19.36 15.16 21 12 21 Z" />
              </SvgIcon>
              로그인
            </Button>
          </Box>
        </Box>
      </Box>
      <hr />

      <Gnb gnbDisplay={snbOpen} />
    </Box>
  );
};

export default Header;
