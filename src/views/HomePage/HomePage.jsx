import React from "react";
import PropTypes from "prop-types";
import SearchInput from "components/SearchInput/SearchInput";
import SearchFilters from "./sections/SearchFilters";
import Catalog from "./sections/Catalog";
import Products from "./sections/Products";
import withStyles from "@material-ui/core/styles/withStyles";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";

import homePageStyle from "assets/jss/material-dashboard-react/views/homePageStyle.jsx";

const HomePage = ({ classes }) => (
  <React.Fragment>
    <GridContainer justify="center">
      <GridItem xl={6} lg={6} md={6} sm={6} xs={12}>
        <SearchInput />
      </GridItem>
    </GridContainer>
    <GridContainer>
      <GridItem xl={2} lg={3} md={3} sm={6} xs={12}>
        <Catalog />
      </GridItem>
      <GridItem xl={8} lg={6} md={6} sm={12} xs={12}>
        <Products />
      </GridItem>
      <GridItem xl={2} lg={3} md={3} sm={6} xs={12}>
        <SearchFilters />
      </GridItem>
    </GridContainer>
  </React.Fragment>
);

HomePage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(homePageStyle)(HomePage);
