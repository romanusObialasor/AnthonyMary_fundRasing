import React, { useState } from "react";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import {
  Grid,
  TextField,
  MenuItem,
  Button,
  Typography,
  Paper,
  Checkbox,
  FormControlLabel,
  InputAdornment,
  IconButton,
  Snackbar,
  Box,
} from "@mui/material";
import { UploadFile, ContentCopy } from "@mui/icons-material";
import ContactUs from "./ContactUs";

const items = [
  "No preference",
  "Alb x2",
  "Habit material",
  "Chasubles X4 liturgical colors",
  "Mass box",
  "Sick call bag",
  "Small monstrance",
  "Igbo Missal",
  "The Christrain rite (two volumes)",
  "Book of blessings",
  "Igbo lectionary",
  "Roman collar",
  "Sacred linen (X2)",
  "Souvenirs",
  "Book of the gospel",
  "Personal Items",
];

export default function DonationForm({ formData, setFormData }) {
  const [snackOpen, setSnackOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [snackMessage, setSnackMessage] = useState("Copied!");

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? checked : type === "file" ? files[0] : value,
    }));
  };

  const handleCopy = () => {
    navigator.clipboard.writeText("3180848589");
    setSnackOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = new FormData();
      if (!formData.anonymous) data.append("name", formData.name);
      if (formData.phone) data.append("phone", formData.phone);
      data.append("item", formData.item || "No preference");
      data.append("amount", formData.amount);
      data.append("message", formData.prayer || "");
      if (formData.receipt) data.append("proofOfPayment", formData.receipt);

      await axios.post(
        "https://fundraisebackend.onrender.com/api/donate",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setFormData({
        name: "",
        anonymous: false,
        phone: "",
        item: "No preference",
        amount: "",
        receipt: null,
        prayer: "",
      });

      setSnackMessage(
        "Thank you for your donation. Your transaction is under review."
      );
      setSnackOpen(true);
    } catch (err) {
      console.error("Donation failed:", err);
      setSnackMessage("Something went wrong. Please try again.");
      setSnackOpen(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      id="donation"
      sx={{
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      <ContactUs />

      <Paper
        elevation={0} // Override elevation entirely
        sx={{
          p: 4,
          maxWidth: 600,
          mx: "auto",
          borderRadius: 3,
          boxShadow: {
            xs: "none", // No shadow on small screens
            sm: "0px 8px 24px rgba(0,0,0,0.04)", // Shadow for sm and above
          },
        }}
      >
        <Typography variant="h5" fontWeight={600} mb={3}>
          Make a Donation
        </Typography>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Box
              sx={{
                display: "flex",
                width: "100%",
                flexDirection: { xs: "column", sm: "row" },
                gap: 2,
              }}
            >
              {!formData.anonymous && (
                <TextField
                  fullWidth
                  required
                  label="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              )}

              <TextField
                fullWidth
                label="Phone Number (Optional)"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </Box>
            <Grid item sm={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    name="anonymous"
                    checked={formData.anonymous}
                    onChange={handleChange}
                  />
                }
                label="Donate anonymously"
              />
            </Grid>
            <Box
              sx={{
                display: "flex",
                width: "100%",
                flexDirection: { xs: "column", sm: "row" },
                gap: 2,
              }}
            >
              <TextField
                select
                fullWidth
                label="What would you like to support?"
                name="item"
                value={formData.item}
                onChange={handleChange}
              >
                {items.map((item) => (
                  <MenuItem key={item} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                fullWidth
                required
                label="Amount"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">₦</InputAdornment>
                  ),
                  type: "number",
                }}
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                width: "100%",
                flexDirection: { xs: "column", sm: "row" },
                gap: 2,
              }}
            >
              {" "}
              <TextField
                fullWidth
                label="Account Number"
                value="3180848589"
                InputProps={{
                  readOnly: true,
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleCopy}>
                        <ContentCopy />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Button
                component="label"
                variant="outlined"
                startIcon={<UploadFile />}
                fullWidth
                //   sx={{ textAlign: "left" }}
              >
                {formData.receipt
                  ? formData.receipt.name
                  : "Upload Receipt (PDF, JPG, PNG)"}
                <input
                  type="file"
                  name="receipt"
                  hidden
                  accept="image/*,application/pdf"
                  onChange={handleChange}
                />
              </Button>
            </Box>

            <Box
              sx={{
                width: "100%",
              }}
            >
              <TextField
                fullWidth
                multiline
                minRows={3}
                label="Message or Prayer (Optional)"
                name="prayer"
                value={formData.prayer}
                onChange={handleChange}
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                mt: 3,
              }}
            >
              <Button
                type="submit"
                variant="outlined"
                disabled={loading}
                sx={{
                  borderColor: "#cc9900",
                  color: "#cc9900",
                  backgroundColor: "white",
                  textTransform: "none",
                  boxShadow: "4px 4px 0 #cc9900",
                  borderRadius: "0",
                  padding: "10px 30px",
                  "&:hover": { backgroundColor: "#fef9e7" },
                }}
              >
                {loading ? (
                  <CircularProgress size={20} color="inherit" />
                ) : (
                  "Donate"
                )}
              </Button>
            </Box>
          </Grid>
        </form>

        <Snackbar
          open={snackOpen}
          autoHideDuration={2500}
          onClose={() => setSnackOpen(false)}
          message="Copied!"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        />
        <Snackbar
          open={snackOpen}
          autoHideDuration={4000}
          onClose={() => setSnackOpen(false)}
          message={snackMessage}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        />
      </Paper>
    </Box>
  );
}
