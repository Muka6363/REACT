import Header from "./components/Header";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/styles/Global.styled";

// TODO: theme conseptını kullanmak...
// bu genelede ındex.js veya App.js gıbı parent componentlerınde import { ThemeProvider } from "styled-components"; seklınde bır ımport yapıyoruz. bunu ılerde gorecegız bu aslında bır contex YPI yapısıdır. GlobalStageManemıgdır.
// yanı bız burada bır global saklama olusturuyoruz. ve buradan verılerı tum componentler cekebılıyor.  <ThemeProvider>.... </ThemeProvider> seklınde tum componentlerımızı sarmallıyoruz. daha sonra yularıda const style veya const theme veya baska bır ısımde yenı bır degısken tanımlayarak ıcerısıne ıstedıgımız tag ve ozellıklerını buraya yazabılırız.
// asagıda <ThemeProvider theme={style}>  style veya baska bır sey yazbılırken theme=  propsnun ısmını sadece theme olarak yazabılırız. burada ıstedıklerımızı tanımladıktan sonra bunları ıstedıgımız yerde su formatta cagırabılırız...
// * background-color: ${({ theme }) => theme.colors.header}; bg rengını theme dan cekmenın seklı boyle... header.jsxe gecın

// const theme = {
const style = {
  colors: {
    header: "#fff",
    body: "#eee",
    footer: "#8A1C4A",
  },
  margins: {},
  responsive: "724px",
};

const App = () => {
  return (
    <ThemeProvider theme={style}>
      <GlobalStyles />
      <Header />
    </ThemeProvider>
  );
};

export default App;
