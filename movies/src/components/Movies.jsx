import Review from "../assets/images/Review.png";
import ReviewHalf from "../assets/images/ReviewHalf.png";
import { styled } from "@mui/material/styles";

const MoviesPosterContainer = styled("div")(({ theme }) => ({
  display: "flex",
  gap: "30px",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    flexWrap: "wrap",
    gap: "10px",
  },
}));

const PosterCardContainer = styled("div")(({ theme }) => ({
  width: "237px",
  height: "298px",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  borderRadius: "20px",
  overflow: "hidden",
  position: "relative",
  [theme.breakpoints.down("md")]: {
    height: "auto",
  },
}));

const Linear = styled("div")({
  width: "237px",
  height: "298px",
  borderRadius: "20px",
  background: `linear-gradient(
      0deg,
      rgba(22, 24, 30, 0.4),
      rgba(22, 24, 30, 0.4)
    ),
    linear-gradient(
      180deg,
      rgba(22, 24, 30, 0) 0%,
      rgba(22, 24, 30, 0.7) 65.28%
    )`,
});

const PosterText = styled("div")(({ theme }) => ({
  padding: "20px 10px 10px",
  position: "absolute",
  bottom: "0",
  left: "0",
  right: "0",
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(1),
  },
}));

const CardTitle = styled("h2")(() => ({
  fontWeight: "800",
  fontSize: "24px",
  lineHeight: "24px",
  fontFamily: "Lato, sans-serif",
  color: "rgba(249, 249, 249, 1) !important",
  marginBottom: "12px",
}));

const ReviewStar = styled("img")(() => ({
  marginBottom: "127px",
}));

const PosterPara = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "14px",
}));

const PosterP = styled("p")(() => ({
  fontWeight: "700",
  fontSize: "18px",
  lineHeight: "18px",
  color: "rgba(249, 249, 249, 0.7)",
  fontFamily: "Lato, sans-serif",
}));

const PosterButtons = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
}));

const PlusButton = styled("button")(() => ({
  width: "57px",
  height: "57px",
  borderRadius: "15px",
  padding: "10px",
  backgroundColor: "rgba(249, 249, 249, 0.2)",
  cursor: "pointer",
  color: "white",
  fontSize: "28px",
  fontWeight: "800",
  textAlign: "center",
  border: "none",
  outline: "none",
}));

const MoreInfoButton = styled("button")(() => ({
  width: "150px",
  height: "57px",
  borderRadius: "15px",
  backgroundColor: "#f8b319",
  color: "#000000",
  fontWeight: "800",
  fontSize: "18px",
  lineHeight: "18px",
  fontFamily: "Lato, sans-serif",
  border: "none",
}));

const Movies = () => {
  return (
    <MoviesPosterContainer className="movies-poster-container">
      <PosterCardContainer
        className="poster-card-container firstCard"
        style={{
          backgroundImage:
            'url("https://fr.web.img3.acsta.net/r_1920_1080/pictures/21/05/12/16/22/0714838.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Linear className="linear">
          <PosterText className="poster-text">
            <CardTitle className="card-title">Loki</CardTitle>
            <ReviewStar className="reviewStar" src={Review} alt="review" />
            <PosterPara className="poster-para">
              <PosterP className="posterP">6 Ep</PosterP>
              <PosterP className="posterP">Superhero</PosterP>
            </PosterPara>
            <PosterButtons className="posterButtons">
              <PlusButton className="plusButton">+</PlusButton>
              <MoreInfoButton className="moreInfoButton">
                More info
              </MoreInfoButton>
            </PosterButtons>
          </PosterText>
        </Linear>
      </PosterCardContainer>

      <PosterCardContainer
        className="poster-card-container secondCard"
        style={{
          backgroundImage: `url("https://images.newscientist.com/wp-content/uploads/2019/05/03160545/chernobylpresspack6.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Linear className="linear">
          <PosterText className="poster-text">
            <CardTitle className="card-title">Chernobyl</CardTitle>
            <ReviewStar className="reviewStar" src={Review} alt="review" />
            <PosterPara className="poster-para">
              <PosterP className="posterP">5 Ep</PosterP>
              <PosterP className="posterP">Mini Series</PosterP>
            </PosterPara>
            <PosterButtons className="posterButtons">
              <PlusButton className="plusButton">+</PlusButton>
              <MoreInfoButton className="moreInfoButton">
                More info
              </MoreInfoButton>
            </PosterButtons>
          </PosterText>
        </Linear>
      </PosterCardContainer>

      <PosterCardContainer
        className="poster-card-container thirdCard"
        style={{
          backgroundImage: `url("https://cdn.europosters.eu/image/750/posters/rick-morty-ship-i35959.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Linear className="linear">
          <PosterText className="poster-text">
            <CardTitle className="card-title">Rick and Morty</CardTitle>
            <ReviewStar className="reviewStar" src={ReviewHalf} alt="review" />
            <PosterPara className="poster-para">
              <PosterP className="posterP">49 Ep</PosterP>
              <PosterP className="posterP">Fantasy</PosterP>
            </PosterPara>
            <PosterButtons className="posterButtons">
              <PlusButton className="plusButton">+</PlusButton>
              <MoreInfoButton className="moreInfoButton">
                More info
              </MoreInfoButton>
            </PosterButtons>
          </PosterText>
        </Linear>
      </PosterCardContainer>
    </MoviesPosterContainer>
  );
};

export default Movies;
