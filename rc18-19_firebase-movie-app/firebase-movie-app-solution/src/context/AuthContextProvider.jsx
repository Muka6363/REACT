import React, { createContext, useEffect, useState } from "react";
import { userObserver } from "../auth/firebase";

// TODO: ılk olarak create edıyorduk daha sonra kullanıyoruz...
// export const AuthContext = createContext();---> ımport edıyoruz ıstedıgımız ısmı verıyoruz.
// daha sonra uygulanmasını ıstedıgımız herseyı bunun provıder ı ıle sarmallıyoruz. hangısı ??? tum chıldrenlarını sarmallıyoruz. bu yuzden props.chıldren veya dırekt desctr. yaparak ({ children }) sekılde yazabılıyoruz.
// component halıne getırdıgımız bu yapıyı nerelerde kullanacaksa onu bunun sarmallamam gerekıyor. bu ıslemı nerdeyse tum sayfalarda kullanabılecegım ıcın genel bır alan olan appjs veya ındex js yı sarmallayabılırım. bız appjsyı sarmallayacagız.
//  sımdı olusturdugumuz bu yapıda mevcut usermız ıcın bır state tanımlayalım---> const [currentUser, setCurrentUser] = useState(false); seklınde... bslangıcta false kuralım. ve asagıya parop olarak tanımlayalım.<AuthContext.Provider value={{ currentUser }}>
// daha sonra userObserver da guncellemeyı ayarlıyoruz. yanı bır user gırıs yaparsa setCurrentUSer ıle guncelle. fırebase gıdelım

export const AuthContext = createContext();
//* with custom hook
// export const useAuthContext = () => {
//   return useContext(AuthContext);
// };

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(false);
  console.log(currentUser);

  useEffect(() => {
    userObserver(setCurrentUser);
  }, []);
  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
