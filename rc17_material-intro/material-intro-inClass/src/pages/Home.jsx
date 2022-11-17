import AppbarComp from "../components/AppbarComp";
import CardGrid from "../components/CardGrid";
import TextFieldComp from "../components/TextFieldComp";
import TypoButtons from "../components/TypoButtons";
import { createTheme, ThemeProvider } from "@mui/material";
import { teal } from "@mui/material/colors";
import MakeStylesComp from "../components/MakeStylesComp";

const Home = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#21a415",
        light: "#51f346",
        dark: "#46630c",
      },
      secondary: {
        main: teal[500],
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <AppbarComp />
      <TypoButtons />
      <TextFieldComp />
      <CardGrid />
      <MakeStylesComp />
    </ThemeProvider>
  );
};

export default Home;
// TODO: GENEL BILGILER...
// www.mui.com adresınden ulasılır.--->get started--->Installatıon
// component bese bır kutuphanedır.
// aradıgınız ne ıse onun ısmını yazarak aynen react vd gıbı kalıplarına ulasılabılır.
// yarn add @mui/material @emotion/react @emotion/styled ıle kurulumu yapılabılır.
// bu materıal uı n en buyuk farkı. etıket ısımlerının farklı olması ornegıın header h1h2h3h4h5h6 yerıne typography ısmıkullanılmaktadır. bunlara asına olmak lazım .haydın baslıyoruz...TypoButton.js ye gıdınız...:)
//  unutmayın pages ı olusturuyor burada topluyoruz. buraya ımport edıyoruz.
