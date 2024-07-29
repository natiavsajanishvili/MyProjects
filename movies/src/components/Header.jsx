import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useThemeContext } from "../context/ThemeContext";
import Search from "./Search";
import { Box, IconButton, Drawer, List, ListItem } from "@mui/material";
import { styled } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../assets/images/Logo.svg";
import { keyframes } from "@mui/system";

const CustomAppBar = styled("header")(({ theme }) => ({
  position: "static",
  margin: "60px auto 30px auto",
  width: "100%",
  maxWidth: "1440px",
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "nowrap",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    justifyContent: "space-between",
  },
}));

const Navigation = styled("nav")(({ theme }) => ({
  width: "auto",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "50px",
  listStyle: "none",
  marginBottom: 0,
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const lineAnimation = keyframes`
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
`;

const CustomHeaderLink = styled(Link)(() => ({
  position: "relative",
  fontWeight: "800",
  fontSize: "24px",
  fontFamily: "Lato, sans-serif",
  lineHeight: "24px",
  textDecoration: "none",
  cursor: "pointer",
  color: "inherit",
  "&:hover::after": {
    content: '""',
    position: "absolute",
    bottom: "-8px",
    left: 0,
    width: "100%",
    borderBottom: "4px solid #f8b319",
    borderRadius: "92px",
    animation: `${lineAnimation} 400ms ease-in-out forwards`,
  },
}));

const CustomIconButton = styled(IconButton)(({ theme }) => ({
  height: "57px",
  width: "150px",
  backgroundColor: "#f8b319",
  borderRadius: "15px",
  border: "none",
  fontFamily: "Lato, sans_serif",
  fontWeight: "800",
  lineHeight: "18px",
  fontSize: "18px",
  marginRight: "0",
  "&:hover": {
    backgroundColor: "#f8b319",
    opacity: "90%",
  },
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const BurgerIconButton = styled(IconButton)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));

const SearchWrapper = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const Header = () => {
  const { theme, toggleTheme } = useThemeContext();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <CustomAppBar position="static" color="inherit">
      <Box variant="div">
        <img src={Logo} alt="Logo" />
      </Box>
      <Navigation>
        <CustomHeaderLink sx={{ color: "#f8b319" }} as={Link} to="/movies">
          Movies
        </CustomHeaderLink>
        <CustomHeaderLink as={Link} to="/tvShows">
          TV Shows
        </CustomHeaderLink>
        <CustomHeaderLink as={Link} to="/anime">
          Anime
        </CustomHeaderLink>
      </Navigation>
      <CustomIconButton edge="end" color="inherit" onClick={toggleTheme}>
        {theme.background === "#ffffff" ? "Dark mode" : "Light mode"}
      </CustomIconButton>
      <SearchWrapper>
        <Search />
      </SearchWrapper>
      <BurgerIconButton
        edge="end"
        color="inherit"
        onClick={toggleDrawer(true)}
        sx={{ marginRight: "0" }}
      >
        <MenuIcon />
      </BurgerIconButton>
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List sx={{ width: "300px" }}>
          <ListItem>
            <IconButton edge="end" color="inherit" onClick={toggleTheme}>
              {theme.background === "#ffffff" ? (
                <Brightness4Icon />
              ) : (
                <Brightness7Icon />
              )}
            </IconButton>
          </ListItem>
          <ListItem>
            <CustomHeaderLink sx={{ color: "#f8b319" }} as={Link} to="/movies">
              Movies
            </CustomHeaderLink>
          </ListItem>
          <ListItem>
            <CustomHeaderLink as={Link} to="/tvShows">
              TV Shows
            </CustomHeaderLink>
          </ListItem>
          <ListItem>
            <CustomHeaderLink as={Link} to="/anime">
              Anime
            </CustomHeaderLink>
          </ListItem>
          <ListItem>
            <Box sx={{ width: "100%" }}>
              <Search />
            </Box>
          </ListItem>
        </List>
      </Drawer>
    </CustomAppBar>
  );
};

export default Header;
