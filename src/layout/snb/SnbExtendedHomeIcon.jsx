import { Box, Button, SvgIcon, Typography } from "@mui/material";
import React from "react";

const SnbExtendedHomeIcon = ({ path, name, fillcolor }) => {
  return (
    <Box>
      <Button
        fullWidth
        sx={{
          width: "220px",
          height: "50px",
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
          textTransform="none"
          fontWeight="300"
          fontFamily="Roboto, Arial, sans-serif"
          fontSize="14px"
          ml={2}
        >
          {name}
        </Typography>
      </Button>
    </Box>
  );
};

export default SnbExtendedHomeIcon;
