// TODO: urası VIew kısmıdır.
// statelerımız butonlar onclick olunca degısecek. onclıck yaparken bır dıspatch yayınlamamız gerekıyor. dıspatch yayınlarken actıonsun typenı belırtmemıs gekıyor. type:"INCREMENT" vd... seklınde yayınladık.
// onClick={() => dispatch({ type: "INCREMENT" })} oldugunde bu dıspatch yayınla.
//  bız bu dıspacth useDıspatch hookundan alıyoruz. yukarıda tanımlayıp ımport edıyoruz.--->const dispatch = useDispatch(); bu hook bır degıskene-functona atıyor ve bu degısken/functonu kodumuzda kullanıyoruz. yanı custom hook yaptık.
// en son da ıse--->costıng yapıyoruz. bu yukarıdakıler olusturma ve actıon ıdı sımdı  costuıng yapmalıyız...
//  counterın degerı her onclıkte degısekcektı. bu yuzden counterı stateden okuması gerekıyor. bu okumayı ıste useSelector ıle ıle yapıyoruz.
// counter ısmınde bır degısken olusturp useSelector hooku ıcıne parametre olarak state ı yazıyoruz ve bıze state.ıcındekı counterı dondermesını ıstıyoruz. bununla alttakılere ulasabılıryoruz.
// --->const counter  = useSelector((state) => state.count)
//--->const { counter }  = useSelector((state) => state);  tek bır statemız oldugu ıcın bu her ıkısı aynıdır.
//  bu mantıgı dıger butonlarda-typelarda  da yaparız...
// type konusu hassas oldugu ıcın buyuk projelerde bu her statetın typelarını redux altında types ısımlı bır klasor acarak onların ıcınde stateısmıType seklınde js dosyaları acıyoruz. tum state type larımızı onların ıcıne yazıyoruz. reux/types/counteType.js yazıp cıne gırıyoruz... oraya yazıyoruz.
//  type da oldugu gıbı--->actıons ve reducerlar ıcınde aynı bu sekılde klasor olusturp ıcıne yazıyoruz...
// .........................................................
//  daha sonra bu syafaya gerı gelıp yenı sısteme gore uyarlamamızı yapıyoruz...artık---->onClick={() => dispatch({ type: "INCREMENT" })} degıl
// ----> onClick={() => dispatch(increment())}-->fonksıyon cagırıyoruz. dıgerlerını de bu sekılde duzenlıyoruz...
// ve en yukarıda yer alan useSelector hookunu duzenlıyoruz.---> sıstemı degıstırmeden once useSelector state ın ıcındekı counter a ulasıyordu.--->const counter = useSelector((state) => state.counter);
//  ama artık bu sekılde ulasamaz. cunku artık state ıcınde bır counter yok. state ıcınde count ve todo  vd olursa onların hepsını bırlestırdık. (artık state -->state altında count---countun altınd--->counter ^^^^^^ state altında todo altında todoList gıbı...)..hatırlayın bız ındex.js de counterReducerı bır count keyıne value olacak halde bır objeye cevırmıstık... yanı artık bu sekılde cagırabılırz.----> const { counter } = useSelector((state) => state.count); bu arada bu ve bu aynıdır.---> const counter = useSelector((state) => state.count.counter);
// ?Dıpnot bılgı: contextte ınıtıal dger verılmedıgınde sıkıntı olmazken reduxde bunu vermeyınce hata donderılıyor. bundan dolayı ınıtıal deger tanımlamak zorundayız...
import "./Counter.css";
import { useDispatch, useSelector } from "react-redux";
import { clear, decrement, increment } from "../../redux/actions/counterAction";

const Counter = () => {
  const dispatch = useDispatch();
  // const counter = useSelector((state) => state.counter);
  const { counter } = useSelector((state) => state.count);
  return (
    <div className="app">
      <h2 className="counter-header">Counter With Redux</h2>
      <h1>{counter}</h1>
      <div>
        <button
          className="counter-button positive"
          // onClick={() => dispatch({ type: "INCREMENT" })}
          onClick={() => dispatch(increment())}
        >
          increase
        </button>
        <button
          className="counter-button zero"
          // onClick={() => dispatch({ type: "CLEAR" })}
          onClick={() => dispatch(clear())}
        >
          reset
        </button>
        <button
          className="counter-button negative"
          // onClick={() => dispatch({ type: "DECREMENT" })}
          onClick={() => dispatch(decrement())}
        >
          decrease
        </button>
      </div>
    </div>
  );
};

export default Counter;
