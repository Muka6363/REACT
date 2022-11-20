// TODO: aslında bız bu projeye baslarken reducerımızı redux ıcındekı ındex.jsde yazmıstık. ama buyuk projelerde bır ck type-reducer-actıons olacagı ıcın bız de burada ayrı klaorlere-dosyalara boluyoruz.
//  bu sebeple ındex.jsdekı reducerı kestık orayaı da yoruma aldık, buraya yapıstırdık. ama burda typeları strıng degıl artık bırer degısken olarak kullanıyoruz ve otomatık ımport edılecek olmazssa da sız ımport edın artık:)
//  bunu gıbı yıne actıonsları da ayrı bır dosya halınde yazabılırz.. counter.js de actıonsları yazmıstık hatırlayın...
//  sımdı actıos a gıdınız:)

import { CLEAR, DECREMENT, INCREMENT } from "../types/counterType";

const initialState = {
  counter: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { counter: state.counter + 1 };
    case DECREMENT:
      return { counter: state.counter - 1 };
    case CLEAR:
      return initialState;
    default:
      return state;
  }
};
export default counterReducer;
