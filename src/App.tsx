import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Project from "./Pages/Project";
import Register from "./Pages/Register";
import Profile from "./Pages/Profile";
import { Outlet, Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  return (
    <>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
