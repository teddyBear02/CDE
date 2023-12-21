import Activity from "./Activity";
import ListProject from "./ListProject";
import Team from "./Team";
import Todo from "./Todo";

let routesProject = [
  { path: "/", component: ListProject },
  { path: "/activity", component: Activity },
  { path: "/todo", component: Todo },
  { path: "/team", component: Team },
];

export default routesProject;
