import { Stack, Typography } from "@mui/material";

export default function SecondSection() {
  return (
    <Stack spacing={2}>
      <Typography
        sx={{
          color: "primary.main",
          fontSize: "calc(24px + 1 * ((100vw - 768px) / 672))",
          fontWeight: 700,
          lineHeight: 1.2,
          letterSpacing: "0.1em",
          fontFamily: "Gotham Cond SSm B",
        }}
      >
        LEARN TO SHRED!
      </Typography>
      <Typography
        sx={{
          fontSize: "calc(15px + 1 * ((100vw - 768px) / 432))",
          textAlign: "left",
          color: "secondary.dark",
          fontWeight: 400,
          lineHeight: 1.6667,
          fontFamily: "Gotham Cond SSm B",
          width: { xs: "80%", sm: "60%", md: "40%" },
        }}
      >
        You’ve come to the right place. The Dahookia Tsaghkadzor has a huge
        beginner area and programmes tailored for all ages and capabilities.
        This allows you to fly past your mates with style and confidence in no
        time.
      </Typography>
    </Stack>
  );
}
