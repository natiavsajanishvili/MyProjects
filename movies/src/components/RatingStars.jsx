import React from "react";
import { Box } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const RatingStars = ({ rating }) => {
  if (!rating) return null;

  const roundingRating = Math.round(parseFloat(rating) / 2);
  return (
    <Box display="flex">
      {[...Array(5)].map((_, index) =>
        index < roundingRating ? (
          <StarIcon key={index} color="primary" />
        ) : (
          <StarBorderIcon key={index} color="primary" />
        )
      )}
    </Box>
  );
};

export default RatingStars;
