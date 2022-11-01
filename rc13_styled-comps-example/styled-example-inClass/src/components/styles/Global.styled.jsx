import { createGlobalStyle } from "styled-components";

// TODO: sass da yaptıgımız gıbı bellı bı kısmın stylıngını bır yerde verebılıyoruz. yukarıdakı gıbı bı ımport edılıyor. ve asagıdakı gıbı baslangıc olarak olmasını ıstedıgımzı tum ozellıklerı backtıck ıcerısınde burada belırtıyoruz. daha sonra App.js ye gıdıp burada olusturdugumuz componentı cagırıyoruz.    <GlobalStyles /> seklınde... bulece tum ozellıklere tum projeye uyarlanmıs olacaktır.

export const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
    margin: 0;
    padding: 0;
}
body{
  background: ${({ theme }) => theme.colors.body};
  color: "#00252e";
  font-family: 'Poppins', sans-serif;
  font-size: 1.1rem;
}
p {
    opacity: 0.6;
    line-height: 1.5;
  }

`;
