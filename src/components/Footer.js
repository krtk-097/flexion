import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/flexion_logo.png";

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack
      gap="40px"
      sx={{ alignItems: "center" }}
      flexWrap="wrap"
      px="40px"
      pt="24px"
    >
      <img src={Logo} alt="logo" style={{ width: "200px", height: "80px" }} />
    </Stack>
    <Typography
      variant="h5"
      sx={{ fontSize: { lg: "28px", xs: "20px" } }}
      mt="41px"
      textAlign="center"
      pb="40px"
    >
      Made by{" "}
      <a
        href="https://www.linkedin.com/in/kartiksharma01/"
        target="_blank"
        style={{ textDecoration: "none", color: "#3A1212" }}
      >
        Kartik Sharma
      </a>
    </Typography>
  </Box>
);

export default Footer;
