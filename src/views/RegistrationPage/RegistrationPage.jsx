import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Face from "@material-ui/icons/Face";
import People from "@material-ui/icons/People";
import PhoneIphone from "@material-ui/icons/PhoneIphone";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";

import registrationPageStyle from "assets/jss/material-dashboard-react/pages/registrationPage.jsx";

import image from "assets/img/bg4.jpg";
import CustomCheckbox from "components/CustomCheckbox/CustomCheckbox";


class RegistrationPage extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: "cardHidden"
    };
  }
  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    setTimeout(
      function() {
        this.setState({ cardAnimaton: "" });
      }.bind(this),
      700
    );
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: "url(" + image + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center"
          }}
        >
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={4} lg={4} xl={3}>
                <Card className={classes[this.state.cardAnimaton]}>
                  <form className={classes.form}>
                    <CardHeader color="danger" className={classes.cardHeader}>
                      <h4>Вітаємо нового користувача!</h4>
                    </CardHeader>
                    <CardBody>
                      <CustomInput
                        labelText="Логін"
                        id="login"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "text",

                          endAdornment: (
                            <InputAdornment position="end">
                              <People className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      />
                      <CustomInput
                        labelText="Пароль"
                        id="pass"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "password",
                          endAdornment: (
                            <InputAdornment position="end">
                              <Icon className={classes.inputIconsColor}>
                                lock_outline
                              </Icon>
                            </InputAdornment>
                          )
                        }}
                      />
                      <CustomInput
                        labelText="Підтвердження паролю"
                        id="pass"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "password",
                          endAdornment: (
                            <InputAdornment position="end">
                              <Icon className={classes.inputIconsColor}>
                                lock_outline
                              </Icon>
                            </InputAdornment>
                          )
                        }}
                      />
                      <CustomInput
                        labelText="Повне ім'я"
                        id="fullName"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "text",

                          endAdornment: (
                            <InputAdornment position="end">
                              <Face className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      />
                      <CustomInput
                        labelText="Мобільний телефон"
                        id="phoneNumber"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "text",

                          endAdornment: (
                            <InputAdornment position="end">
                              <PhoneIphone className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      />
                      <CustomCheckbox label="Згода користувача"/>
                    </CardBody>
                    <CardFooter className={classes.cardFooter}>
                      <Button simple color="danger" size="lg">
                        Увійти
                      </Button>
                    </CardFooter>
                  </form>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(registrationPageStyle)(RegistrationPage);
