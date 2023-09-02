import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "rgba(0, 5, 59, 0.85)",
      light: "rgba(0, 5, 59, 0.75)",
    },
    secondary: {
      main: "#F4F6FA",
      light: "rgba(72, 64, 126, 0.75)",
      dark: "#48407E",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 630,
      md: 900,
      lg: 1200,
      xl: 1563,
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "rgba(0, 5, 59, 0.75)",
          fontFamily: "Lato",
          fontStyle: "normal",
          fontWeight: 500,
        },
        h2: {
          color: "rgba(0, 5, 59, 0.85)",
          fontSize: "50px",
          fontWeight: 900,
          fontFamily: "Lato",
        },
        h5: {
          color: "rgba(0, 5, 59, 0.85)",
          fontWeight: 900,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#48407E",
          fontSize: 18,
          ":disabled": { color: "rgba(72, 64, 126, 0.5)" },
          lineHeight: "22px",
          height: 48,
          fontFamily: "Lato",
          borderRadius: "10px",
          textTransform: "capitalize",
          // background: "linear-gradient(90deg, #48407E 0%, #69599B 55.73%, #B492DD 100%)",
        },
      },
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});
