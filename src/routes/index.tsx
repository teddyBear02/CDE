import Login from "../Pages/Login";
import Home from "../Pages/Home";
import Project from "../Pages/Project";
import Register from "../Pages/Register";
import Profile from "../Pages/Profile";
import ForgotPass from "../Pages/ForgotPass";
import NotFound from "../Pages/NotFound";

// Public Routes
let publicRoutes = [
  { path: "/", component: Login, notfound: false },
  { path: "/register", component: Register, notfound: false },
  { path: "/forgotpass", component: ForgotPass, notfound: false },
  { path: "/notfound", component: NotFound, notfound: true },
  { path: "/home", component: Home, notfound: false },
  { path: "/project/*", component: Project, notfound: false },
  { path: "/profile", component: Profile, notfound: false },
];

let privateRoutes = [
  { path: "/home", component: Home, notfound: false },
  { path: "/project/*", component: Project, notfound: false },
  { path: "/profile", component: Profile, notfound: false },
];

export { publicRoutes, privateRoutes };
