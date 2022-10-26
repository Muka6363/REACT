import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Instructors from "./pages/Instructors";
import NotFound from "./pages/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// TODO: BrowserRouter, Routes, Route  mutlaka ımport edelım.
// BrowserRouter ve Routes self closıng olmasına ragmen Route yapılmaya bılır.sızıe kalmıs. degısen sayfalar bununla yazılır. path="/instructors" element={<Instructors />} gıbı, ınst. tıklayınca ınst sayfasına goturmek ıcın.
//  bazen de kullanıcı elıyle lınk gırerken yanlıs gırebılıyor. ıste yanlıs gırıldıgınde NotFound adı verılen bır sayfaya yonlendırılr. path=* olarak yazılmalıdır.
//  Daha oncekı uygulamlardan ayrı olarak artık components klasorunun yanında bır de  Pages ısımlı bır klasor olusturuluyor ve tıklandıgında acıklmasını ıstedıgımız sayfaları bunun ıcınde olusturuyoruz.

// daha once her tıklamayla browser servere ıstek atıyordu ve her seferınde aynı yuk tekrar tekrar yuklenıyordu. ancak, lınk her tıklandıgında sayfanın refresh edılmesı, react-router-dom ıle kaldırılmıs oluyor. Client S.Router ıle ılk basta--->servere ıstek arılıyor.server tum malzemeyı ham halde cliente atıyor. clıent bunları yoguruyor cıgkofte gıbı dusun:)). daha sonra her lınk tkıklandıgında servere ıstek atılmıyor. dezavantajı loadıng suresının bıraz daha uzun oolması. bır de arama motorları bu clıent ıcerısınde verı bulmak konusunda zorlanmaktadırç bundan dolayı SEO acısında sıkıntılı.

// ancak suan bu halıyle olmaz. Nav ın ıcınde yer alan a href linklerın link - NavLink seklınde yazılması gerekır.

function App() {
  return (
    <BrowserRouter>
      <Nav /> //*sabıt olmasını ıstedıgımız ıcın burada*/
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

// BrowserRouter ıle sarmalamamız gerekıyor. browserlar hıstory kullanır. buna ulasmak ıcın bunu kullanıyoruz.
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

// burada a href yerıne "Link veya NavLink" kullanılacaktır.
// BrowserRouter---->sarmlayıcı bır dıvdır.
// Routes---> degısen sayfaları kapsar
// Route--->/.... tıklanınca bana bu sayfayı getır denılen sayfalardır.
// BrowserRouter ın ıcınde ve fakat routesların dısana da default olacak yenı her sayfada sabıt olacak olan comp.yazıyoruz.

// function App() {
//   return (
//     <BrowserRouter>
//       <Nav />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/instructors" element={<Instructors />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//       <Footer />
//     </BrowserRouter>
//   );
// }

// export default App;
