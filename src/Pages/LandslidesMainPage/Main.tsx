import React from "react";
import { Box, Typography } from "@mui/material";
import LandSlide from "../../assets/svg/LandSlide";
const Main = () => {
  return (
    <Box
      height={"100vh"}
      width={"100vw"}
      bgcolor={"#edbbe3"}
      display="flex"
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box>
        <Box
          display="flex"
          justifyContent={"center"}
          alignItems={"center"}
          gap="1rem"
        >
          <LandSlide />
          <Typography fontSize={"4rem"} fontWeight={"600"} color="#4d6feb">
            Landslides
          </Typography>
        </Box>
        <Typography fontSize={"2rem"} fontWeight={"500"} color="#d7d9dd">
          Collection of Landing pages redesigned using MaterialUI
        </Typography>
      </Box>
    </Box>
  );
};

export default Main;
