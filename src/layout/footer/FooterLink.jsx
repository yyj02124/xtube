import { Link } from "@mui/material";
import React from "react";

const FooterLink = ({ href, contents }) => {
  return (
    <>
      <Link
        sx={{
          fontSize: "13px",
          margin: "6px",
          color: "#888888",
          whiteSpace: "pre",
        }}
        underline="none"
        href={href}
      >
        {contents}
      </Link>
    </>
  );
};

export default FooterLink;
