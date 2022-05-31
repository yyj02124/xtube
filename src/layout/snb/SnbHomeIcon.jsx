import { Box, SvgIcon, Typography } from "@mui/material";
import React from "react";

const SnbHomeIcon = ({ props, path, menuname }) => {
  return (
    <Box
      height={74}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <SvgIcon {...props}>
        <path d={path} />
      </SvgIcon>

      <Typography
        textAlign="center"
        fontSize="11px"
        fontWeight="400"
        lineHeight="11px"
      >
        {menuname}
      </Typography>
    </Box>
  );
};

export default SnbHomeIcon;
