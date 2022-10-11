// data.js

//todo 1. ınlıne Stylıng:
// bır ogeye ınlıne style attrıbutu tanımlayabılmek ıcın bu ogenın JS nesnesı olması gerekır...
{
  /* <h1 style={{color: "purple"}}>ClarusWay Style!</h1>
<p>You can add  style!</p> */
}
// ! JSX'te JavaScript ifadeleri küme parantezleri içinde yazılır ve JavaScript nesneleri de küme parantezleri kullandığından, yukarıdaki örnekteki stil iki küme parantez {{...}} içine yazılmıştır.
//  ozellık adlarını yazarken camelCase yazmayı unutmayınız...backgroundColor
// Ayrıca stil bilgisine sahip bir nesne oluşturabilir ve ona stil özelliğinde başvurabilirsiniz :
// ornek:  // Functional Comp.
// function MyHeader() {
//         const mystyle = {
//           color: "white",
//           backgroundColor: "DodgerBlue",
//           padding: "10px",
//           fontFamily: "Arial"
//         };
//         return (
//           <div>
//             <h1 style={mystyle}>ClarusWay Style!</h1>
//             <p>Add a little style!</p>
//           </div>
//         );
//     }
//todo 2. Harıcı Stylesheet:
// CSS Stil Sayfaları, stilin uygulanması gereken yere bağlı olarak React bileşenlerinize aktarılabilen harici CSS stil sayfalarının kullanımını içeren bir stil stratejisidir. klasık metod ıle bır css dosyası olusturup orada gereklı stylıng ıslemlerın yapıldıktan sonra bu dosyamız dıger ana parent dosyasıandan ımport edılmesı suretıylr kullanılır. import './App.css' gibi.

//todo 3. SASS:
// Sass bir CSS ön işlemcisidir . Sass dosyaları sunucuda yürütülür ve tarayıcıya CSS gönderir.
// ➤ Eğercreate-react-appprojenizde kullanıyorsanız Sass'ı kolaylıkla kurabilir ve React projelerinizde kullanabilirsiniz.

// ➤ Terminalinizde bu komutu çalıştırarak Sass'ı kurun:
//? npm install sass
//? yarn add sass

// Bir Sass dosyası oluşturun, tıpkı CSS dosyaları oluşturduğunuz gibi, ancak Sass dosyaları .scss dosya uzantısına sahiptir.

// ➤ Sass dosyalarında değişkenleri ve diğer Sass işlevlerini kullanabilirsiniz:

// ➤ Metnin rengini tanımlamak için bir değişken oluşturun:

//!style.scss
// $headerColor: #E9335A;
// $textBackColor:#FBBC05;
// h1 {
//   background-color: $headerColor;
// }
// p{
//   background-color: $textBackColor;
// }
// Sass dosyasını bir CSS dosyasını içe aktardığınız gibi içe aktarabılırsınız...import './style.scss';
//////////////////////////////////////////////////!
// todo: REACT STYLING
/*
*** styled-components , React bileşen sistemlerini şekillendirmek için geliştirilmiş bir CSS çözümüdür.
*** Yüklemestyled-componentsyalnızca tek bir komut alır ve artık başlamaya hazırsınız:

* npm install styled-components
* yarn add styled-components

ORNEK:

import styled from 'styled-components'

const Header = styled.h1`
  font-size: 2em;
  text-align: center;
  color: #a62440;
`;
const Text = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #FBBC05;
`;
//? Functional Comp
function MyComponent() {
    return (
      <Header> Clarusway </Header>
      <Text>Give your career a boost!</Text>
    );
}

export default MyComponent

Bu örnekte, Header styled-components ıle stıllendırılmıs bir h1 öğesidir 

Bu örnekte, Text styled-components ıle stıllendırılmıs bir P öğesidir 










*/
