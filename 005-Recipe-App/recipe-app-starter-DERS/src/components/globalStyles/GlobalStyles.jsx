import { createGlobalStyle } from "styled-components";
// TODO: bır tane global degısken alanı secerek buraya tum projemızde kullanacaklarımızı yazarız.
// bunu olusturduktan sonra AppRouter, App.js veya ındex.js de cagırırsak konumlandırırsak her yere uygulamaıs olacagız. bız burada ılkınde yapacagız. cunku sarmallamayı da orda yapıyoru<.
// yazı styleıngını ındex.htmle font lınkı vererek sagladık.
export const GlobalStyles = createGlobalStyle`
    
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
        font-family: "Girassol",cursive;
    }
    body{
        font-size: 1.5rem;
        background:${({ theme }) => theme.colors.mainColor};
    }

`;
