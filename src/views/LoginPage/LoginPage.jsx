import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";

import loginPageStyle from "assets/jss/material-dashboard-react/pages/loginPage.jsx";

import image from "assets/img/bg4.jpg";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: "cardHidden",
      login: null,
      password: null,
    };
    this.onChangeLogin = this.onChangeLogin.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.getJSSId = this.getJSSId.bind(this);
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
  onChangeLogin(e) {
    this.setState({
      login: e.target.value,
    });
    console.log(this.state.login)
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  getJSSId() {
    const init = {
      method: 'POST',
      body: JSON.stringify({
        mobile: this.state.login,
        password: this.state.password
      }),
      mode: 'no-cors'
    };
    fetch('http://tomcat.konex.com.ua/konex24-online/login', init)
      .then((res) => {
        console.log(res)
      })
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
                      <h4>Увійти до облікового запису</h4>
                    </CardHeader>
                    <CardBody>
                      <CustomInput
                        onChange={(e) => this.onChangeLogin(e)}
                        labelText="Логін / Телефон"
                        id="first"
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
                        onChange={(e) => this.onChangePassword(e)}
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
                      <a href="">Відновити пароль</a>
                    </CardBody>
                    <CardFooter className={classes.cardFooter}>
                      <Button onClick={this.getJSSId} href="/home" simple color="danger" size="lg">
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

export default withStyles(loginPageStyle)(LoginPage);
