import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { publicRoutes } from "./routes";

function App() {
  return (
    <Router>
      <Routes>
        {publicRoutes.map((route, index) => {
          const Page = route.component;
          if (route.path) {
            return <Route key={index} path={route.path} element={<Page />} />;
          } else if (!route.path) {
            return <Route key={index} path={"/notfound"} element={<Page />} />;
          }
        })}
      </Routes>
    </Router>
  );
}

export default App;
