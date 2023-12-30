import Activity from "../components/project/Activity";
import ListProject from "../components/project/ListProject";
import Team from "../components/project/Team";
import Tags from "../components/project/setting/Tags";
import Todo from "../components/project/todo/Todo";

let routesProject = [
  { path: "/", component: ListProject },
  { path: "/activity", component: Activity },
  { path: "/todo", component: Todo },
  { path: "/team", component: Team },
  { path: "/setting/tags", component: Tags },
];

export default routesProject;
