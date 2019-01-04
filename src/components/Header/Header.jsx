import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";
import { Home, LocalShipping, Portrait, ThumbUp } from "@material-ui/icons";

import Menu from "@material-ui/icons/Menu";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import HeaderLinks from "./HeaderLinks";
import Button from "components/CustomButtons/Button";

import headerStyle from "assets/jss/material-dashboard-react/components/headerStyle.jsx";

function Header({ ...props }) {
  const { classes, color } = props;
  const appBarClasses = classNames({
    [" " + classes[color]]: color
  });
  return (
    <AppBar className={classes.appBar + appBarClasses}>
      <Toolbar className={classes.container}>
        <div className={classes.logo}>
          <img src={require("assets/img/reactlogo.png")} alt="" width="160px"/>
        </div>
        <div className={classes.flex}>

          <List className={classes.list}>
            <ListItem className={classes.listItem}>
              <Button
                href="\home"
                color="transparent"
                className={classes.navLink}
              >
                <Home className={classes.icons}/> Головна
              </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Button
                href="/review-page"
                color="transparent"
                className={classes.navLink}
              >
                <ThumbUp className={classes.icons}/> Відгуки
              </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Button
                href="/"
                color="transparent"
                className={classes.navLink}
              >
                <LocalShipping className={classes.icons}/> Доставка
              </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Button
                href="/about-us"
                color="transparent"
                className={classes.navLink}
              >
                <Portrait className={classes.icons}/> Про нас
              </Button>
            </ListItem>
          </List>



        </div>
        <Hidden smDown implementation="css">
          <HeaderLinks/>
        </Hidden>
        <Hidden mdUp implementation="css">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={props.handleDrawerToggle}
          >
            <Menu/>
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"])
};

export default withStyles(headerStyle)(Header);
