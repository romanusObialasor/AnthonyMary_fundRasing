import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Snackbar,
  //   IconButton,
  Paper,
} from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";

const ContactUs = () => {
  const [snackOpen, setSnackOpen] = useState(false);

  const phoneNumber = "08012345678"; // Replace with your actual number
  const whatsappLink = `https://wa.me/2348012345678`; // International format

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(phoneNumber);
    setSnackOpen(true);
  };

  return (
    <Box
      sx={{
        maxWidth: 600,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 5,
          borderRadius: 4,
          bgcolor: "#fffef7",
          boxShadow: "0px 8px 24px rgba(0,0,0,0.04)",
        }}
      >
        <Typography variant="h5" fontWeight={700} mb={2}>
          We'd love to hear from you
        </Typography>

        <Typography color="text.secondary" mb={4}>
          If you have questions, need support, or simply want to send your
          blessings, we’d be happy to hear from you. Reach out through any of
          the channels below.
        </Typography>

        <Box
          spacing={2}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: 2,
          }}
        >
          <Button
            variant="contained"
            startIcon={<WhatsAppIcon />}
            sx={{
              backgroundColor: "#25D366",
              color: "#fff",
              px: 4,
              fontWeight: 600,
              width: { xs: "100%", sm: "200px" },
              py: 2,
              "&:hover": {
                backgroundColor: "#1DA851",
              },
            }}
            href={whatsappLink}
            target="_blank"
          >
            WhatsApp
          </Button>

          <Button
            variant="outlined"
            startIcon={<PhoneIcon />}
            onClick={handleCopyPhone}
            sx={{
              px: 4,
              fontWeight: 600,
              borderColor: "#333",
              color: "#333",
              width: { xs: "100%", sm: "200px" },
              py: 2,
              "&:hover": {
                backgroundColor: "#f9f9f9",
                borderColor: "#000",
              },
            }}
          >
            {phoneNumber}
          </Button>
        </Box>
      </Paper>

      <Snackbar
        open={snackOpen}
        autoHideDuration={2500}
        onClose={() => setSnackOpen(false)}
        message="Phone number copied!"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      />
    </Box>
  );
};

export default ContactUs;
