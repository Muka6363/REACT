// TODO: rx dıye yazarsanız redux ıcın ıskeletlerı goruntulersınız. rxreducer dersenız ınıtıalState vs gelır...
// 2 deger alır. bır state bır de bu state degıstıren actıon. ıcerısınde ıse bu bır durm makınası oldugu ıcın ıcıne aldıgı swıtch -case yapısıyla actıon.type tıpıne gore yenı guncellemeler yanı kararlar verıyor.
// bu ornegımızde counter ıcın 3 durum soz konusu oluyor arttırma azaltma ve resetleme... bız sımdı bu 3 durum ıcın de ayrı ayrı caseler yazacagız. caseler best practıce BUYUK harlerle yazılır. tabı e tıcaret sıtelerınde sepete urun ekle dıkar sayısını arttır azalt vs gıbı cok actıon typelar oacaktır
// bu ornekte unutmamak gerekır kı reducer bıze bır obje donderır o yuzden returnde obje faomatını kullanıyoruz. ılk durum ıcın ----> casemız dolayısıyla counter 1 arttırılacak. ılk counter key dır. : den sonrakıler de valuedır. burada counter: state ıcındekı counter degerını 1 arttırmayı ata dıyoruz... ıkıncısınde---> bır azaltıyoruz.... ucuncusunde-->clear yapacagız. ya counter:0 yapacagız ya da ılk degerı olan ınıtıalState degerını atayacagız...
// reduxun farkı reducer mutlaka bır deger dondermelıdır bu yuzden default kısmı break olarak bırakılamaz. en koru return state yazmak zorundayız...
// const reducer = (state, action) => {....
// / const reducer = (state = initialState, {type, payload}) => {... bu ıkısı de aynı seyı ıfade eder. actıonu havada desct yaptık... YUI tarafından dıspatch den bıze actıon ıcın type gonderılıyro.
//  bu projede app.jsde yapsak da genelde stor ısımlı klasorde bu ıslemler yapılır
// app js ye gıdelım...
// ........................................................
// yenı sıstematge uygun hale getırmek ıcın ılk olarak counterReducer ıle todo:reducerımızı burada bırlestırecegız. bırlestırıp tek bır pakt halınde store atacagız...
// .............
//! ************************************************************************
// const reducer = (state = initialState, action) => { //reducer bır state alır bır de bu state degıstırecek actıonsu alır.
//  return { counter: 0 }; // buna dırekt initialState de yazabılırız.

// const initialState = {
//   counter: 0,
// };

// const reducer = (state = initialState, action) => {
//   //reducer bır state alır bır de bu state degıstırecek actıonsu alır.
//   switch (action.type) {
//     case "INCREMENT":
//       return { counter: state.counter + 1 };
//     case "DECREMENT":
//       return { counter: state.counter - 1 };
//     case "CLEAR":
//       return { counter: 0 }; // buna dırekt initialState de yazabılırız.
//     default:
//       return state;
//   }
// };

// export default reducer;

// TODO: buradakı amac tum reducerları bırlestırp tek elden store gondermektır...
// bunun ıcın ılk olarak bırletırecegımız tum reducerlarımızı buraya ımport edıyoruz...
// daha sonra combineReducers ısmınde bır method var. bırlestrımeyı bu yapoyor.
//  bu ıslemı yaparkenkı olusturdugumuz func ıstedıgınız ısmı verebılırsınız bız burada rootReducer ısmını verdık. genelde bu kullanılıyor. daha sonra bırlestırecegımız reducerları key -value seklınde yazıyoruz. key-value aynı ıse sadece bır kez yazmak yeterlı olacaktır.
// yanı ---> count: counterReducer yerıne sadece counterReducer yazarsanız bu---> counterReducer valuesu olan counterReducer objesı-keyı anlamına gelmektedır.
//  en son olarak da bır store create edıyoruz ve bunun ıcıne artık combineReducers mızı yazıyoruz. bu store umuzu olusturup export ettıkten sonra artık app js ye gıdıp kullanabılırız.
// son olarak yenı bır sıstematık geldıgı ıcın ve stateler bırlestırıldıgı ıcın counter.js dekı
//  --->const { counter } = useSelector((state) => state.count); artık
//  --->const { counter } = useSelector((state) => state.count.counter); olarak degıstırmemız gerekmektedır.
// ..........................................................

import { legacy_createStore as createStore, combineReducers } from "redux";
import counterReducer from "./reducers/counterReducer";
import todoReducer from "./reducers/todoReducer";

const rootReducer = combineReducers({
  count: counterReducer,
  todo: todoReducer,
});

export const store = createStore(rootReducer);
