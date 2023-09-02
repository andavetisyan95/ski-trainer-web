import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Container, Stack, Typography } from "@mui/material";
import ImageSlideshow from "@/components/home-page/image-slide";
import HomePageSection from "@/components/home-page/main-section";
import SecondSection from "@/components/home-page/second-section";
import LearnSection from "@/components/home-page/learn-section";

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
      <Container sx={{ mt: { xs: 95, lg: 105 } }} maxWidth="lg">
        {/* <ImageSlideshow images={images} /> */}
        <SecondSection />
      </Container>
      <LearnSection />
    </>
  );
}
