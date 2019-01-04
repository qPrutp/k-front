import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import PharmacyListStyle from "assets/jss/material-dashboard-react/sections/PharmacyListStyle";
import CustomCheckbox from "components/CustomCheckbox/CustomCheckbox";

const listData = [
  "м. Вінниця",
  "м. Вінниця",
  "м. Вінниця",
  "м. Вінниця",
  "м. Вінниця",
  "м. Вінниця"
];

const PharmacyList = ({ classes }) => (
  <div className={classes.root}>
    {listData.map((item, key) => (
      <CustomCheckbox key={key} label={item}/>
    ))}
  </div>
);

export default withStyles(PharmacyListStyle)(PharmacyList);