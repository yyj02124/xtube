import { Box, SvgIcon, Typography } from "@mui/material";
import React from "react";

const SnbHomeIcon = ({ path, menuname }) => {
  return (
    <Box
      height={74}
      width={72}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <SvgIcon>
        <path d={path} />
      </SvgIcon>

      <Typography
        mt={1}
        textAlign="center"
        fontSize="10px"
        fontWeight="400"
        fontFamily="Roboto, Arial, sans-serif"
        lineHeight="10px"
      >
        {menuname}
      </Typography>
    </Box>
  );
};

export default SnbHomeIcon;
