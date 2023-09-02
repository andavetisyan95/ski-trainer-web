import React from "react";
import { Box, Divider, Stack, Typography } from "@mui/material";

const HomePageSection: React.FC = () => {
  return (
    <div className="full-width-section">
      <Stack
        sx={{ zIndex: 999, maxWidth: "50%", flexWrap: "wrap" }}
        spacing={2.5}
      >
        <Typography
          sx={{
            color: "#fff",
            textTransform: "uppercase",
            fontSize: 16,
            letterSpacing: 0.5,
            lineHeight: "20px",
            fontWeight: 500,
          }}
        >
          Learn to ski or snowboard
        </Typography>
        <Box
          sx={{
            borderBottom: "1px solid #fff",
            width: "2rem",
            alignSelf: "center",
          }}
        ></Box>
        <Typography
          sx={{
            color: "#fff",
            textTransform: "uppercase",
            fontSize: { xs: 28, md: 35, lg: 60 },
            letterSpacing: " 0.1em",
            textAlign: "center",
            lineHeight: { xs: "30px", sm: "36px", md: "40px", lg: 1.1 },
            fontWeight: 700,
          }}
        >
          FIRST TIME ON THE MOUNTAIN
        </Typography>
      </Stack>
    </div>
  );
};

export default HomePageSection;
