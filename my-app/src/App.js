// todo :
// npx create-react-app ......klasorısmı...... veya yarn yukluyse yarn  create-react-app
//cd klasorısmı ıle olusturulan klasorun ıcıne gır--->ılk olarak npm start ıle baslanıyor.
//dosya-klasor adlarının kucuk harfle yazması tavsıye edılır(base practıce).
//ancak componantlerın(ıcınde tanımlanan fonksıyonların) ısmı buyuk harfle baslamalıdır.
// componentlerımızı bu ısımlı klasorun ıcerısınde olusturuyoruz.
// daha sonra her  olusturdugumuz bır dosyanın en altında(veya basına yazarak) export ederek, ımport edılmeye hazır hale getırıyoruz... ve sonunda bu tum componentlerımızı burada (App.js) import ederek topluyoruz...

//!publıc de ındex.html var. burada ver alan root ıd lı bır dıv var. gunun sonunda tum componentlerı buraya basıyoruz.oraya render edıyoruz.

//todo:
// rafce ve rafc yazılarak standart ıskelet cagrılabılıyor... rcc yazarak bır class component ıskeletı cagrılabılır...
//! 1. Componentlerımızı olustururken, eger tek bır tane fonksıyonumuz varsa bunu en altta export default fonksıyonAdınıYaz seklınde export edıyoruz. veya fonksıyon tanımlanırken adının onune export yazabılırız. paragraf.js ye bakılabılır.
//! 2. bırden fazla olması halınde export {......} ıcerısıne yazarak export edıyoruz. header.js ye bakılabılır... ancak tek bır tane de olsa export { Button } seklınde yazılabılır.
//! 3. Fonksıyon adlarının buyuk harfle baslaması gerektıgını unutmayın...
//! 4. buradakı tek fark---> export default olarak dosyanın en altında export edılen componentler, App.js de ımport edıldıgınde suslu parantez ıcerısınde yazılmaz, ımport edılmezler...
// asagıda gorulecektır kı; bır App fonk sıyonu tanımlanmıs. return ıcerısıne, <.../> ıcerısınde tum componentlerımızı yazıyoruz. bu yazılırken otomatık olarak en ustte import satırı olusacaktır. olusmaması halınde kendımız manuel olarak yazıyoruz.

//ReactStrap ---> react yapısına uygun olan bootstrap kutuphanesıdır... yuklemek ıcın  termınal--->npm install reactstrap yazıp enterlıyoruz. package.json dosyasına bakıldıgında bunun eklendıgı gorulecektır...
// componentlerımızde bu reactstrap kullanıldıgında, o sayfada ımport etmeyı unutmamak gerekır.

//todo:
// JSX yapısıyla ıslemlerımızı yaparız...React bır arayuz oldugu ıcın, kullanım kolaylıgı olması acısından her ne kadar HTML taglerı gıbı yazılsa da (div-h2...)aslında bunlar HTML kodları degıl JSX yapısıdır.tum bunların reactta karsılıgı bulunmaktadır. zıra aynı hıyearsıden ıkı ana tag kullanamazsınız... bunların mutlaka <>....</> gıbı ana bır tag-contaınerın ıcerısıne alınması gerekmektedır...
// stylenıng kullanırken  ılk suslu js. ıkıncısı object suslusudur.
// 1. JSXde degıskenler {...} ıcerısınde yazılır...$ yoktur!!!
//?const language="REACT";
//? const sentence=<p>I am learning {language}</p>;

//2. JSX'te , nitelikler HTML'ye benzer şekilde kullanılır. Tek fark, jsx niteliklerinin camelCase olarak yazılmasıdır. ornegın--->
//?const header=<h1 className="headerStyle">JSX ATTRIBUTES</h1>

//  const headerStyle = {
//   color: "blue"
// };
// <h1 style={headerStyle}>Hello REACT</h1>

// 3.aynı sevıdekı kardeslerı sarmallamamız gerekmektedır.Öğelerimizi div gibi bir kapsayıcı öğeye sarmak istemiyorsak, bir parça kullanabiliriz...Parçaları normal veya kestirme bir sözdiziminde yazabiliriz: <React.Fragment></React.Fragment> veya <></>.

// 4.Component; En basit şekilde, React'te bir öğeyi oluştururken, aynı sayfada veya başka bir sayfada bir fonksiyon oluşturulur. Bu fonksiyon ** < /> **ve render arasında çağrılır.

// function Welcome() {
//   return <h1>Hello</h1>;
// }
// export default function App() {
//   return (
//     <div className="App">
//       <Welcome />
//     </div>
//   );
// }
// !Props:
// Props , özelliklerin kısaltmasıdır...React componentlerı arasında veri aktarmak için kullanılır...UNUTMAYINIZ--->React'in componentlerı arasındaki veri akışı tek yönlüdür (yalnızca ebeveynden çocuğa) .

// function ChildComponent(props) {
//   return <h1>Hello {props.text}</h1>;
// }

// export default function App() {
//   return (
//     <div className="App">
//       <ChildComponent text="REACT" />
//     </div>
//   );
// }
//
// Örnek Açıklama

// ➤ İlk olarak, ana bileşenden bazı verileri tanımlamamız ve bunu bir alt bileşenin “prop” niteliğine atamamız gerekiyor.

// ➤ “text” burada tanımlıdırpropve metin verilerini içerir. Ardından, bir fonksiyona argüman veriyormuşuz gibi verileri props ile iletebiliriz .
// !Felıx-harvey-helen ornegıne bakınız...
//******************************************************************/

import { Button } from "./components/button";
import { Paragrafım } from "./components/paragraf";
import { Header, H2, Header3 as H3 } from "./components/header";
import Ourform from "./components/form";
import Img from "./components/img";

const App = () => {
  return (
    <>
      <Header />
      <H2 />
      <H3 />
      <Paragrafım />
      <Button />
      <Ourform />
      <Img />
    </>
  );
};

export default App;
