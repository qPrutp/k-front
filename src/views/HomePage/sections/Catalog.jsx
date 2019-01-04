import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
import Popover from "@material-ui/core/Popover";
import CatalogStyle from "assets/jss/material-dashboard-react/sections/CatalogStyle";
import Button from "components/CustomButtons/Button.jsx";


const categories = [
  "Мама та маля",
  "Лікарські засоби та БАДи",
  "Товари медичного призначення",
  "Краса та гігієна",
  "Вітаміни та мінерали",
  "Напої",
  "Контрацепція",
  "Сезонні пропозиції",
  "Інші"
];

class Catalog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openRight: false
    }
  }
  handleClosePopover(state) {
    this.setState({
      [state]: false
    });
  }
  handleClickButton(state) {
    // this.setState({
    //   [state]: true
    // });
    fetch("http://tomcat.konex.com.ua/konex24-online/home/catalog?catId=0",{method: "GET", mode: "no-cors"})
      .then((res)=>console.log(res))
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Card>
          <CardHeader color="danger">
            Каталог
          </CardHeader>
          <CardBody>
              {
                categories.map((category, key) => (
                  <div key={key}>
                    <Button
                      color="white"
                      fullWidth
                      buttonRef={node => {
                        this.anchorElRight = node;
                      }}
                      onClick={() => this.handleClickButton("openRight")}
                    >
                      <span className={classes.category}>{category}</span>
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
                      <h3 className={classes.popoverHeader}>{category}</h3>
                      {/*<div className={classes.popoverBody}>*/}
                        {/*Here will be some very useful information about his popover.*/}
                      {/*</div>*/}
                    </Popover>
                  </div>
                ))
              }
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default withStyles(CatalogStyle)(Catalog);