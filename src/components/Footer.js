import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#1e1e1e",
        py: 4,
        textAlign: "center",
        mt: 10,
      }}
    >
      <Typography
        variant="h3"
        sx={{
          color: "#fff",
          fontFamily: "'Playfair Display', serif",
          fontWeight: 500,
          letterSpacing: "0.1em",
        }}
      >
        THANK YOU <span style={{ color: "red" }}>❤️</span>
      </Typography>
    </Box>
  );
};

export default Footer;
//               Contact
