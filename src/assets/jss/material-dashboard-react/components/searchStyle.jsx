const searchStyle = {
  root: {
    display: "flex",
    paddingBottom: "15px"
  },
  input: {
    width: "100%",
    paddingLeft: "15px",
    boxShadow: "0 2px 2px 0 rgba(153, 153, 153, 0.14), 0 3px 1px -2px rgba(153, 153, 153, 0.2), 0 1px 5px 0 rgba(153, 153, 153, 0.12)",
    margin: ".3125rem 1px",
    border: "1px solid #9e9e9e9e",
    borderRadius: "3px",
    "&:focus": {
      border: "1px solid #f44336",
    },
  },
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontWeight: "300",
  lineHeight: "1.5em",
  fontSize: "16px",
};

export default searchStyle;