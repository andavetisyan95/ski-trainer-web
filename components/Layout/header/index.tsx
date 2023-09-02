import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Box, Grid, Hidden, Stack, Typography } from "@mui/material";
import DownhillSkiingIcon from "@mui/icons-material/DownhillSkiing";
import Link from "next/link";

const Header: React.FC = () => {
  const [scroll, setScroll] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 1) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => window.removeEventListener("scroll", changeBackground);
  }, []);

  return (
    <Box
      position="static"
      sx={{
        background: scroll ? "white" : "transparent",
        position: scroll ? "fixed" : "block",
        px: { xs: 2, lg: 8 },
        top: 0,
        width: "100%",
        zIndex: 999,
        py: 1,
        boxShadow: 0,
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link href="/">
          <Stack spacing={"-5px"}>
            <Typography
              sx={{
                textTransform: "uppercase",
                fontSize: "24px",
                fontWeight: 900,
                color: scroll ? "primary.main" : "#FAFBFB",
              }}
            >
              Dahookia
            </Typography>
            <Typography
              sx={{
                fontSize: "12px",
                textAlign: "center",
                color: scroll ? "rgba(0, 5, 59, 0.75)" : "#FAFBFB",
              }}
            >
              Tsaghkadzor
            </Typography>
          </Stack>
        </Link>
        <Hidden smDown>
          <Grid
            container
            columnSpacing={5}
            sx={{ justifyContent: "flex-end", alignItems: "center" }}
          >
            <Grid item sx={{ cursor: "pointer" }}>
              <Link href="/">
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: 700,
                    color: scroll ? "primary.main" : "#FAFBFB",
                  }}
                >
                  Home
                </Typography>
              </Link>
            </Grid>
            <Grid item sx={{ cursor: "pointer" }}>
              <Link href="/about">
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: 700,
                    color: scroll ? "primary.main" : "#FAFBFB",
                  }}
                >
                  About Us
                </Typography>
              </Link>
            </Grid>
            {/* <Grid item sx={{ cursor: "pointer" }}>
              <Link href="/contacts">
                <Typography sx={{ fontSize: "18px", fontWeight: 700 }}>
                  Contacts
                </Typography>
              </Link>
            </Grid> */}
            <Grid item sx={{ cursor: "pointer" }}>
              <Link href="/services">
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: 700,
                    color: scroll ? "primary.main" : "#FAFBFB",
                  }}
                >
                  Services
                </Typography>
              </Link>
            </Grid>
          </Grid>
        </Hidden>
        <Hidden smUp>
          <DownhillSkiingIcon
            sx={{
              padding: "4px",
              border: scroll
                ? "1px solid rgba(0, 5, 59, 0.85)"
                : "1px solid #fff",
              borderRadius: "10px",
              color: scroll ? "rgba(0, 5, 59, 0.85)" : "#fff",
              cursor: "pointer",
              width: 40,
              height: 40,
              "&:hover": {
                background: "rgba(0, 5, 59, 0.85)",
                color: "#fff",
              },
            }}
          />
        </Hidden>
      </Toolbar>
    </Box>
  );
};

export default Header;
