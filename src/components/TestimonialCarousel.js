// components/TestimonialCarousel.js
import React from "react";
import Slider from "react-slick";
import { Box, Typography, Paper } from "@mui/material";

const testimonials = [
  {
    message:
      "Supporting this ordination is a privilege. May God bless Fr. Anthony‑Mary on his journey.",
    name: "Anonymous Donor",
  },
  {
    message:
      "A truly inspiring cause. I’m grateful to be part of this mission through my contribution.",
    name: "Chinwe I.",
  },
  {
    message:
      "It brings me joy to help a servant of God take this important step. May your ministry bear much fruit.",
    name: "Emeka A.",
  },
  {
    message:
      "Though I can’t give much, I pray this little support adds to the blessing you're already receiving. God is faithful!",
    name: "Ngozi I.",
  },
  {
    message:
      "Honored to contribute. May this ordination be the beginning of a powerful priestly mission rooted in grace.",
    name: "Kelechi M.",
  },
  {
    message:
      "Seeing young people answer God’s call moves my heart. Thank you for allowing us share in your joy and mission.",
    name: "Sr. Benedicta",
  },
  {
    message:
      "I believe in the work you are about to begin. May God supply every need and surround you with love and support.",
    name: "Daniel O.",
  },
];

const TestimonialCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 6000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Box
      id="testimonials"
      sx={{
        maxWidth: 600,
        mx: "auto",
        boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
        borderRadius: 2,
        // overflow: "hidden",
      }}
    >
      <Slider {...settings} style={{}}>
        {testimonials.map((item, index) => (
          <Paper
            key={index}
            elevation={0}
            sx={{
              minHeight: 160,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              borderRadius: 3,
            }}
          >
            <Box
              sx={{
                p: 3,
                borderRadius: 2,
                display: "flex",
                flexDirection: "column",
                gap: 1.5,
              }}
            >
              <Typography
                variant="body1"
                fontStyle="italic"
                sx={{
                  fontSize: "18px",
                  opacity: 0.8,
                }}
              >
                {item.message}
              </Typography>
              <Typography
                variant="subtitle2"
                fontWeight={600}
                align="right"
                mt={2}
              >
                - {item.name}
              </Typography>
            </Box>
          </Paper>
        ))}
      </Slider>
    </Box>
  );
};

export default TestimonialCarousel;
