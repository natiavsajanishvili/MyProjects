import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchMovies } from "../slices/movieSlice";
import {
  Box,
  CircularProgress,
  MenuItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import { InputBase } from "@mui/material";

const StyledSearchDiv = styled("div")(({ theme }) => ({
  position: "relative",
  maxWidth: "315px",
  height: "57px",
  display: "flex",
  alignItems: "center",
  padding: "16px 25px",
  border: "1px solid rgba(249, 249, 249, 0.1)",
  borderRadius: "12px",
  backgroundColor: "#21242d",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(0),
    paddingLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(0, 0),
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(6)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    height: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  [theme.breakpoints.down("md")]: {
    // width: "500px",
  },
}));

const StyledMenu = styled("div")(() => ({
  position: "absolute",
  left: 0,
  top: "56px",
  right: 0,
  zIndex: "999999",
}));

const StyledListItem = styled(MenuItem)(() => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  width: "315px",
  cursor: "pointer",
  background: "rgba(0, 0, 0, 0.5)",
  borderRadius: "5px",
  padding: "2px",
  borderBottom: "1px solid #ccc",
}));

const MovieTitle = styled(Link)(() => ({
  textDecoration: "none",
  width: "100%",
}));

const StyledListItemAvatar = styled(ListItemAvatar)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    display: "block",
    textAlign: "left",
  },
}));

const StyledAvatar = styled(Avatar)(() => ({
  height: "150px",
  width: "130px",
  borderRadius: "5px",
}));

const StyledListItemText = styled(ListItemText)(() => ({
  color: "#f8b319",
  fontWeight: "800",
  fontSize: "10px",
  lineHeight: "10px",
  marginLeft: "5px",
  whiteSpace: "normal",
}));

const Search = () => {
  const dispatch = useDispatch();
  const { movies, status } = useSelector((state) => state.movies);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const inputRef = useRef(null);
  const searchWrapperRef = useRef(null);

  useEffect(() => {
    if (query.length > 2) {
      dispatch(fetchMovies(query));
    }
  }, [query, dispatch]);

  useEffect(() => {
    setResults(movies);
  }, [movies]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <StyledSearchDiv className="searchDiv" ref={searchWrapperRef}>
      <SearchIconWrapper className="wrapper">
        <SearchIcon className="searchIcon" sx={{ color: "#f9f9f9" }} />
      </SearchIconWrapper>
      <StyledInputBase
        className="input"
        placeholder="Search for movies..."
        sx={{ color: "#f9f9f9" }}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        inputRef={inputRef}
      />
      {status === "loading" && (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          position="absolute"
          top="60px"
          left="0"
          right="0"
          zIndex="9999"
          height="100px"
        >
          <CircularProgress />
        </Box>
      )}
      {query.length > 2 && (
        <StyledMenu>
          {results.length > 0 ? (
            results.map((movie) => (
              <StyledListItem key={movie.imdbID}>
                <MovieTitle to={`/movie/${movie.imdbID}`}>
                  <StyledListItemAvatar>
                    <StyledAvatar alt={movie.Title} src={movie.Poster} />
                    <StyledListItemText primary={movie.Title} />
                  </StyledListItemAvatar>
                </MovieTitle>
              </StyledListItem>
            ))
          ) : (
            <MenuItem disabled>
              <ListItemText primary="No results found" />
            </MenuItem>
          )}
        </StyledMenu>
      )}
    </StyledSearchDiv>
  );
};

export default Search;
