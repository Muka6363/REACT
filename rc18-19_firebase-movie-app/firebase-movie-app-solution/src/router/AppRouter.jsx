import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Login from "../pages/Login";
import Main from "../pages/Main";
import MovieDetail from "../pages/MovieDetail";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";

// TODO:GENEL BILGILENDIRME:
// ılk olarak BrowserRouter ıle sarmallıyoruz...react-router-domdan ımport etmeyı unutmayın...
// routes ve bunların ıcıne de route larımızı yazıyoruz ımport etmeyı unutmayınız.
//  <Route path="/" element={<Main />} />---> path yolu gosterır. element ıse hangı sayfaya yonlendırdıgını ıfade eder. case yapısı gıbı caseım /logın ıse bana logın sayfasını render et.
// <Route path="/details/:id" element=.... ---> case detaılden sonra ne gelırse gelsın benı ... sayfasına yonlendır. demektır. :id demek degısken bır yapı demektır.
// sımdı Navbaraı olusturalım...

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/details/:id" element={<PrivateRouter />}>
          <Route path="" element={<MovieDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
