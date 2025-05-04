import React from "react";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  LinearProgress,
  Button,
} from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";

const ItemCard = ({ image, title, contributors, goal, raised }) => {
  const percent = Math.min((raised / goal) * 100, 100).toFixed(1);

  return (
    <Card sx={{ width: 300, borderRadius: 3, boxShadow: 3, mx: "auto" }}>
      <CardMedia component="img" height="180" image={image} alt={title} />
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", fontFamily: "playfair" }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              backgroundColor: "#cc9900",
              px: 2,
              py: 1,
              borderRadius: 1,
              color: "white",
            }}
          >
            ₦{raised.toLocaleString()}
          </Typography>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          mb={1}
          sx={{
            opacity: 0.7,
          }}
        >
          <PeopleIcon sx={{ fontSize: 18, mr: 0.5 }} />
          <Typography variant="body2">{contributors} contributors</Typography>
        </Box>
        <Box sx={{ mt: 2, mx: "auto" }}>
          <Box sx={{ position: "relative", height: 60 }}>
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: `${percent}%`,
                transform: "translateX(-50%)",
                transition: "left 0.5s ease-out",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img src="/images/comp2.png" alt="Rocket" height={40} />
              <Typography
                sx={{
                  color: "white",
                  fontSize: 8,
                  fontWeight: "bold",
                  mt: "-30px",
                  px: 1,
                  borderRadius: 1,
                }}
              >
                {percent}%
              </Typography>
            </Box>
          </Box>

          <LinearProgress
            variant="determinate"
            value={Number(percent)}
            sx={{
              height: 10,
              borderRadius: 5,
              mt: -1,
              backgroundColor: "#ddd",
              "& .MuiLinearProgress-bar": {
                backgroundColor: "green",
              },
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mx: "auto",
            mt: 2,
          }}
        >
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
            }}
          >
            🚀 Total Raised:{" "}
            <strong style={{ color: "green" }}>
              ₦{raised.toLocaleString()}
            </strong>
          </Typography>
        </Box>
        <Box display="flex" justifyContent="center" mt={2}>
          <Button
            variant="outlined"
            sx={{
              borderColor: "#cc9900",
              color: "#cc9900",
              backgroundColor: "white",
              textTransform: "none",
              boxShadow: "4px 4px 0 #cc9900",
              borderRadius: "0",
              padding: "5px 20px",
              "&:hover": { backgroundColor: "#fef9e7" },
            }}
          >
            Donate
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ItemCard;
