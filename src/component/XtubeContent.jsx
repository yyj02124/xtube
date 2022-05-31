import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import { faker } from "@faker-js/faker";

const randomNumberForImg = Math.random() * 100;

const XtubeContent = () => {
  const randomName = faker.name.findName();

  return (
    <Box m={2}>
      <Box
        component="img"
        alt="randimg"
        src={`https://loremflickr.com/320/240?random=${randomNumberForImg}`}
        sx={{ width: 1 }}
      />
      <Box display="flex">
        <Avatar
          alt="randavartar"
          src={`https://loremflickr.com/320/240/people?random=${randomNumberForImg}`}
          sx={{ marginRight: "10px" }}
        />
        <Box>
          <Typography fontWeight={500}>{faker.lorem.sentence()}</Typography>
          <Typography fontSize={13}>{randomName}</Typography>
          <Typography fontSize={13}>
            조회수 {faker.datatype.number()}회
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default XtubeContent;
