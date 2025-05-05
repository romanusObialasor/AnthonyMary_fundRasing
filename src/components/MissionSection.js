import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  LinearProgress,
  useTheme,
  useMediaQuery,
  CircularProgress,
} from "@mui/material";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import ItemCard from "./ItemCard";
import axios from "axios";

const MissionSection = ({ setFormData }) => {
  const [items, setItems] = useState([]);
  const [raised, setRaised] = useState(0);
  const [goal, setGoal] = useState(0);
  const [loading, setLoading] = useState(true);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleDonateClick = (itemName) => {
    setFormData((prev) => ({ ...prev, item: itemName }));
    const formEl = document.getElementById("donation");
    if (formEl) {
      formEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await axios.get(
          "https://fundraisebackend.onrender.com/api/items"
        );
        const fetchedItems = res.data;

        setItems(fetchedItems);
        const totalRaised = fetchedItems.reduce(
          (sum, item) => sum + (item.amountRaised || 0),
          0
        );
        const totalGoal = fetchedItems.reduce(
          (sum, item) => sum + (item.price || 0),
          0
        );

        setRaised(totalRaised);
        setGoal(totalGoal);
      } catch (err) {
        console.error("Failed to fetch items", err);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  const percent = goal ? Math.min((raised / goal) * 100, 100).toFixed(1) : 0;

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

      {/* Countdown */}
      <Box sx={{ mt: 10 }}>
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
        {loading ? (
          <Box
            sx={{
              position: "absolute",
              width: "100%",
              left: 0,
              right: 0,
              marginTop: -2,
            }}
          >
            <CircularProgress
              size={50}
              thickness={3}
              sx={{ color: "#cc9900" }}
            />

            <Typography
              variant="h6"
              sx={{ fontSize: 20, mt: 2, fontWeight: "normal", opacity: 0.7 }}
            >
              Fetching items...
            </Typography>
          </Box>
        ) : (
          <>
            {items?.map((item, idx) => (
              <ItemCard
                key={idx}
                image={item?.image || "/components/default.jpg"}
                title={item?.name}
                contributors={item?.contributors}
                goal={item?.price}
                raised={item?.amountRaised}
                onDonateClick={handleDonateClick}
              />
            ))}
          </>
        )}
      </Box>
    </Box>
  );
};

export default MissionSection;
