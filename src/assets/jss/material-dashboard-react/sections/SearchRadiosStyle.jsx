import { primaryColor, dangerColor } from "assets/jss/material-dashboard-react.jsx";

const SearchRadiosStyle = {
  root: {
    display: "flex",
    justifyContent: "center",
  },
  radio: {
    color: dangerColor + "!important"
  },
  radioChecked: {
    width: "14px",
    height: "14px",
    border: "1px solid " + dangerColor,
    borderRadius: "50%"
  },
  radioUnchecked: {
    width: "0px",
    height: "0px",
    padding: "7px",
    border: "1px solid rgba(0, 0, 0, .54)",
    borderRadius: "50%",
  }
};

export default SearchRadiosStyle;