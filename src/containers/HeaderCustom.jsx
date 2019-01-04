import React from "react";
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";

const HeaderPage = () => (
  <Header
    rightLinks={<HeaderLinks />}
    fixed
    color="white"
  />
);

export default HeaderPage;