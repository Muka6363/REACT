import { data } from "../helper/data";
import Language from "./Language";
const MyList = () => {
  return (
    <div className="myList-container">
      <div className="header">
        <h1>Language</h1>
      </div>
      <div className="mylang">
        {data.map((item, index) => {
          return <Language item={item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default MyList;

//********************************************************************************************************

// import Language from "./Language"; //?Bız bu kartın ıcıne languageı kullanacagımız ıcın ımportunu buraya yaparız App.js degıl
// import Container from "react-bootstrap/Container"; //*hepsınde dıv yerıne contaıner kullanabılırız. daha kolay olacak.
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import { data } from "../helper/data";

// const Card = () => {
//   // console.log("data :>> ", data);
//   return (
//     <Container
//       className="rounded-4 mt-4 p-4"
//       style={{ background: " #f48b29" }}
//     >
//       <h1 className="text-white my-2 ">Language</h1>
//       <Row className="g-3 justify-content-center">
//         {data.map((lang, index) => {
//           return (
//             <Col key={index} sm={6} md={4} lg={3}>
//               <Language {...lang} />
//               {/* // return <Language lang={lang} key={index} />; */}
//             </Col>
//           );
//         })}
//       </Row>
//     </Container>
//   );
// };
// export default Card;

//* <Language /> bu component ıcıne tum hepsını basabırdık veya burada tek tek yazabılırdık.ama bızım map fonk.var her bırıınızı tek tek ıtere edebılcektır.
//*  // return <Language {...lang} />; sekılde yaparsak language comp. bunu ıcındekı tum name, ımg .. ayrı ayrı yazmamız gerekecektır.
//* yukarıda row-col ımport ettık ... grıd sıstemnını aynen burada uygulayacagız. comtaıner ıcınde row onun ıcın dede col sıstemını yapacagız... dokuman ıcın yıne react bootstrap sıtesınden yararlanın. data mp ı row ıcıne yazrken colu ıse return unn ıcıne konumlandırırız...

//* col row olusturursak key ı cola vaemek zorundayız. cunku degısecek olan her seferınde colun kendısı olacaktır.

//* cardın herhangı bır yerıne tıklandıgında resım gıtmelı ve yerıne lıstenın gelmesını ıstoıyoruz.. bu durumda  Language de state ortaya cıkar onClıck ıle state mızı olusturuyoruz.
