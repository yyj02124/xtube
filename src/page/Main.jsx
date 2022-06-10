import { Box } from "@mui/material";
import React from "react";
import XtubeContent from "../component/XtubeContent";

function content(count) {
  const array = [];
  for (let i = 0; i <= count; i++) {
    array.push(<XtubeContent />);
  }
  return array;
}

const Main = ({ onclick }) => {
  return (
    <>
      <Box display="flex" justifyContent="end">
        <Box
          sx={{ backgroundColor: "#f9f9f9" }}
          width={"100%"}
          ml={onclick === true ? 28 : 9}
          mt={13}
          display="grid"
          gridTemplateColumns="repeat(4, 1fr)"
          justifyContent="start"
        >
          {/*sx로 다 넣거나 아니면 다뺴거나*/}
          {content(100)}
        </Box>
      </Box>
    </>
  );
};

export default Main;
