import React from "react";
import Header from "./header";
import Footer from "./footer";

import { Box, Container } from "@mui/material";

type Props = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: Props) {
  return (
    <Box>
      <Header />
      <Box sx={{ py: 4 }}>{children}</Box>
      <Footer />
    </Box>
  );
}
