import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
import Radio from "@material-ui/core/Radio";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Dropdup from "containers/CustomDropdown";
import Muted from "components/Typography/Muted";
import PharmacyList from "./PharmacyList";

import SearchFiltersStyle from "assets/jss/material-dashboard-react/sections/SearchFiltersStyle";

class SearchFilters extends React.Component {
  state = {
    selectedName: "a",
    selectedGroup: "a"
  };
  handleChangeName = event => {
    this.setState({ selectedName: event.target.value });
  };
  handleChangeGroup = event => {
    this.setState({ selectedGroup: event.target.value });
  };

  render() {
    const { classes } = this.props;
    let radioUnchecked = classes.radioUnchecked;
    return (
      <div className={classes.root}>
        <div className={classes.filters}>
          <Card>
            <CardHeader color="danger">
              Параметри пошуку
            </CardHeader>
            <CardBody>
              <div>
                <p>Оберіть назву</p>
                <div>
                  <FormControlLabel control={
                    <Radio
                      checked={this.state.selectedName === "a"}
                      onChange={this.handleChangeName}
                      value="a"
                      name="search radios"
                      aria-label="A"
                      icon={<FiberManualRecord className={classes.radioUnchecked}/>}
                      checkedIcon={<FiberManualRecord className={classes.radioChecked}/>}
                      classes={{
                        checked: classes.radio
                      }}
                    />} label={<Muted>Назва препарату</Muted>}
                  />
                  <FormControlLabel control={
                    <Radio
                      checked={this.state.selectedName === "b"}
                      onChange={this.handleChangeName}
                      value="b"
                      name="search radios"
                      aria-label="B"
                      icon={<FiberManualRecord className={classes.radioUnchecked}/>}
                      checkedIcon={<FiberManualRecord className={classes.radioChecked}/>}
                      classes={{
                        checked: classes.radio
                      }}
                    />} label={<Muted>Діюча речовина</Muted>}
                  />
                </div>
              </div>
              <p>Виберіть групу товарів</p>
              <div>
                <FormControlLabel control={
                  <Radio
                    checked={this.state.selectedGroup === "a"}
                    onChange={this.handleChangeGroup}
                    value="a"
                    name="radio button demo"
                    aria-label="A"
                    icon={<FiberManualRecord className={classes.radioUnchecked}/>}
                    checkedIcon={<FiberManualRecord className={classes.radioChecked}/>}
                    classes={{
                      checked: classes.radio
                    }}
                  />} label={<Muted>Всі товари</Muted>}
                />
                <FormControlLabel control={
                  <Radio
                    checked={this.state.selectedGroup === "b"}
                    onChange={this.handleChangeGroup}
                    value="b"
                    name="radio button demo"
                    aria-label="B"
                    icon={<FiberManualRecord className={radioUnchecked}/>}
                    checkedIcon={<FiberManualRecord className={classes.radioChecked}/>}
                    classes={{
                      checked: classes.radio
                    }}
                  />} label={<Muted>Не рецептурні</Muted>}
                />
                <FormControlLabel control={
                  <Radio
                    checked={this.state.selectedGroup === "c"}
                    onChange={this.handleChangeGroup}
                    value="c"
                    name="radio button demo"
                    aria-label="C"
                    icon={<FiberManualRecord className={classes.radioUnchecked}/>}
                    checkedIcon={<FiberManualRecord className={classes.radioChecked}/>}
                    classes={{
                      checked: classes.radio
                    }}
                  />} label={<Muted>Рецептурні</Muted>}
                />
              </div>
              <div>
                <Dropdup/>
              </div>
              <div>
                <div className={classes.root}>
                  <PharmacyList/>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    );
  }
}

export default withStyles(SearchFiltersStyle)(SearchFilters);