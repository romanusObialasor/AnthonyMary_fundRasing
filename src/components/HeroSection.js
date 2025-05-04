import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Box,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const HeroSection = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const navItems = [
    { label: "Home", id: "home" },
    { label: "Items", id: "items" },
    { label: "Testimonials", id: "testimonials" },
    { label: "Gallery", id: "gallery" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100); // adjust threshold if needed
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -100; // adjust this value to match your navbar height
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <Box sx={{ fontFamily: "serif" }}>
      {/* Fixed NavBar after scroll */}
      <AppBar
        position={scrolled ? "fixed" : "static"}
        elevation={scrolled ? 2 : 0}
        sx={{
          bgcolor: "#F5F5F5",
          color: "black",
          px: { xs: 2, sm: 4, md: 5 },
          py: 2,
          transition: "all 0.3s ease",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <img src="/images/logo.png" alt="Logo" style={{ height: 50 }} />

          {isMobile ? (
            <>
              <IconButton onClick={() => setDrawerOpen(true)}>
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
              >
                <Box sx={{ width: 250, p: 2 }}>
                  <List>
                    {navItems.map(({ label, id }) => (
                      <ListItem
                        button
                        key={label}
                        onClick={() => {
                          scrollToSection(id);
                          setDrawerOpen(false);
                        }}
                      >
                        <ListItemText primary={label} />
                      </ListItem>
                    ))}
                    <ListItem
                      button
                      onClick={() => {
                        scrollToSection("donation");
                        setDrawerOpen(false);
                      }}
                    >
                      <ListItemText primary="Donate" />
                    </ListItem>
                  </List>
                </Box>
              </Drawer>
            </>
          ) : (
            <Box sx={{ display: "flex", gap: 6 }}>
              {navItems.map(({ label, id }) => (
                <Typography
                  key={label}
                  variant="body1"
                  onClick={() => scrollToSection(id)}
                  sx={{
                    cursor: "pointer",
                    fontFamily: "Playfair Display",
                    fontWeight: 500,
                  }}
                >
                  {label}
                </Typography>
              ))}
            </Box>
          )}

          {!isMobile && (
            <Button
              onClick={() => scrollToSection("donation")}
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
          )}
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Container
        id="home"
        sx={{
          py: 6,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: 4,
        }}
      >
        {/* Image */}
        <Box sx={{ width: { xs: "100%", md: "50%" } }}>
          <img
            src="/images/comp1.png"
            alt="Hero"
            style={{ width: "100%", objectFit: "contain" }}
          />
        </Box>

        {/* Text Content */}
        <Box sx={{ maxWidth: 550 }}>
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{
              fontFamily: "Playfair Display",
              fontSize: { xs: "28px", sm: "32px", md: "40px" },
              mb: 1,
            }}
          >
            SUPPORT ANTHONYMARY’S PRIESTLY ORDINATION
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: "#C19700",
              fontFamily: "Playfair Display",
              fontWeight: "bold",
              fontSize: { xs: "22px", sm: "28px", md: "32px" },
              mb: 2,
            }}
          >
            – JULY 19, 2025
          </Typography>
          <Typography
            variant="body1"
            sx={{ mb: 3, opacity: 0.8, fontSize: { xs: "14px", sm: "16px" } }}
          >
            Help us make his calling complete by supporting essential items for
            the ordination.
          </Typography>
          <Button
            onClick={() => scrollToSection("donation")}
            variant="outlined"
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
            Donate
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
