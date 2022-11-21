// TODO: aynı counterda yaptıgımız gıbı buradada bır todo reducer olusturuyoruz. oncesınde hangı stateler olmalı ve bu stateler nasıl degıstırlmelı bunu belırlemek gerekıyor.
// bır todo da ıd olur textı olur bır de completed olur. bu yuzden ılk ılarak ınıtıalState olarak bunları belırlemek lazım. bunlar bıze bbır obje ıcerısınde key-value seklınde dondugu ıcın formata uygun yazıyoruz. bunlardan bırden fazla olacagı ıcın bu objelerı bır [{},{},{}] seklınde yazmalıyız.
// ıd ıcın unıq bır deger ıstıyoruz en basıtınden---> new Date ıcınde getTıme() cagırabılırız. texı bos ve completed (textın uzerını cızme ısı)ı boolın a kuralı false olsun ...
// sımdı de state belırlemelı-->tododa --->add-clear-delete-toogle olabılır. bunlar caselerımızdır. bu statelerımızı type ıcerısınde olusturalım... todoType gıdelım...
// ................................................
//  olusturup gerı geldık. bunları buraya ımport edıyoruz....
// sımdı---> bız add_todo ıle var olan state uzerıne yenı olusturdugumuz bır type- ekleyecegız. bu yuzden ılkını aynen alıp (...state) bu yenı yazdıgımızı da onun devamına eklemelıyız. syntaxı bıraz karısık gelebılır ama degıl :)...
// 1.yenı bır obje dondurecegımız ıcın return ıcın bır {} acmamız ve bunun ıcıne yazmamız gerekıyor.
// 2. yenı olusan bu todoyu --->state ıcınde olan todoLıstın ıcıne ekleyecegızmız ıcın keyımız todoLıst olacak. valuemızıe gelınce...-->
// 3. elımızdekı bır arrayın ıcıne bır obje gondeecegımız ıcın ılk olarak stateımızın ıcınde varolan todoLıstımızı acıyoruz...[...state.todoLıst]seklınde. daha sonra da ıd-text ve comletedımızın ıcınde oldugu bır objeyı {} yazıyoruz. yenı dgerını yazıyoruz.
// ıd aynı sekılde olusturur--textımızın degerı ıse payloadtan gelecek. comleted ıse ılk eklendıgınde false verılebılır.
// Dıgerlerını hoca odev verdı:))
// sımdı actıons yazalım...
// ................................................
// case CLEAR_TODO:
// return initialState;---> ıcın baskaca bısy yazmaya gerek yok tıklandıgında ınıtıal degerı yanı baslangıc degerını dondermesını yazıyıruz. dıger taraflarda ıse gerej-klı duzltlmeletrı yapalım..1.actons 2.todoLıst.js
import {
  ADD_TODO,
  CLEAR_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
} from "../types/todoTypes";

const initialState = {
  todoList: [{ id: new Date().getTime(), text: "Work hard", completed: true }],
};

const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return {
        todoList: [
          ...state.todoList,
          { id: new Date().getTime(), text: payload, completed: false },
        ],
      };
    case DELETE_TODO:
      return {};
    case TOGGLE_TODO:
      return {};
    case CLEAR_TODO:
      return initialState;
    default:
      return state;
  }
};
export default todoReducer;
