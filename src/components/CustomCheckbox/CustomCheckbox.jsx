import React from 'react';
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/styles/withStyles";
import Checkbox from "@material-ui/core/Checkbox";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Check from "@material-ui/icons/Check";
import checkboxAdnRadioStyle from "assets/jss/material-dashboard-react/checkboxAdnRadioStyle.jsx";
import Muted from "../Typography/Muted";

class CustomCheckbox extends React.Component{
  state = {
    checked: [],
  };
  handleToggle = value => () => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked,
    });
  };
  render(){
    const { classes, label } = this.props;
    return (
      <div>
        <FormControlLabel
          control={<Checkbox
            tabIndex={-1}
            onClick={this.handleToggle(1)}
            checkedIcon={<Check className={classes.checkedIcon}/>}
            icon={<Check className={classes.uncheckedIcon}/>}
            classes={{
              checked: classes.checked,
            }}
          />}
          label={<Muted>{label}</Muted>}
        />
      </div>
    );
  }
}

CustomCheckbox.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(checkboxAdnRadioStyle)(CustomCheckbox);