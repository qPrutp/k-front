import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "components/CustomButtons/Button.jsx";

import searchStyle from "assets/jss/material-dashboard-react/components/searchStyle.jsx";

const SearchInput = ({ classes }) => (
  <div className={classes.root}>
    <input
      type="search"
      className={classes.input}
      placeholder="Введіть назву"
    />
    <Button color="danger">Пошук</Button>
  </div>
);

export default withStyles(searchStyle)(SearchInput);