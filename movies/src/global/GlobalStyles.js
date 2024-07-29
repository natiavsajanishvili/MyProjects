import { createGlobalStyle } from "styled-components";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const GlobalStyles = createGlobalStyle`


  *
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
const ButtonYellow = styled("button")(({ theme }) => ({
  width: "190px",
  height: "57px",
  fontWeight: "800",
  fontSize: "18px",
  lineHeight: "18px",
  fontFamily: "Lato, sans-serif",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "15px",
  transform: "translateY(-50%)",
  backgroundColor: "#f8b319",
  color: "#000000",
  border: "none",
  padding: "10px 20px",
  cursor: "pointer",
  [theme.breakpoints.down("md")]: {
    width: "110px",
    height: "40px",
    fontSize: "12px",
  },
}));

const ButtonWhite = styled("button")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
  width: "160px",
  height: "57px",
  transform: "translateY(-50%)",
  backgroundColor: "rgba(249, 249, 249, 0.2)",
  border: "none",
  cursor: "pointer",
  borderRadius: "15px",
  fontWeight: "800",
  fontSize: "18px",
  lineHeight: "18px",
  fontFamily: "Lato, sans-serif",
  color: "rgb(249, 249, 249)",
  [theme.breakpoints.down("md")]: {
    width: "100px",
    height: "40px",
    fontSize: "12px",
  },
}));

const Container = styled(Box)(({ theme }) => ({
  marginLeft: theme.spacing(2),
  marginRight: theme.spacing(2),
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(4),
  },
  [theme.breakpoints.up("md")]: {
    marginLeft: theme.spacing(8),
    marginRight: theme.spacing(8),
  },
}));

const GlobalLayout = ({ children }) => {
  return <Container>{children}</Container>;
};

export { ButtonWhite, ButtonYellow, GlobalLayout };
