import React from "react";
import ReactDOM from "react-dom/client";

//! index componenti ReactDOM.createRoot() metodu ile
//! public klasorunde yer alan index.html icersindeki id'si root
//! olan elemana erisir.
//* render() metodu içerisinde App componenti cagrilir.
import App from "./App";
import "./index.css";

// const a = 5; ///degısken atayabılır ve suslu ıcınde kullanabılırız.
// const element = (
//   <>
//     <h1>Hello {a}</h1>
//     <p>Selam mıllet</p>
//   </>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(element);
///////////////////////////////////////
// asagıdakı de bır component halıdır... bas harf buyuktur.
// const Element = (
//         <>
//           <h1>Hello {a}</h1>
//           <p>Selam mıllet</p>
//         </>
//       );

//       const root = ReactDOM.createRoot(document.getElementById("root"));
//       root.render(<Element/>);

//* render() metodu içerisinde App componenti cagrilir.
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
