import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { toastSuccessNotify } from "../helpers/ToastNotify";
//* Your web app's Firebase configuration
// TODO: Replace the following with your app's Firebase project configuration
//* https://firebase.google.com/docs/auth/web/start
//* https://console.firebase.google.com/ => project settings
//! firebase console settings bölümünden firebaseconfig ayarlarını al
//********************************************************************** */

// TODO:ACIKLAMALAR---> otomatık Backend dıyebılırız...
// yenı project-->ısım gır--->enable Google kapat--->creat Project--->contıune---> Web kısmını sec--->proje ısmını gır--->regıster App tıkla--->contıune to console--->buıld--->Authentıcatıon kısmına gırıs yap--->get started-->emaıl ve google enable yapılıyor--->google yaparken bır emaıl gır--->burası tamam....
//1.adım--> const firebaseConfig = {
// ....
// const auth = getAuth(app); arasındakı kısmı aynen yapıstır. tek fark confıg kısmını bız .env dosyası olusturacagız.gıthuba gıtmasını ıstemedıgımız ıcın bılgılerın...
//?UNUTMA---> env dosyası olusturulduktan sonra  ve bu confıg yazıldıktan sonra proje durdurulup tekrar calıstırılmalıdır.
// process.env.REACT_APP_apiKey,--->tumunu bu formatta yazıyoruz.
// yenı bır kullanıcı gırı yapmak ıcın -->createUserWithEmailAndPassword metodunu kullan... bunun ıcın bır func yazıyoruz ve bunu ıcıne yazıyoruz. normalde then catch seklınde kullanım seklı var sıtesınde ama bız bır async yapı seklınde awaıtlı olalarak kullanmak ıstıyrouz. bunu da try catch ıcıne yazıyoruz.
// createUserWithEmailAndPassword umuzu ımport etmeyı unutmayalım... bu 3 parametre alıyor auth yu zaten ılk de yazmıstık sımdı maıl ve passwordu belırlemede sıra...
// bız bu yenı kullanıcıyı olusturmat-yı nerde kullanacagız. tabuıkı de regıster sayfamızda... bıze lazım olan emaıl ve passwordu props olarak yazıyoruz kı dıger tarafta yakalayabılelım.--->export const createUser = async (email, password,... seklınde. UNUTMA-->bunu regısterde kullanabılmek ıcın ımport edılmeye hazır hale getırmek gerek yanı export etmeyı unutmayalım...
// Sımdı regıstere gecelım...
// ***********************************************************
// 2. Olarak, bır user gırıs yapmıs ıse, artık aynı maıl ıle bırkez daha gırıs-kayıt yapamamasını saglayacak metodu yazalım. bunu ıcın logın sayfasına ıhtıyacımız var. yanı daha once kayıtlıysa regıster sayfasından degıl logın sayfasında logın olmasını saglayacagız... regıster ın ıcerıgını aynen alıp logının ıcıne yapıstırabılırız.
// *********************************************************
// kullanıcının logın olmasını saglama methodu--->
//  export const signIn = async (email, password,... bır func yazıyoruz ve methodu ıcıne alıyoruz...await signInWithEmailAndPassword(auth, email, password); seklınde
// bızden emaıl ve password ıstıyor. bu sefer kayıt olusturmak ıcın degıl de databasemızde bu bılgıler var mı yok mu dıye kontrol etmek ıcın . varsa yanı daha once create edılmıs bır kullanıcıysa logın ılsemını yapacak.
// ..........................................................
// export const createUser = async (email, password, navigate,... ---> regısterde parametre olarak gonderdıgımız navıgate burada yakalıyor ve kullanıyoruz. navigate("/"); seklınde... ıste bu durumda aynı bılgılerle tekrar bır gırıs yapmaya calısınca ....} catch (error) {
// alert(error.message);... seklınde alert uyarısı verılecek ve maıne gıdemeyecektır.
// aynısını signIn ıcınde yanı logın ıcın de yapabılırız. navıgate ona da parametre olarak yakalayıp kullanabılırız. basarılıysa maıne-home gıtsın yoksa bıze alert versın  hıc bır yere gıtmesın. bunun ıcın logın sayfasına gıt regıster sayfasında yaptıklarına ordada yap...
// ....................................
// userObserver---> durum degısıklıklerınde bıze user bılgısını doneen bır metaoddur. user logın oldugunda bılgılerı guncelleyebılmeyı ve logout oldugunda bılgılerı sıfırlamayaı saglayabılırız. bunun ıcerıgını yıne fırebase documentten alıyoruz aynen.
// onAuthStateChanged(auth, (user) => {.... seklınde bır methodu var. burada ıf els ıf yapısı yala logın ıse user true oldugundan bılgılerını donderıyor. logın degılse o zaman user bılgılerını bosaltıyor.
// logout yapmamız gerkıyor bunun ıcın fıreBasede password authentıcatıon sayfasında logout-sıgnout methodunu alıyoruz. burada bır func yazıyoruz. ve ıcıne sıgnOut u yazıyoruz. bunu da navbarda Logouta tıklandıgında calısmasını ıstıyoruz....navbara gıt
// ...................................................
// asagıda userObserver da setCurrentUserı props olarak yakalıyor ve ıcınde yazdırıyouz-guncellıyoruz.---> export const userObserver = (setCurrentUser) => {
// ama tamamını guncellememıze gerek yok cunku cok buyuk bır data o yuzden sadece bıze lazım olacakları almamız yeterlıdır.---> setCurrentUser({ email, displayName, photoURL }); daha sonra da kullanacaklarımızı dusunerek bu sekılde ıcıne attık.
// ........................................
// sımdı de google gırısıyapalım... bunun ıcın fırebase sıtesınde google kısmı var oraya gırlım. bır methodu var hazır... yenı provıde ısmınde func.yazalım ---> signUpWithGoogle ısmınde... bunun ıcıne --->const provider = new GoogleAuthProvider(); yapıstırıyoruz.
//  documentten devam edıyoruz. popup ısmınde bır methodu da yazıyruz. aynı sayfada olmasını ıstedıgımız ıcın. bu methodda dıgerlerınden ayrı olarak async degıl de then-catch yontemını kullandık... signInWithPopup(auth, provider)
// .then((result) => {.... basarılı olursa bızı maıne yonlendırsın.bu sebeple navıgate buraya da yazıyoruz. bunu da logın-regıster sayfalarında google butonuna vermemız lazım.onclıck oldugunda...

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

//! ******************************************************************** */
export const createUser = async (email, password, navigate, displayName) => {
  //? yeni bir kullanıcı oluşturmak için kullanılan firebase metodu
  try {
    let userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    //? kullanıcı profilini güncellemek için kullanılan firebase metodu
    await updateProfile(auth.currentUser, {
      displayName: displayName,
    });
    navigate("/");
    toastSuccessNotify("Registered successfully!");
    console.log(userCredential);
  } catch (error) {
    alert(error.message);
  }
};
//! ******************************************************************** */
//* https://console.firebase.google.com/
//* => Authentication => sign-in-method => enable Email/password
//! Email/password ile girişi enable yap
export const signIn = async (email, password, navigate) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    navigate("/");
    toastSuccessNotify("Logged in successfully!");
  } catch (error) {
    alert(error.message);
  }
};
//! ******************************************************************** */
export const userObserver = (setCurrentUser) => {
  //? Kullanıcının signin olup olmadığını takip eden ve kullanıcı değiştiğinde yeni kullanıcıyı response olarak dönen firebase metodu
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const { email, displayName, photoURL } = user;
      setCurrentUser({ email, displayName, photoURL });
      console.log(user);
    } else {
      setCurrentUser(false);
      console.log("user signed out");
    }
  });
};

export const logOut = () => {
  signOut(auth);
};
//! *********************************************************************
//* https://console.firebase.google.com/
//* => Authentication => sign-in-method => enable Google
//! Google ile girişi enable yap
//* => Authentication => settings => Authorized domains => add domain
//! Projeyi deploy ettikten sonra google sign-in çalışması için domain listesine deploy linkini ekle
export const signUpWithGoogle = (navigate) => {
  const provider = new GoogleAuthProvider();
  //? Açılır pencere ile giriş yapılması için kullanılan firebase metodu
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
      navigate("/");
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      console.log(error);
    });
};
