import { Stack, Typography } from "@mui/material";

export default function LearnSection() {
  return (
    <Stack
      sx={{
        background: "#F4F6FA",
        width: "100%",
        height: 400,
        backgroundImage: "url(/images/dahookia/learn-section.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        alignItems: "center",
        pt: 15,
        mt: { xs: 10, lg: 20 },
      }}
      spacing={{ xs: 5, lg: 10 }}
    >
      <Typography
        sx={{
          fontSize: { xs: 36, sm: 46, lg: 64 },
          fontWeight: 600,
          fontStyle: "italic",
          lineHeight: "24px",
          letterSpacing: ".01em",
          color: "primary.main",
        }}
      >
        Learn
      </Typography>
      <Typography
        sx={{
          fontSize: { md: 18, lg: 20 },
          fontWeight: 600,
          fontStyle: "italic",
          lineHeight: 1.35,
          letterSpacing: ".02em",
          color: "white",
          textAlign: "center",
          mx: "auto",
          fontFamily: "Open Sans",
          maxWidth: 600,
        }}
      >
        {" "}
        Learn to ski or snowboard at Dahookia Tsaghkadzor on your ski holiday!
        We have lessons for all ages & abilities. If you want to learn to ski or
        snowboard in Tsaghkadzor, Dahookia school is the place to do it!
      </Typography>
    </Stack>
  );
}
