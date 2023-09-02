import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        p: 2,
        bgcolor: "rgb(37,38,57)",
        color: "white",
        width: "100%",
      }}
    >
      <Typography sx={{ color: "#fff" }} variant="body2" align="center">
        © {new Date().getFullYear()} Dahookia Tsaghkadzor. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
