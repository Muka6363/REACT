import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Instructors from "./pages/Instructors";
import NotFound from "./pages/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/instructors" element={<Instructors />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

// browser router ıle sarmalamamız gerekıyor. browserlar hıstory kullanır. buna ulasmak ıcın bunu kullanıyoruz.
//BrowserRouter
//HTML 5 History API üzerine kurulmuştur. Sayfa yönlendirmelerini tutan ana bileşendir. Route yapısı kullanılacak tüm bileşenler / sayfalar BrowserRouter arasında olmak zorundadır.
//Tanımlanan Yerlere Sayfaların Render Edileceğini Bildiren component. En dış sarmallayıcıdır.
// bazen app.js ya da ındex.js de bu sarmallamayı yapabılırız.
// her sayfada gorunmesını ıstedıgımız compo. routların  dısına yazarız.
// her bır sayfada da <router> <routes> ... </routes> </router>
// Routes: Konum her değiştiğinde, Routes en iyi eşleşmeyi bulmak için childları olan tüm
// alt Route öğelerine bakar ve kullanıcı arabiriminin bu dalını oluşturur.
//Route: Url pathinde gelene göre hangi sayfanın(yani hangi componentin) render edileceğini belirtir
//BrowserRouter ==> dede
// Routes ==> baba
// Route==> çocuk
// Nav-Footer ==> amca

// react-rooter uygulamalarında server-side-routing (SSR) değil client-side-routing (CSR)  yapılıyor. yani ilk seferde bütün bilgiler kullanıcıya geliyor ve onun bilgisayarında parse ediliyor. Her defasında refresh olmuyor.
