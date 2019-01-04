import { primaryColor, dangerColor } from "assets/jss/material-dashboard-react.jsx";

const checkboxAdnRadioStyle = {
  checked: {
    color: dangerColor + "!important"
  },
  checkedIcon: {
    width: "16px",
    height: "16px",
    border: "1px solid rgba(0, 0, 0, .54)",
    borderRadius: "3px",
  },
  uncheckedIcon: {
    width: "0px",
    height: "0px",
    padding: "8px",
    border: "1px solid rgba(0, 0, 0, .54)",
    borderRadius: "3px",
  },
  radio: {
    color: dangerColor + "!important"
  },
  radioChecked: {
    width: "16px",
    height: "16px",
    border: "1px solid " + dangerColor,
    borderRadius: "50%"
  },
  radioUnchecked: {
    width: "0px",
    height: "0px",
    padding: "8px",
    border: "1px solid rgba(0, 0, 0, .54)",
    borderRadius: "50%",
  }
};

export default checkboxAdnRadioStyle;
