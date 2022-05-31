import { Box, Button, Container, SvgIcon, TextField } from "@mui/material";
import React, { useState } from "react";
import Main from "../page/Main";
import Gnb from "./gnb/Gnb";
import Snb from "./snb/Snb";

const Header = () => {
  const [snbOpen, setSnbOpen] = useState(false);

  const onSnbClick = () => {
    setSnbOpen(!snbOpen);
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
        <Box>
          <Button
            onClick={() => onSnbClick()}
            sx={{ height: "50px", width: "72px" }}
          >
            <SvgIcon>
              <path d="M 21 6 H 3 V 5 h 18 V 6 Z M 21 11 H 3 v 1 h 18 V 11 Z M 21 17 H 3 v 1 h 18 V 17 Z" />
            </SvgIcon>
          </Button>
          <Box component="img" alt="youtubeicon" src="" />
        </Box>
        <Box>
          <TextField type="search" placeholder="검색" size="small"></TextField>
          <Button>검색버튼</Button>
        </Box>
        <Box>
          <SvgIcon>
            <path d="M 16 4 v 4 h 4 V 4 H 16 Z M 19 7 h -2 V 5 h 2 V 7 Z M 16 10 v 4 h 4 v -4 H 16 Z M 19 13 h -2 v -2 h 2 V 13 Z M 10 4 v 4 h 4 V 4 H 10 Z M 13 7 h -2 V 5 h 2 V 7 Z M 10 10 v 4 h 4 v -4 H 10 Z M 13 13 h -2 v -2 h 2 V 13 Z M 16 16 v 4 h 4 v -4 H 16 Z M 19 19 h -2 v -2 h 2 V 19 Z M 10 16 v 4 h 4 v -4 H 10 Z M 13 19 h -2 v -2 h 2 V 19 Z M 4 4 v 4 h 4 V 4 H 4 Z M 7 7 H 5 V 5 h 2 V 7 Z M 4 10 v 4 h 4 v -4 H 4 Z M 7 13 H 5 v -2 h 2 V 13 Z M 4 16 v 4 h 4 v -4 H 4 Z M 7 19 H 5 v -2 h 2 V 19 Z" />
          </SvgIcon>
          <SvgIcon>
            <path d="M 12 16.5 c 0.83 0 1.5 0.67 1.5 1.5 s -0.67 1.5 -1.5 1.5 s -1.5 -0.67 -1.5 -1.5 S 11.17 16.5 12 16.5 Z M 10.5 12 c 0 0.83 0.67 1.5 1.5 1.5 s 1.5 -0.67 1.5 -1.5 s -0.67 -1.5 -1.5 -1.5 S 10.5 11.17 10.5 12 Z M 10.5 6 c 0 0.83 0.67 1.5 1.5 1.5 s 1.5 -0.67 1.5 -1.5 S 12.83 4.5 12 4.5 S 10.5 5.17 10.5 6 Z" />
          </SvgIcon>
          <Button>로그인 버튼 </Button>
        </Box>
      </Box>
      <hr />

      <Snb snbOpen={snbOpen} />
    </Box>
  );
};

export default Header;
