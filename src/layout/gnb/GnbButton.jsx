import { Button } from "@mui/material";
import React from "react";

const GnbButton = ({ btnname }) => {
  return (
    <Button
      variant="outlined"
      sx={{
        height: "32px",
        marginLeft: "10px",
        padding: "3px",
        borderRadius: "16px",
      }}
    >
      {btnname}
    </Button>
  );
};

export default GnbButton;
