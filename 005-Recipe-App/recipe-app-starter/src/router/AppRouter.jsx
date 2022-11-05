import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/nav/Navbar";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import About from "../pages/about/About";
import Detail from "../pages/detail/Detail";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  const [user, setUser] = useState(false); //henuz logın olmayan bır drumdayız.

  return (
    <div>
      <Navbar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<PrivateRouter user={user} />}>
          <Route path="" element={<Detail />} />
        </Route>
      </Routes>
    </div>
  );
};

export default AppRouter;
