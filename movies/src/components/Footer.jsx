import React from "react";
import { styled } from "@mui/material/styles";

const Footer = () => {
  const FooterDiv = styled("footer")(() => ({
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "40px",
  }));
  const FooterText = styled("h2")(() => ({
    width: "100%",
    maxWidth: "1440px",
    textAlign: "center",
    fontFamily: "Luckiest Guy",
    fontWeight: 400,
    fontSize: "32px",
    lineHeight: "32px",
    color: " #f8b319",
  }));

  return (
    <FooterDiv>
      <FooterText>
        2024. All rights recerved, developed by Natia Avsajanishvili
      </FooterText>
    </FooterDiv>
  );
};

export default Footer;
