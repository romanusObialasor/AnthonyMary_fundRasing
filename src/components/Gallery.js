import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const images = [
  "/gallery/image1.jpeg",
  "/gallery/image2.jpeg",
  "/gallery/image3.jpeg",
  "/gallery/image4.jpeg",
  "/gallery/image5.jpeg",
  "/gallery/image6.jpeg",
  "/gallery/image7.jpeg",
  "/gallery/image8.jpeg",
  "/gallery/image9.jpeg",
];

// Optional: Randomize height presets for varied sizes
const heights = [250, 300, 350, 250, 270];

const Gallery = () => {
  const imageSet = [...images, ...images]; // Duplicate for seamless loop

  return (
    <Box
      id="gallery"
      sx={{
        overflow: "hidden",
        position: "relative",
        bgcolor: "white",
        py: 4,
        mt: 10,
      }}
    >
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{
          fontFamily: "Playfair Display",
          fontWeight: 500,
          fontSize: 40,
        }}
      >
        ANTHONYMARY’S GALLERY
      </Typography>

      <Box
        sx={{ position: "relative", overflow: "hidden", width: "100%", mt: 4 }}
      >
        <motion.div
          style={{ display: "flex", width: "max-content" }}
          animate={{ x: ["0%", "-50%"] }} // Half the total width due to duplicate
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20, // Adjust speed here
          }}
        >
          {imageSet.map((src, i) => (
            <Box
              key={i}
              component="img"
              src={src}
              alt={`img-${i}`}
              sx={{
                height: heights[i % heights.length], // Vary height
                mx: 1.5,

                transition: "transform 0.5s ease",
              }}
            />
          ))}
        </motion.div>
      </Box>
    </Box>
  );
};

export default Gallery;
