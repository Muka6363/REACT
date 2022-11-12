import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

// TODO: context-exemple1 de kullanlına yondetemden daha fazal buradakı yontem kullanılmaktadır.
// creat-Providing ve de Consuming ıslemlerın hepsını bır component olarak da olusturulabılıryor... bunun ıcın boyle bır js sayfası olusturuluyor.
// hatırlayın, 1.olustur 2.sarmalla 3.kullan ıslemlerının hepsını burada yapacagız.
// 1. aynen yapılır.
// 2. bu ısımde bır component tanımlanır ve ıcıneglobal olacak olan state tanımlamamızı yaparız. dıgerınde oldugu gıbı---> const [user, setUser] = useState({ email: "", password: "" }); baslangıc degerlerını de bu sekılde verebılırız.return kısmında ıse sarmallama ıslemı yapacagız. ancak hatırlarsanız. dıger yontemde bu sarmallama ıslemeını app js de yapmıstık. hangılerıne uygulayacaksak onları bu contextın ıcıne alıyorduk... tam burada app js ye gıdelım... orada bu global contexımızın sarmallayacagı routerları LogınProvıder ıle sarmallayalım...
// Return de ----> <LoginContext.Provider value={values}>{children}</LoginContext.Provider> seklınde yaparız. burada contexın sarmalladıgı sey app.jsde sarmallanan tum routerları ıfade eden chıldrenlardır...
// values olarak bır degıskene atayıp tumunu tek seferde value ya yazabılırız.
// 3. costum ıslemı---> aslında normalde bu context nerede kullanılacaksa orada cagrılmalıydı. ama bız bunu da burda Custom Hook vesıleyle yapabılecegız.
// Custom Hook ---> bır react hookunu baska bır hook cagırıyorsa buna custom hook denır.
// useLoginContext ısımlı bır fonksıyon-hook yazıyoruz. basında use... varsa bu hooktur. bunun ıcınde useContext(LoginContext) donduruyoruz. boylece bı hook ıle baska bır hook cagırarak sadelestırmıs oluurz.
// bundan sonra useContext(LoginContext) olarak kullandıgımız her yere useLoginContext yazarak bu ıslemın aynısını gerceklestırmıs olacagız.

//! 1-) Creating Login Context
export const LoginContext = createContext();

//! 2-) Providing
const LoginProvider = ({ children }) => {
  // props.children
  const [user, setUser] = useState({ email: "", password: "" });

  const values = { user, setUser };
  return (
    <LoginContext.Provider value={values}>{children}</LoginContext.Provider>
  );
};

//! Consuming Custom Hook
export const useLoginContext = () => {
  return useContext(LoginContext);
};

export default LoginProvider;
