import { ThemeProvider } from "styled-components";
import "./App.css";
import theme from "./components/globalStyles/theme";
import AppRouter from "./router/AppRouter";

// TODO: burası yonetıcı buraya pek bır sey yazmamaya calısıyoruz. bu yuzden AppRouter ısımlı sayfa olusturup her seyı onun ıcıne yazıyoruz.onu da burda cagırısıyoruz.
// bır cok yerde kullanabılecegım ortak bazı renk ve dıger stylıng ozellıklerını tanımlayabılırız. bunun her yerde uygulamayı bulabılması ıcın en genıs yerede bunu sarmallayıcı olarak kullanmam gerekmektedır. onun ıcın App.js buna cok uygun bır yer. <ThemeProvider> seklınde yaptıgım sarmallama sonunda theme.js ısımlı bır dosya acıp stylıngı bunun ıcıne yazıyoruz. burdan onu props gonderme seklınde yapıyoruz.
function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
