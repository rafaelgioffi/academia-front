import { lazy } from "react";
import { ROUTES_PATH } from "commons/constants/routes-path";

const Login = lazy(async () => await import('pages/Login'))

const login = [
  {
    path: ROUTES_PATH.home,
    component: Login,
    exact: true,
  },
];

export default login;
