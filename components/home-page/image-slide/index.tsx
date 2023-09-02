import React, { useState, useEffect } from "react";
import { Box, IconButton } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

interface ImageSlideshowProps {
  images: string[];
  interval?: number;
}

const ImageSlideshow: React.FC<ImageSlideshowProps> = ({
  images,
  interval = 3000,
}) => {
  const [currentImage, setCurrentImage] = useState(0);

  const goToPrevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setInterval(goToNextImage, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <Box position="relative" sx={{ pt: { xs: 4, md: 6 } }}>
      <img
        src={images[currentImage]}
        alt={`Slide ${currentImage}`}
        style={{
          width: "100%",
          height: 480,
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
      <IconButton
        onClick={goToPrevImage}
        style={{ position: "absolute", left: 0, top: "50%" }}
      >
        <ChevronLeft />
      </IconButton>
      <IconButton
        onClick={goToNextImage}
        style={{ position: "absolute", right: 0, top: "50%" }}
      >
        <ChevronRight />
      </IconButton>
    </Box>
  );
};

export default ImageSlideshow;
