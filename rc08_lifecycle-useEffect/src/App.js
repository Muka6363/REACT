import { useState } from "react";
import LifeCycleMethods from "./components/LifeCycleMethods";
import UseEffectHook from "./components/UseEffectHook";
import User from "./components/User";

// bır buton koyuyoruz. buna tıkla goster. bı daha tıkladıgında kaldırsın. bunun ıcın bı dınamıklık var bu yuzden state kullanıyoruz. her onclıck oldugunda setShow un degerı show degıl olsun yanı true ıse false  false ıse true olsun. onClick={() => setShow(!show)}...
//  bunu lıfeCycleMetodunu gosterıp gostermemesı ıcın kullanabılırız. {show ? "Hide" : "Show"} butonu da bu sekılde yapabılırız. show tru ıse goster.
function App() {
  const [show, setShow] = useState(true);

  return (
    <div className="container text-center mt-4">
      {/* <button className="btn btn-dark" onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"}
      </button> */}

      {/* Short Circuit */}
      {/* {show && <LifeCycleMethods />} */}

      {/* {show && <UseEffectHook />} */}
      <User />
    </div>
  );
}

export default App;
