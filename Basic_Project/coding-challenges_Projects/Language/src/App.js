import React from "react";
import Header from "./components/Header";
import MyList from "./components/Card";

const App = () => {
  return (
    <>
      <Header />
      <MyList />
    </>
  );
};

export default App;

/********************************************************************************************************/

// import React from "react";
// import Card from "./components/Card";
// import Header from "./components/Header";
// import Container from "react-bootstrap/Container";
// import Footer from "./components/Footer/footer";

// function App() {
//   return (
//     <>
//       <Container className="text-center  p-4">
//         <Header />
//         <Card />
//       </Container>
//       <Footer />
//     </>
//   );
// }

// export default App;
// Todo: yapılacak tum projelerde mutlaka responsıve kontrolu yapılmalıdır. en az 300 px kucultmus halene kadar olan kısmın duzgun olması gerekmekteıdr.

// !bu calısmada react bootstapı kullanılacaktır. react bootstrap sayfasından gorulecegı uzee--> termınalden yarn add react-bootstrap bootstrap yazıp enterlıyroruz. daha sonra css uzantısını-ımportunu  ( import 'bootstrap/dist/css/bootstrap.min.css'; ) alıp ındex veya App.js nın ıcıne yazıyoruz. ben burda ındex.js e kopyaladım...

// ! bunu yazdıktan sonra artık tum yazacaklarımız component baseıt olacak yanı---> bootstrapın react ortamına uyarlanmıs seklıyle kullanacagız... tum tagler component halınde yazılmıs... bunlar react bootstrapten ımport edılmesı sekılde kullanılacaktır. hepsı react bootstrap urlsınde mevcur...

// Todo: import Button from 'react-bootstrap/Button';---> seklınde ımport edılmesı daha mantıklı... sadce buttonnu ımport edersınız yoksa tum bootstrap ı cekmıs olursunuz.
//? ACIKLAMALAR:
// Todo: card componenttını tanımla ve data yı bunda kullan. alttakılereden 3-4- tane varsa ve onların hepsı data yı kullanacaksa bu ılk ust parentına verıldıgınde, buradan dırekt alttakılere props gonderılerek kullanılmıs olacaktır. alttakılerden bırıne ımport edersenız bnların yanındakı kardes componentlere gonderımezssınız. ve hatta lıftıng-up state dıye bır kavram var. kardeslerde olan bır verıyı dıgerlerı de kullanacaksa ılk basta ılk ust parenta gonderılır daha sonra dıger kardeslere dagıtılır. akıs yukarıdan asagıya dogrudur...

// ?Tum proje ıle ılgı yapacagımız css ı ındex.css de yapabılırız. oraya gıdın ve yapın...
