import React from "react";
import {
  Box,
  Typography,
  LinearProgress,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import ItemCard from "./ItemCard";

const MissionSection = () => {
  const goal = 2665850;
  const raised = 950000;
  const percent = Math.min((raised / goal) * 100, 100).toFixed(1);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ py: 6, px: 2, textAlign: "center", bgcolor: "#f5f5f5" }}>
      {/* Title */}
      <Typography
        variant="h5"
        sx={{
          fontWeight: 500,
          mb: 3,
          fontFamily: "playfair",
          fontSize: { xs: 24, sm: 32, md: 40 },
        }}
      >
        The Mission
      </Typography>

      {/* Progress Bar Section */}
      <Box sx={{ mt: 8, mx: "auto", maxWidth: "90%" }}>
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
            <img
              src="/images/comp2.png"
              alt="Rocket"
              height={60}
              style={{
                height: "auto",
                width: "auto",
                maxHeight: "60px",
                maxWidth: "100%",
              }}
            />

            <Typography
              sx={{
                color: "white",
                fontSize: { xs: 10, sm: 12 },
                // fontWeight: "bold",
                mt: -3,
                px: 1,
                borderRadius: 1,
                position: "absolute",
                bottom: "42%",
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
          justifyContent: "space-between",
          alignItems: "center",
          mx: "auto",
          maxWidth: "90%",
          mt: 2,
        }}
      >
        <Typography
          variant="body1"
          sx={{ fontSize: { xs: 12, sm: 14, md: 16 } }}
        >
          🚀 Total Raised:{" "}
          <strong style={{ color: "green" }}>₦{raised.toLocaleString()}</strong>
        </Typography>

        <Typography
          variant="body1"
          sx={{ fontSize: { xs: 12, sm: 14, md: 16 } }}
        >
          🎯 Goal:{" "}
          <strong style={{ color: "darkred" }}>₦{goal.toLocaleString()}</strong>
        </Typography>
      </Box>

      {/* Progress Bar */}

      {/* Countdown */}
      <Box
        sx={{
          mt: 10,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <FlipClockCountdown
            to={new Date("2025-07-19T00:00:00")}
            labels={["DAYS", "HOURS", "MINUTES", "SECONDS"]}
            showSeparators
            showLabels
            digitBlockStyle={{
              width: isSmallScreen ? 30 : 70,
              height: isSmallScreen ? 50 : 100,
              fontSize: isSmallScreen ? 26 : 70,
              backgroundColor: "white",
              color: "black",
              fontFamily: "playfair",
              fontWeight: "bold",
            }}
            dividerStyle={{ color: "black", height: 1 }}
          />
        </Box>
      </Box>
      <Typography
        sx={{
          mt: 12,
          fontSize: { xs: 24, sm: 32, md: 40 },
          fontFamily: "playfair",
          fontWeight: 500,
        }}
        id="items"
      >
        Essential Items
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(4, 1fr)" },
          gap: 4,
          my: 6,
          mx: 1,
        }}
      >
        <ItemCard
          image="/components/chasuble.jpg"
          title="Chasuble (X4)"
          contributors={5}
          goal={500000}
          raised={300000}
        />
        <ItemCard
          image="/components/habit.jpg"
          title="Habit material"
          contributors={3}
          goal={300000}
          raised={250000}
        />
        <ItemCard
          image="/components/habit.jpg"
          title="Habit material"
          contributors={3}
          goal={300000}
          raised={250000}
        />
        <ItemCard
          image="/components/habit.jpg"
          title="Habit material"
          contributors={3}
          goal={300000}
          raised={250000}
        />
        {/* Add more as needed */}
      </Box>
    </Box>
  );
};

export default MissionSection;
