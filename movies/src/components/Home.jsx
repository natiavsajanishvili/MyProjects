import React from "react";
import { styled } from "@mui/material/styles";
import Header from "./Header";
import TopRatedMovies from "./TopRatedMovies";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const HomeContainer = styled("div")(() => ({
  padding: "5px",
}));

const Home = () => {
  return (
    <HomeContainer>
      <Header />
      <Sidebar />
      <TopRatedMovies />
      <Footer />
    </HomeContainer>
  );
};

export default Home;
