import { useState } from "react";

const Language = ({ item }) => {
  const { name, img, options } = item;
  const [desc, setDesc] = useState(false);

  return (
    <div
      className="language"
      style={{ width: "15rem" }}
      onClick={() => setDesc(!desc)}
    >
      {!desc && (
        <>
          <img style={{ width: "10rem" }} src={img} alt="" />
          <h3>{name}</h3>
        </>
      )}
      {desc && (
        <ul
          className="language_text"
          style={{ color: "black", width: "15rem" }}
        >
          {options.map((desc) => {
            return <li> {desc}</li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default Language;

//*********************************************************************************************************

// import { useState } from "react";

// import Container from "react-bootstrap/Container";
// import Image from "react-bootstrap/Image";

// const Language = ({ name, img, options }) => {
//   //   console.log("lang", lang);
//   const [showDesc, setShowDesc] = useState(false);
//   return (
//     <Container
//       style={{ background: "peachpuff" }}
//       className="p-4 rounded-2 h-100 lang-card"
//       onClick={() => setShowDesc(!showDesc)}
//       type="button"
//     >
//       {!showDesc && (
//         <Container>
//           <Image className="lang-logo" src={img} width="70%"></Image>
//           <h3 className="display-6">{name}</h3>
//         </Container>
//       )}

//       {showDesc && (
//         <ul className="h-100 d-flex flex-column justify-content-center">
//           {options.map((item) => {
//             return <li className=" h5 text-start ">{item}</li>;
//           })}
//         </ul>
//       )}
//     </Container>
//   );
// };

// export default Language;

//*contaınere paddıng verdıgımızde hepsının bırlestıgını gorduk bu asebeple card comp. gıdıyoruz ve orada rowa gap vererek bırbırınden ayırıyoruz.verıyoruz

//* onClıck ıle state mızı olusturuyoruz. resım tıklandıgında data.jsdekı her bır ıtem ın optıons keyın ıcındekılerını yazdıracagımız bır lıste yapabılırız. map ıle ıtere edılebılır.

//*showDesc yanı lısteyı ılk basta false baglıyoruz. yanı gorunmesın. ne zaman kı true olursa o zaman ekrana cıksın. yukarıda tek seceneklı yapılacagı ıcın short cırckus  yontemı kullanılır. yanı showDesc normlade false dur yanı lıste yok ama treu edılırse onClıck ıle o zaman resım gıtsın desc gelsın...

//*resım uzerıne gıttıgımde cursor un poınter olmasını ıstersem en kısa yolu dıvıne type=button ya verırsek o ıs hallolur.
