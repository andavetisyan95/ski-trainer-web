import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Container, Stack, Typography } from "@mui/material";
import ImageSlideshow from "@/components/home-page/image-slide";
import HomePageSection from "@/components/home-page/main-section";

const images = [
  "/images/slide/twoSkier.jpg",
  "/images/slide/skiing.jpg",
  "/images/slide/board.jpg",
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Dahookia</title>
        <meta name="description" content="Ski lessons for everyone" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePageSection />
      <Stack sx={{ mt: { xs: 80, lg: "40%" } }} spacing={{ xs: 12, md: 10 }}>
        {/* <ImageSlideshow images={images} /> */}
        <Container maxWidth="lg">
          <Typography>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus a
            excepturi alias beatae, quae quod vero repudiandae nisi accusamus
            distinctio, eaque assumenda architecto aut eos? Pariatur rem magni
            velit odio.
          </Typography>
        </Container>
      </Stack>
    </>
  );
}
