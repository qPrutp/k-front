import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";

import paginationStyle from "assets/jss/material-dashboard-react/components/paginationStyle.jsx";

function Pagination({ ...props }) {
  const { classes, pages, color } = props;
  return (
    <ul className={classes.pagination}>
      {pages.map((prop, key) => {
        const paginationLink = classNames({
          [classes.paginationLink]: true,
          [classes[color]]: prop.active,
          [classes.disabled]: prop.disabled
        });
        return (
          <li className={classes.paginationItem} key={key}>
            {prop.onClick !== undefined ? (
              <Button onClick={prop.onClick} className={paginationLink}>
                {prop.text}
              </Button>
            ) : (
              <Button
                className={paginationLink}
              >
                {prop.text}
              </Button>
            )}
          </li>
        );
      })}
    </ul>
  );
}

Pagination.defaultProps = {
  color: "primary"
};

Pagination.propTypes = {
  classes: PropTypes.object.isRequired,
  pages: PropTypes.arrayOf(
    PropTypes.shape({
      active: PropTypes.bool,
      disabled: PropTypes.bool,
      onClick: PropTypes.func
    })
  ).isRequired,
};

export default withStyles(paginationStyle)(Pagination);
