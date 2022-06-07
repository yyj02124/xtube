import { Button } from "@mui/material";
import React from "react";

const GnbButton = ({ btnname }) => {
  return (
    <Button
      variant="outlined"
      sx={{
        height: "32px",
        marginLeft: "12px",
        padding: "0,12px",
        borderRadius: "16px",
        borderColor: "#dbdbdb",
        bgcolor: "#f2f2f2",
        fontSize: "14px",
        fontFamily: "Roboto, Arial, sans-serif",
      }}
    >
      {btnname}
    </Button>
  );
};

export default GnbButton;
