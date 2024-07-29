import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import slide1 from "../assets/images/slide1.png";
import slide2 from "../assets/images/slide2.webp";
import slide3 from "../assets/images/slide3.png";
import slide4 from "../assets/images/slide4.png";
import { styled } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import { ButtonWhite, ButtonYellow } from "../global/GlobalStyles";

const SliderSection = styled("div")(({ theme }) => ({
  width: "770px",
  height: "350px",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    height: "auto",
  },
}));

const SliderContainer = styled("div")(({ theme }) => ({
  position: "relative",
  width: "770px",
  height: "350px",
  backgroundColor: "rgba(22, 24, 30, 0.5)",
  marginBottom: "130px",
  borderRadius: "20px",
  overflow: "hidden",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    height: "auto",
  },
}));

const SliderImgDiv = styled("div")(() => ({
  height: "100%",
  width: "100%",
}));

const SliderImg = styled("img")(() => ({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "20px",
}));

const Slider = () => {
  return (
    <SliderSection className="slider">
      <SliderContainer className="sliderContainer">
        <Carousel showThumbs={false} autoPlay infiniteLoop>
          <SliderImgDiv className="sliderImgDiv">
            <SliderImg src={slide1} alt="Slide 1" />
          </SliderImgDiv>
          <SliderImgDiv className="sliderImgDiv">
            <SliderImg src={slide2} alt="Slide 2" />
          </SliderImgDiv>
          <SliderImgDiv className="sliderImgDiv">
            <SliderImg src={slide3} alt="Slide 3" />
          </SliderImgDiv>
          <SliderImgDiv className="sliderImgDiv">
            <SliderImg src={slide4} alt="Slide 4" />
          </SliderImgDiv>
        </Carousel>

        <ButtonWhite
          className="watchlist-btn"
          style={{ top: "80%", left: "5%", position: "absolute" }}
        >
          {<AddIcon />}
          Watchlist
        </ButtonWhite>
        <ButtonYellow
          className="watch-now-btn"
          style={{ top: `80%`, left: `70%`, position: "absolute" }}
        >
          Watch Now
        </ButtonYellow>
      </SliderContainer>
    </SliderSection>
  );
};

export default Slider;
