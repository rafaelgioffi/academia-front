import { lazy } from "react";
import { ROUTES_PATH } from "commons/constants/routes-path";

const RegisterProject = lazy(async () => await import("pages/Projects/Register"));
const EditProject = lazy(async () => await import("pages/Projects/Edit"));
const ListProject = lazy(async () => await import("pages/Projects/List"));

const project = [
  {
    path: `${ROUTES_PATH.project}`,
    component: ListProject,
    exact: true,
  },
  {
    path: `${ROUTES_PATH.project}/novo-projeto`,
    component: RegisterProject,
    exact: true,
  },
  {
    path: `${ROUTES_PATH.project}/:idProject`,
    component: EditProject,
    exact: true,
  },
];

export default project;
