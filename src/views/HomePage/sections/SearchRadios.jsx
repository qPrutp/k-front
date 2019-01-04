import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";

import Radio from "@material-ui/core/Radio";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import SearchRadiosStyle from "assets/jss/material-dashboard-react/sections/SearchRadiosStyle";

class SearchRadios extends React.Component {
  state = {
    selectedValue: "a"
  };
  handleChange = event => {
    this.setState({ selectedValue: event.target.value });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <FormControlLabel control={
          <Radio
            checked={this.state.selectedValue === "a"}
            onChange={this.handleChange}
            value="a"
            name="search radios"
            aria-label="A"
            icon={<FiberManualRecord className={classes.radioUnchecked}/>}
            checkedIcon={<FiberManualRecord className={classes.radioChecked}/>}
            classes={{
              checked: classes.radio
            }}
          />} label="Назва препарату"
        />

        <FormControlLabel control={
          <Radio
            checked={this.state.selectedValue === "b"}
            onChange={this.handleChange}
            value="b"
            name="search radios"
            aria-label="B"
            icon={<FiberManualRecord className={classes.radioUnchecked}/>}
            checkedIcon={<FiberManualRecord className={classes.radioChecked}/>}
            classes={{
              checked: classes.radio
            }}
          /> } label="Діюча речовина"
        />
      </div>
    );
  }
}

export default withStyles(SearchRadiosStyle)(SearchRadios);