import { lazy } from "react";
import { ROUTES_PATH } from "../commons/constants/routes-path";

const Home = lazy(async () => await import('../Home'))

const home = [
  {
    path: ROUTES_PATH.home,
    component: Home,
    exact: true,
  },
];

export default home;
