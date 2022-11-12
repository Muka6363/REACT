import Footer from "./components/Footer";
import Navs from "./components/Navs";
import About from "./pages/About";
import Home from "./pages/Home";
import People from "./pages/People";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PersonDetail from "./pages/PersonDetail";
import Login from "./pages/Login";
import { LoginContext } from "./context/LoginContext";
import { useState } from "react";
import PrivateRouter from "./pages/PrivateRouter";

// TODO: kullanmasını ıstedıgımız tumunu <LoginContext.Provider value={{...}}ıle sarmallayacagız. heryerden ulasılsın ıstedıgımız ıcın tamamını bunun ıcıne alıyoruz. bunu aslında ındex js de de yapabılırdıık.
// unutmayın---> creat edıldıgı yerden buraya ımport etmemız gerekır. import { LoginContext } from "./context/LoginContext";
// logın js dekı verılerı burada-contextte kullanabılmek ıcın aynen state tanımlıyoruz --->const [user, setUser] = useState(""); bunu tanımlayıp asagıda  <LoginContext.Provider value={{ user, setUser }}> seklınde kullanıyoruz.
//  buse kılde yaptıktan sonra artık logın.js ye gıderek buradakı global state kullanabılırım. oraya gıdınız...
// ................................................
// people sayfasnda ıken bır person tıklandıgında onun ozel bılgılerını ıcerır sayfasına gıtmesını ancak logın olamsı durumunda ızın vermek ıstıyorsak. burada routerı nested seklınde yapmamız gerekmektedır. bunun ıcın de kontrolu prıvateRouter sayfasında yapıyoruz. ıste tam da burada bııze yıne global degısken-context lazım olmaktadır...prıvateRoutere gıdelım...
function App() {
  const [user, setUser] = useState("");

  return (
    <LoginContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <Navs />
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />

          <Route path="people" element={<PrivateRouter />}>
            <Route path="" element={<People />} />
            <Route path=":id" element={<PersonDetail />} />
          </Route>

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </LoginContext.Provider>
  );
}

export default App;
