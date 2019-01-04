import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Popover from "@material-ui/core/Popover";
// core components
import Button from "components/CustomButtons/Button.jsx";

import popoverStyles from "assets/jss/material-dashboard-react/popoverStyles.jsx";

class Popovers extends React.Component {
  anchorElRight = null;

  constructor(props) {
    super(props);
    this.state = {
      openRight: false
    };
  }
  handleClosePopover(state) {
    this.setState({
      [state]: false
    });
  }
  handleClickButton(state) {
    this.setState({
      [state]: true
    });
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Button
          buttonRef={node => {
            this.anchorElRight = node;
          }}
          onClick={() => this.handleClickButton("openRight")}
        >
          On right
        </Button>
        <Popover
          classes={{
            paper: classes.popover
          }}
          open={this.state.openRight}
          anchorEl={this.anchorElRight}
          anchorReference={"anchorEl"}
          onClose={() => this.handleClosePopover("openRight")}
          anchorOrigin={{
            vertical: "center",
            horizontal: "right"
          }}
          transformOrigin={{
            vertical: "center",
            horizontal: "left"
          }}
        >
          <h3 className={classes.popoverHeader}>Popover on right</h3>
          <div className={classes.popoverBody}>
            Here will be some very useful information about his popover.
          </div>
        </Popover>
      </div>
    );
  }
}

export default withStyles(popoverStyles)(Popovers);