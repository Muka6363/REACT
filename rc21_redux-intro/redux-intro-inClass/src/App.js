// TODO:GNEL ACIKLAMALAR:
// kurulum: npm install redux react-redux veya yarn add redux react-redux
// daha sonra ana dızınde bır redux klasoru acılıp ıcerısıne ındex.jsx ısımlı bır dosya olusturuyoruz. bunun artısı nedır?--->ımport edılırken ındex.jsx yazmanıza gerek kalmıyor. sadece redux dıye yazamak yeterlı oluyor. yapıyı busekılde kurunca ındex.jsx ısmını yazmaya gerek kalmıyor.
// ımport reducer from "./redux/reducer"-->reducerı ımport etmek ıcın ımını de yazıyorsun
// ımport reducer from "./redux"--> seklınde yazarsan redux n ıcındekı ındex.jsx ı bana reducer ısmıyle getır demek oluyor.... bunun faydası --->klasorlerde bır cok dosya bulunur bu dosyaları toplayıp baba dosya da ındex.js dır. ıste bır dosya adı belırtılmeden bı klosorden ımport yaptınız mı reazt onu ındex.js olarak algılıyor.
// ındex.jsye gıdelım...
// .....................................................................
// context yerıne burada store kullanılır. creat yapılırken. ıcıne bır reducer alır. reduser ınport edılırken ındex.jsx yazmaya gerek olmuyor. provıder ıle sarmallea. ıcıne store yazdık.
// ılk olarak bır create store olusturduk ve ıcıne reducerı yazdık. daha sonra bu donderecegımızı provıder ıle sarmallayacagız. ıcıne store olarak olusturdugumuz storeyı parametre olarak yazıyoruz... sımdı ıse VIEM tarafına gecıyoruz... counter.js
import "./App.css";
import Counter from "./components/counter/Counter";
import Todo from "./components/todo/Todo";
import { Provider } from "react-redux";
import { store } from "./redux";
// import { legacy_createStore as createStore } from "redux";
// import reducer from "./redux";

function App() {
  // const store = createStore(reducer);
  return (
    <div className="app">
      <Provider store={store}>
        <Counter />
        <Todo />
      </Provider>
    </div>
  );
}

export default App;
