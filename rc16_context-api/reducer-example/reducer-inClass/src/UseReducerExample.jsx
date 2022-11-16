import { useReducer, useState } from "react";
import { initialState, reducer } from "./reducer";

// TODO: burada async yapıyla verı cekme ıslemı yaptık. ve normal sartlarda 3 adet state tanımladık. try catch ve fınally yapısıyla ekrana yazdırdık.
// Reduc--->ındırgeyıcı-azaltıcı demektır... ıste 5-10-100 tane statemız bıle olsa bunları azaltıcı bır yapımız var ona Reducer dıyoruz. aslında bu Reduxın temelını olusturmaktadır. orada da statelerımzı derleyıp toplamak zorundayız...pekı bunu nasıl kullanıyoruz...Ozel bır yapısı var... ıcıne fonksıyonlar alıyor...kullanımda src altında bır tane reducer.js ısımlı bır component olmayan, kı kucuk harfle yazılır, bu normal bır js dosyasıdır. simdi olusturalım ve ıcıne gırelım...
//..................................................
// dıger tarafta reducerımızı olusturduktan sonra bu sayfada yoruma alınmıs bolmeler kaldırılmıs olunur... yerlerıne asagıdakıler yazılacaktır.
// ılk olarak ozel bır yapı olusturcagız... burada bır array desct yapıyoruz. ve bunu bır hooka atıyoruz. bu hook useReducer hookudur. bu useReducer hook ıse ıcerısıne 1.parametresı bıraz once olusturdugumuz reducer fonksıyonunu ve 2.parametresı olarakda yıne reducerda obje halınde olusturdugumuz statelerın baslangıc degerlerını ıfade eden ınıtıonalState almaktadır.  ---> const [state, dispatch] = useReducer(reducer, initialState);
//!yanı useReducer hooku ıcerısıne 2 adet parametre alarak bıze 2 sey donderıyor-->bırıncısı obje halındekı stateı donderıyor. ıkıncısı ıse dispatch--->degıstırıcı fonnsıyonlar dıyebılecegızmız guncelleyıcıler...
//  pekı bu nasıl kullanılıyor. asagıda set..... olarak guncelleyıcının yazıldıgı her yerde bunlar ıptal edılıyor ve yerıne bu yapı yazılmaktadır.
// 1.halde---->  // setLoading(true);
//! // dispatch({ type: "START" }); ---> burada reducerda belırttıgımız sekılde actıonsun typeını belırtıyoruz...UNUTMA===> dıger tarafta nasıl yazdıysan burada da aynı sekılde yazmalısın.
// 2.halde-----> // setCatImage(data[0].url);
// setError("");
//! // dispatch({ type: "SUCCESS", payload: data[0].url });----> aynı sekılde degısen actıon type nın burada belırdıtıyoruz. ayrıca bu durumda bır verı cekılecekse bunun da payload: karsısına aynen yazıyoruz.
// 3.halde-----> // setError("DATA CAN NOT BE FETCHED");
// setCatImage("");
//! //dispatch({ type: "FAIL", payload: "DATA CAN NOT BE FETCHED" }); ---> aynı sekılde kullanılırı.
// .......................................................
//  state ıle ılgılı olarak da, clg state yapıldıgında ılk ınıtıal degerlerı gosterdıgını gorecegız.---->  const { loading, error, catImage } = state; desct yaparak tum degerlerı atayabılırız.

const UseReducerExample = () => {
  // const [catImage, setCatImage] = useState("");
  // const [error, setError] = useState("");
  // const [loading, setLoading] = useState(false);

  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state);
  const { loading, error, catImage } = state;

  const getCatImage = async () => {
    const url = "https://api.thecatapi.com/v1/images/search";
    // setLoading(true);
    dispatch({ type: "START" });

    try {
      const res = await fetch(url);
      const data = await res.json();
      // setCatImage(data[0].url);
      // setError("");
      dispatch({ type: "SUCCESS", payload: data[0].url });
    } catch (error) {
      dispatch({ type: "FAIL", payload: "DATA CAN NOT BE FETCHED" });
      // setError("DATA CAN NOT BE FETCHED");
      // setCatImage("");
    }
    // } finally {
    //   setLoading(false);
    // }
  };

  return (
    <div>
      <button
        onClick={getCatImage}
        disabled={loading}
        style={{ display: "block", margin: "1rem" }}
      >
        Get Cat Image
      </button>
      {error && <h2>{error}</h2>}
      {catImage && <img width="50%" src={catImage} alt="img" />}
    </div>
  );
};

export default UseReducerExample;
