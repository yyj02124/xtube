import { Box, Button, SvgIcon, Typography } from "@mui/material";
import React from "react";

const SettingLnbBtn = ({ name, path, fillcolor }) => {
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
        <Typography
          textTransform={"none"}
          sx={{ color: "#030303" }}
          fontSize={14}
          ml={2}
        >
          {name}
        </Typography>
      </Button>
    </Box>
  );
};

export default SettingLnbBtn;
