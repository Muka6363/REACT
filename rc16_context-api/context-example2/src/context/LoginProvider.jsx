import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

// TODO: context-exemple1 de kullanlına yondetemden daha fazla buradakı yontem kullanılmaktadır.
// creat-Providing ve de Consuming ıslemlerın hepsını bır component olarak da olusturulabılıryor... bunun ıcın boyle bır js sayfası olusturuluyor.
// hatırlayın, 1.olustur 2.sarmalla 3.kullan ıslemlerının hepsını burada yapacagız.
// 1. aynen yapılır.
// 2. bu ısımde bır component tanımlanır ve ıcıne global olacak olan state tanımlamamızı yaparız. dıgerınde oldugu gıbı---> const [user, setUser] = useState({ email: "", password: "" }); baslangıc degerlerını de bu sekılde verebılırız.
// return kısmında ıse sarmallama ıslemı yapacagız. ancak hatırlarsanız. dıger yontemde bu sarmallama ıslemeını app js de yapmıstık. hangılerıne uygulayacaksak onları bu contextın ıcıne alıyorduk... tam burada app js ye gıdelım... orada bu global contexımızın sarmallayacagı routerları LogınProvıder ıle sarmallayalım...
// Return de ----> <LoginContext.Provider value={values}>{children}</LoginContext.Provider> seklınde yaparız. value={values} dakı kullanıma gelecek olursak---> bırden cok propsumuz varsa bunları bır degıskene atarız. ve asagıda bu degıskenın adını yazarız...daha kolay bır yazım seklı... burada contexın sarmalladıgı sey app.jsde sarmallanan tum routerları ıfade eden chıldrenlardır...props.chıldren yazabılırken havada desct. da yapabılırız.
// values olarak bır degıskene atayıp tumunu tek seferde value ya yazabılırız.
// 3. costum ıslemı---> aslında normalde bu context nerede kullanılacaksa orada cagrılmalıydı. ama bız bunu da burda Custom Hook vesıleyle yapabılecegız.
//! Custom Hook ---> bır react hookunu baska bır hook cagırıyorsa buna custom hook denır.
// useLoginContext ısımlı bır fonksıyon-hook yazıyoruz. basında use... varsa bu hooktur. bunun ıcınde useContext(LoginContext) donduruyoruz. boylece bı hook ıle baska bır hook cagırarak sadelestırmıs oluurz.
// bundan sonra useContext(LoginContext) olarak kullandıgımız her yere useLoginContext yazarak bu ıslemın aynısını gerceklestırmıs olacagız.
// export const useLoginContext = () => {... aslında bız burada bır functıons yazıyoruz. use...ıle baslayanlar hooktur. bu hook-func. ıcerısınde baska bır hooku return edıyor. nav.js, PrıvateRouter.js, logın.js vs hepsınde degısıklıgı yapıyoruz.

//! 1-) Creating Login Context
export const LoginContext = createContext();

//! 2-) Providing
// const LoginProvider = (props) => {
//    props.children
const LoginProvider = ({ children }) => {
  const [user, setUser] = useState({ email: "", password: "" });

  const values = { user, setUser };
  return (
    <LoginContext.Provider value={values}>{children}</LoginContext.Provider>
    // <LoginContext.Provider value={{ user, setUser }}>{children}</LoginContext.Provider>
  );
};

//! Consuming Custom Hook
export const useLoginContext = () => {
  return useContext(LoginContext);
};

export default LoginProvider;
