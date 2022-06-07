import { Box, Button, SvgIcon, Typography } from "@mui/material";
import React from "react";

const SettingLnbBtnIncludeRightArrow = ({ path, fillcolor, name }) => {
  return (
    <Box>
      <Button
        sx={{
          width: "300px",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "left",
          paddingLeft: "24px",
        }}
      >
        <SvgIcon>
          <path d={path} fill={fillcolor} />
        </SvgIcon>
        <Typography sx={{ color: "#030303" }} fontSize={14} ml={2}>
          {name}
        </Typography>
        <Box position="absolute" right={15} top={8}>
          <SvgIcon>
            <path d="M 9.4 18.4 l -0.7 -0.7 l 5.6 -5.6 L 8.6 6.4 l 0.7 -0.7 l 6.4 6.4 L 9.4 18.4 Z" />
          </SvgIcon>
        </Box>
      </Button>
    </Box>
  );
};

export default SettingLnbBtnIncludeRightArrow;
