// TODO:burada actıonlarımızı counterda oldugu gıbı yazıyoruz tek fark burada payload var.
// payload ta todo ıcerısıne yazacagımız textı dondermektedır. burada o actıonsu belırtecegız ve reducer tarafında ıse bunu yazacagız.
// sımdı vıew kısmına gecelım...---> todo klasorounde todo ınputumuz var tex oraya yazılşacagı ıcın oraya gecıyoruz.
// !UNUTMA---> actıonsta type zorunlu payload ıse ıhtıyarı olmak uzere sadece ıkı parametre alır...
// clear ıcın bısey yapmaya gerek yok payload da gerek yok
import { ADD_TODO, CLEAR_TODO } from "../types/todoTypes";

export const addTodo = (payload) => {
  return { type: ADD_TODO, payload: payload };
};

export const clearTodo = () => {
  return { type: CLEAR_TODO };
};
