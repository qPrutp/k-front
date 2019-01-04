import Search from "@material-ui/icons/Search";
import HomePage from "views/HomePage/HomePage.jsx";
import LoginPage from 'views/LoginPage/LoginPage';
import RegistrationPage from 'views/RegistrationPage/RegistrationPage';
import ReviewPage from 'views/ReviewPage/ReviewPage'

const appRoutes = [
  {
    path: "/home",
    sidebarName: "Пошук",
    navbarName: "Material Dashboard",
    icon: Search,
    component: HomePage
  },
  {
    path: "/login-page",
    sidebarName: "login",
    navbarName: "Material Dashboard",
    icon: Search,
    component: LoginPage
  },
  {
    path: "/registration-page",
    sidebarName: "registration",
    navbarName: "Material Dashboard",
    icon: Search,
    component: RegistrationPage
  },
  {
    path: "/review-page",
    sidebarName: "review",
    navbarName: "Material Dashboard",
    icon: Search,
    component: ReviewPage
  },
  // { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default appRoutes;
