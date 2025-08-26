import { lazy } from "react";
import { ROUTES_PATH } from "commons/constants/routes-path";
import EditUser from "pages/Users/Edit/EditUser";

const UserRegister = lazy(async () => await import("pages/Users/Register"));

const users = [
  {
    path: `${ROUTES_PATH.user}/novo-usuario`,
    component: UserRegister,
    exact: true,
  },  
    {
      path: `${ROUTES_PATH.user}/:idUser`,
      component: EditUser,
      exact: true,
    },
];

export default users;