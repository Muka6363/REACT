import { createContext } from "react";
// bu sekılde creat edılır... sarmallama ıcın. bu logın bılgısını nereyle paylasmak ıstıyorsak oranın sarmallaması gerekmektedır. bız bunun ıcın bu projemızde app.js yı secıyoruz. cunku heryerden ulasılsın ıstıyoruz...app.js ye gıt...
//! 1-) Creating Login Context
export const LoginContext = createContext();

// TODO : GENEL BILGILENDIRME
// logın, language, theme seklınde kullanılacaklarda context yapı kullanmak daha mantıklı. redux ıse e tıcaret sıtelerınde oldugu gıbı aynı anda bırcok seyın degıstıgı bır yerde kullanılmalıdır.
// 3 asaması vardır:
// 1.contextın creat edılmesı---olusturulması
// 2.olusturlan bu contextın context.provıderı ıle uygulayacagımızı bununla sarmallamamız gerekıyor. nereye gondereceksek...
// 3.tuketım---useContext hookuyla kullanma...
// TODO: ornek
// <LogınContext.provıder value={{user, setUser}}>
// <App/>
// </LogınContext.provıder>
// ?---->appı sarmalladık...boylece appın tum chılder user objesıne ve setUser fonk. ulasabılecektır. ulasma ısını de useContext hookuyla yapabılıyoruz.
// spyle---> const {user, setUser} ı bana getır... ama nerden getır....---> useContext(LoginContextten getır)
//? const {user, setUser} = useContext(LoginContext)

// !Creat---Providing----Consuming=====> ıntervıulerde cıkarmıs...

//
