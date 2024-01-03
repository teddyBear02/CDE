import Activity from "../components/project/Activity";
import ListProject from "../components/project/ListProject";
import Team from "../components/project/Team";
import Tags from "../components/project/setting/Tags";
import Privacy from "../components/project/setting/privacy/Privacy";
import ProjectDetail from "../components/project/setting/projectDetail/projectDetail";
import Todo from "../components/project/todo/Todo";

let routesProject = [
  { path: "/", component: ListProject },
  { path: "/activity", component: Activity },
  { path: "/todo", component: Todo },
  { path: "/team", component: Team },
  { path: "/setting/tags", component: Tags },
  { path: "/setting/privacy", component: Privacy },
  { path: "/setting/project-detail", component: ProjectDetail },
];

export default routesProject;
