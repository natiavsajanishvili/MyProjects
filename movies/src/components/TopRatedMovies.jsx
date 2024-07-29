import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { fetchTopRatedMovies, fetchMovieDetails } from "../slices/movieSlice";
import RatingStars from "./RatingStars";
import { Box, CircularProgress } from "@mui/material";

const TopRatedMoviesTitle = styled("h2")(() => ({
  margin: "220px 0 60px 0",
  fontFamily: "Lato, sans-serif",
  fontWeight: "800",
  fontSize: "48px",
  lineHeight: "48px",
  color: "inherit",
}));

const TopRatedSection = styled("section")(() => ({
  width: "100%",
  maxWidth: "1440px",
  margin: "0 auto",
}));

const TopRatedCardContainer = styled("ul")(() => ({
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  alignItems: "center",
  gap: "30px",
}));

const TopRatedCard = styled("li")(() => ({
  position: "relative",
  width: "300px",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#8a8d8f",
  borderRadius: "20px 20px 0 0",
  boxShadow:
    "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
}));

const TopRatedMoviePoster = styled("img")(() => ({
  width: "100%",
  height: "60%",
  borderRadius: "20px 20px 0 0",
  objectFit: "cover",
}));

const PosterTitleContainer = styled("div")(() => ({
  padding: "5px",
}));

const TopRatedMovieTitle = styled("h2")(() => ({
  marginBottom: "6px",
  fontFamily: "Lato, sans-serif",
}));

const Rating = styled("div")(() => ({
  position: "absolute",
  top: 0,
  right: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "40px",
  width: "65px",
  backgroundColor: "#f8b319",
  color: "black",
  fontFamily: `"Lato",sans-serif`,
  fontWeight: "400",
  fontSize: "21px",
  borderRadius: "0 20px",
}));

const TopRatedDescription = styled("p")(() => ({
  fontFamily: "Lato, sans-serif",
  color: "#f9f9f9",
}));

const maxlength = 100;

const truncateDescription = (desc) => {
  return desc.length < maxlength ? desc : desc.slice(0, maxlength) + "...";
};

const TopRatedMovies = () => {
  const dispatch = useDispatch();
  const { topRatedMovies, movieDetails, status, error } = useSelector(
    (state) => state.movies
  );

  useEffect(() => {
    dispatch(fetchTopRatedMovies());
  }, [dispatch]);

  useEffect(() => {
    if (topRatedMovies.length > 0) {
      topRatedMovies.slice(0, 4).forEach((movie) => {
        if (!movieDetails[movie.imdbID]) {
          dispatch(fetchMovieDetails(movie.imdbID));
        }
      });
    }
  }, [dispatch, topRatedMovies, movieDetails]);

  if (status === "loading") {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  const sliced = topRatedMovies.slice(0, 4);

  return (
    <TopRatedSection>
      <TopRatedMoviesTitle>Top Rated Movies</TopRatedMoviesTitle>
      <TopRatedCardContainer>
        {sliced.map((movie) => {
          const movieDetail = movieDetails[movie.imdbID] || {};
          return (
            <TopRatedCard key={movie.imdbID}>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to={`/movie/${movieDetail.imdbID}`}
              >
                <TopRatedMoviePoster
                  src={movieDetail.Poster}
                  alt={movieDetail.Title}
                />
                <PosterTitleContainer>
                  <TopRatedMovieTitle>{movieDetail.Title}</TopRatedMovieTitle>
                  <RatingStars rating={movieDetail.imdbRating} />
                  <p>{movieDetail.Year}</p>
                  <TopRatedDescription>
                    {movieDetail.Plot
                      ? truncateDescription(movieDetail.Plot)
                      : "No description available."}
                  </TopRatedDescription>
                  <Rating>{movieDetail.imdbRating}</Rating>
                </PosterTitleContainer>
              </Link>
            </TopRatedCard>
          );
        })}
      </TopRatedCardContainer>
    </TopRatedSection>
  );
};

export default TopRatedMovies;
