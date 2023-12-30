import Login from "../pages/Login";
import Home from "../pages/Home";
import Project from "../pages/Project";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import ForgotPass from "../pages/ForgotPass";
import NotFound from "../pages/NotFound";

// Public Routes
let publicRoutes = [
  { path: "/", component: Login, notfound: false },
  { path: "/register", component: Register, notfound: false },
  { path: "/forgotpass", component: ForgotPass, notfound: false },
  { path: "/notfound", component: NotFound, notfound: true },
  { path: "/home", component: Home, notfound: false },
  { path: "/project/:id/*", component: Project, notfound: false },
  { path: "/profile", component: Profile, notfound: false },
];

let privateRoutes = [
  { path: "/home", component: Home, notfound: false },
  { path: "/project/*", component: Project, notfound: false },
  { path: "/profile", component: Profile, notfound: false },
];

export { publicRoutes, privateRoutes };
