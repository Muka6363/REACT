import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./../components/nav/Navbar";
import { GlobalStyles } from "../components/globalStyles/GlobalStyles";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import About from "./../pages/about/About";
import Detail from "./../pages/detail/Detail";
import PrivateRouter from "./PrivateRouter";

// About sayfasına gırebılmesı ıcın ızınlı olması gerekıyorsa, route ıcınde yenı bır route acıyoruz. about tıklandıgındanda prıvateRoutere yonlendıırıyoruz. gırıs ızının olup olmadıgı sorgulaması yapmak ıcın . varsa ıcte yazdıgımız route gore o sayfaya gıtmesıne ızın verıyoruz. aynısını detail ıcın de yazpıyoruz.

const AppRouter = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="about" element={<PrivateRouter />}>
          <Route path="" element={<About />} />
        </Route>
        <Route path="detail" element={<PrivateRouter />}>
          <Route path="" element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
