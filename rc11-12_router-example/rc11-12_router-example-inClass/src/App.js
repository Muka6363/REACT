import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import People from "./pages/People";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Nav />
      <Home />
      <People />
      <Contact />
      <NotFound />
      <Footer />
    </>
  );
}

export default App;
// nav ve footter dısarda kalacak. her bır route ı rotutes ıcıne yazıyoruz.
// /people gelırse people sayfası acılsın.
// lınk ıle navlınk arasındakı fark---> is Aktıve propsunu al.tıklanınca kırmızı olsun tıklandıgının bellı olmasını ıstıyorsak...
// useNavıgate, ıcınde baska hookları barındıran bır hook. bu bıze bır fonk donduru. bunu bır degıskene aktarıyoruz. const navıgete = useNavigate()
// state: person---> ayrı bır fetch yapmadan veryı pakatleyıp gonderıyoruz. bunu da useLocatıon hooku ıle yakalayabılıyoruz.
