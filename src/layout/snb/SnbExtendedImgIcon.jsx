import { Box, Button, Typography } from "@mui/material";
import React from "react";

const SnbExtendedImgIcon = ({ name, src }) => {
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
        <Box
          component="img"
          width={24}
          height={24}
          borderRadius="50%"
          alt={src}
          src={src}
        />
        <Typography fontSize={14} ml={2}>
          {name}
        </Typography>
      </Button>
    </Box>
  );
};

export default SnbExtendedImgIcon;
