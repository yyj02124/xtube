import { Box, Button, SvgIcon, Typography } from "@mui/material";
import React from "react";

const AppLnbBtn = ({
  path,
  otherpath,
  fillpathcolor,
  fillotherpathcolor,
  fillpolygoncolor,
  name,
  polygonpoints,
}) => {
  return (
    <Box>
      <Button
        sx={{
          width: "216px",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "left",
          paddingLeft: "14px",
        }}
      >
        <SvgIcon>
          <circle />
          <path d={path} fill={fillpathcolor} />
          <polygon points={polygonpoints} fill={fillpolygoncolor} />
        </SvgIcon>
        <Typography
          textTransform={"none"}
          fontFamily="Roboto, Arial, sans-serif"
          sx={{ color: "#030303" }}
          fontSize={13}
          ml={1}
        >
          {name}
        </Typography>
      </Button>
    </Box>
  );
};

export default AppLnbBtn;
