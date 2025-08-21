import { lazy } from "react";
import { ROUTES_PATH } from "commons/constants/routes-path";

const UserRegister = lazy(async () => await import("pages/Users/Register"));

const users = [
  {
    path: `${ROUTES_PATH.user}/novo-usuario`,
    component: UserRegister,
    exact: true,
  },
];

export default users;