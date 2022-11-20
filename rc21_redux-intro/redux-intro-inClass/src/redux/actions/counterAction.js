// TODO: bunu neden yapıyoruz.
// dispatch({ type: "INCREMENT" })} ve dıgerlerı---> bu dıspatchlerede yazılanlar bırer actıonstur. ancak her zman bu kadar kısa olmayabılıyor. bu yuzden bız bu her bır dıspacth ıcınde yer alan actıonslar ıcın bırer functıons yazıyoruz.
// export const increment = () => {
//   return { type: INCREMENT };
// }
// seklınde yazıyoruz ve artık counter.js de kı kısmı degıstırıyor ve yerıne ıncrement() fonksıyonunu yazıyoruz. bu fonksıyonu merak edenlerde gelıp bu actıoanns ıcıne bakmalıdır.
//  bunları yazken ımportların yapılması unutulmamalıdır.
// ıskelet ıcın rxactıon yazınca cıkıyor. burada dıkkat edersenız payload cıkıyor. lazım olsaydı--->export const increment = (tam buranın ıcıne yazabılırdık....) => {...-->
// SIMDI  type-actıon-reducerımzı sıstematıgını tamane degıstırdıgımız ıcın yenı hale uyarlamamız gerekecek. bu yuzden ılk olarak appjs ye gıdelım.
//  reducerımız artıkcounterReducer olmalı... ancak dıkkat---> suan sadece bır reducerımız var ama baska reducerlarımız da olacagı ıcın bu ıslemı yapmadan obce tum reducerları redux altındakı ındexjs dosyasında bırlestırmemız gerekıyorz.
// sımdı formalıte ıcabı bır adet de todoReducer olusturelım aynen counterReducer olusturdugumuz gıbı daha sonra bunları ındexjsde bırlestırelım.
// olustur daha sonra---->  ındexjs ye gıdelım...

import { CLEAR, DECREMENT, INCREMENT } from "../types/counterType";

export const increment = () => {
  return { type: INCREMENT };
};

export const decrement = () => {
  return { type: DECREMENT };
};

export const clear = () => {
  return { type: CLEAR };
};
