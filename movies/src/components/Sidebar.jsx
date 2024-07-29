import React from "react";
import blackBackground from "../assets/images/black.png";
import whiteBackground from "../assets/images/white.png";
import Slider from "./Slider";
import { styled } from "@mui/material/styles";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import AccessAlarmsOutlinedIcon from "@mui/icons-material/AccessAlarmsOutlined";
import StarBorderPurple500OutlinedIcon from "@mui/icons-material/StarBorderPurple500Outlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import DownloadingOutlinedIcon from "@mui/icons-material/DownloadingOutlined";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import SettingsSuggestOutlinedIcon from "@mui/icons-material/SettingsSuggestOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import Movies from "./Movies";
import { Typography } from "@mui/material";

const MainSection = styled("main")(({ theme }) => ({
  display: "block",
  maxWidth: "1200px",
  width: "100%",
  marginBottom: "150px",
  paddingLeft: "94px",
  backgroundImage:
    theme.palette.mode === "light"
      ? `url(${whiteBackground})`
      : `url(${blackBackground})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  [theme.breakpoints.down("md")]: {
    paddingLeft: "0px",
    flexDirection: "column",
  },
  [theme.breakpoints.down("sm")]: {
    paddingLeft: "20px",
    display: "flex",
  },
}));

const Asideandslidercontainer = styled("div")(() => ({
  display: "flex",
  width: "auto",
}));

const MainContent = styled("aside")(({ theme }) => ({
  maxWidth: "176px",
  width: "100%",
  marginRight: "195px",
  [theme.breakpoints.down("md")]: {
    marginRight: "50px",
    marginBottom: "30px",
  },
  [theme.breakpoints.down("sm")]: {
    marginRight: "0",
    marginBottom: "20px",
  },
}));

const AsideDiv = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "30px",
}));

const MenuTitle = styled(Typography)(() => ({
  fontFamily: "Lato, sans-serif",
  fontWeight: "700",
  fontSize: "18px",
  lineHeight: "21.6px",
  marginBottom: "16px",
}));

const AsideUl = styled("ul")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "15px",
}));

const AsideLi = styled("li")(() => ({
  cursor: "pointer",
  listStyle: "none",
}));

const AsideLink = styled("a")(() => ({
  fontWeight: "600",
  fontSize: "18px",
  fontFamily: "Lato, sans-serif",
  lineHeight: "21.6px",
  textDecoration: "none",
  color: "inherit",
  display: "flex",
  alignItems: "center",
  gap: "8px",
  "&:hover": {
    color: "#f8b319",
  },
}));

const MoviesTitle = styled("h2")(() => ({
  fontWeight: "800",
  fontSize: "30px",
  lineHeight: "30px",
  marginBottom: "30px",
  marginTop: "100px",
}));

const SliderAndMoviesContainer = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
}));

const Sidebar = () => {
  return (
    <MainSection className="mainSection">
      <Asideandslidercontainer className="asideandslidercontainer">
        <MainContent className="aside" sx={{ marginRight: "195px" }}>
          <AsideDiv className="asideDiv">
            <MenuTitle className="menuSpan">Menu</MenuTitle>
            <AsideUl className="menu">
              <AsideLi className="menu-list">
                <AsideLink className="menuItem" href="/">
                  <HomeIcon sx={{ fontSize: 30 }} />
                  Home
                </AsideLink>
              </AsideLi>
              <AsideLi className="menu-list">
                <AsideLink
                  className="menuItem"
                  href="/discover"
                  target="_blank"
                >
                  <ExploreIcon sx={{ fontSize: 28 }} />
                  Discover
                </AsideLink>
              </AsideLi>
              <AsideLi className="menu-list">
                <AsideLink className="menuItem" href="/awards" target="_blank">
                  <EmojiEventsOutlinedIcon sx={{ fontSize: 30 }} />
                  Awards
                </AsideLink>
              </AsideLi>
              <AsideLi className="menu-list">
                <AsideLink
                  className="menuItem"
                  href="/celebrities"
                  target="_blank"
                >
                  <AutoAwesomeOutlinedIcon sx={{ fontSize: 30 }} />
                  Celebrities
                </AsideLink>
              </AsideLi>
            </AsideUl>
            <MenuTitle className="menuSpan">Library</MenuTitle>
            <AsideUl className="menu">
              <AsideLi className="menu-list">
                <AsideLink
                  className="menuItem"
                  href="/recent-rated"
                  target="_blank"
                >
                  <AccessAlarmsOutlinedIcon sx={{ fontSize: 30 }} />
                  Recent
                </AsideLink>
              </AsideLi>
              <AsideLi className="menu-list">
                <AsideLink
                  className="menuItem"
                  href="/top-rated"
                  target="_blank"
                >
                  <StarBorderPurple500OutlinedIcon sx={{ fontSize: 30 }} />
                  Top Rated
                </AsideLink>
              </AsideLi>
              <AsideLi className="menu-list">
                <AsideLink
                  className="menuItem"
                  href="/downloaded"
                  target="_blank"
                >
                  <DownloadingOutlinedIcon sx={{ fontSize: 28 }} />
                  Downloaded
                </AsideLink>
              </AsideLi>
              <AsideLi className="menu-list">
                <AsideLink
                  className="menuItem"
                  href="/playlists"
                  target="_blank"
                >
                  <FavoriteBorderOutlinedIcon sx={{ fontSize: 30 }} />
                  Playlists
                </AsideLink>
              </AsideLi>
              <AsideLi className="menu-list">
                <AsideLink
                  className="menuItem"
                  href="/watchlists"
                  target="_blank"
                >
                  <AddOutlinedIcon sx={{ fontSize: 30 }} />
                  Watchlists
                </AsideLink>
              </AsideLi>
              <AsideLi className="menu-list">
                <AsideLink
                  className="menuItem"
                  href="/completed"
                  target="_blank"
                >
                  <VerifiedOutlinedIcon sx={{ fontSize: 28 }} />
                  Completed
                </AsideLink>
              </AsideLi>
            </AsideUl>

            <MenuTitle className="menuSpan">General</MenuTitle>
            <AsideUl className="menu">
              <AsideLi className="menu-list">
                <AsideLink className="menuItem" href="/settings">
                  <SettingsSuggestOutlinedIcon sx={{ fontSize: 30 }} />
                  Settings
                </AsideLink>
              </AsideLi>
              <AsideLi className="menu-list">
                <AsideLink className="menuItem" href="/logout">
                  <ExitToAppOutlinedIcon sx={{ fontSize: 30 }} />
                  Log Out
                </AsideLink>
              </AsideLi>
            </AsideUl>
          </AsideDiv>
        </MainContent>
        <SliderAndMoviesContainer className="sliderAndMoviesContainer">
          <Slider />
          <MoviesTitle style={{ fontFamily: "Lato, sans-serif" }}>
            Movies
          </MoviesTitle>
          <Movies />
        </SliderAndMoviesContainer>
      </Asideandslidercontainer>
    </MainSection>
  );
};

export default Sidebar;
