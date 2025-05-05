// HowToDonate;.js
import React from "react";
import { Box, Grid, Paper, Typography, Divider, Alert } from "@mui/material";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";
import TestimonialCarousel from "./TestimonialCarousel";

const HowToDonate = () => {
  return (
    <Box
      sx={{
        my: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: { xs: 4, md: 10 },
      }}
    >
      <Grid container spacing={6}>
        {/* ---------- HOW TO DONATE ---------- */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 500,
              mb: 2,
              fontFamily: "playfair",
              fontSize: 40,
            }}
          >
            How to Donate
          </Typography>

          {/* Bank details card */}
          <Paper
            // elevation={3}
            sx={{
              p: 3,
              borderRadius: 2,
              display: "flex",
              flexDirection: "column",
              gap: 1.5,
              boxShadow: "0px 4px 10px 1px rgba(0, 0, 0, 0.1)",
            }}
          >
            {/* Heading with bank icon */}
            <Box sx={{ display: "flex", alignItems: "center", mb: 0.5 }}>
              <AccountBalanceIcon sx={{ mr: 1, color: "primary.main" }} />
              <Typography variant="subtitle1" fontWeight={600}>
                Bank Transfer
              </Typography>
            </Box>

            <Divider />

            {/* Detail rows */}
            <DetailRow label="Bank" value="First Bank" />
            <DetailRow label="Acct Number" value="318084589" />
            <DetailRow
              label="Acct Holder"
              value="Obialasor Romanus Nwachukwu"
            />
          </Paper>

          {/* Reminder */}
          <Alert
            icon={<WarningAmberRoundedIcon fontSize="inherit" />}
            severity="warning"
            sx={{ mt: 4 }}
          >
            After making a transfer, please fill the form below and upload your
            receipt.
          </Alert>
        </Grid>

        {/* ---------- TESTIMONIALS ---------- */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 500,
              mb: 2,
              fontFamily: "playfair",
              fontSize: 40,
            }}
          >
            Testimonials
          </Typography>

          <TestimonialCarousel />
        </Grid>
      </Grid>
    </Box>
  );
};

/* ---------- Small helper components ---------- */

const DetailRow = ({ label, value }) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: { xs: "column", sm: "row" },
      justifyContent: "space-between",
      alignItems: { sm: "center" },
      gap: 0.5,
    }}
  >
    <Typography variant="body2" color="text.secondary">
      {label}
    </Typography>
    <Typography
      variant="body2"
      fontWeight={500}
      sx={{
        wordBreak: "break-word",
        textAlign: { xs: "left", sm: "right" },
      }}
    >
      {value}
    </Typography>
  </Box>
);

export default HowToDonate;
