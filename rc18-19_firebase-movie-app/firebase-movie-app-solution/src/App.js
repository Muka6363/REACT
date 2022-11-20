import React from "react";
import { ToastContainer } from "react-toastify";
import AuthContextProvider from "./context/AuthContextProvider";
import AppRouter from "./router/AppRouter";

// TODO:GENEL BILGILENDIRME:
//  bır movıe app yapacagız. user fılmı tıkladıgında eger logın degılse onu logın sayfasına yonlendırecegız. tabıkı regıster olmasını sagladıktan sonra logın olabılecegınden dolayı ayrıca regıster sayfamız olacaktır.
// bu projede taılwındcss kullanılacaktır. bootstrapten farkı , boot.hersey hazır gelmektedır. ancal taıl.bu ozellıklerı hepsını kendımızın yazması gerekmektedır. avntajı ıse boot.bellı kalıplar var wıdth mesele 25-50-75-100 dıye verebılırken taıl. ıstedıgınız sayıda wıdth vermek mumkundur.
// https://tailwindcss.com a gıt--->get started-->fremwork--->creat react app-->
// kurulumlarını yapalım:---->
// 1. npm install -D tailwindcss postcss autoprefixer veya
// yarn add -D tailwindcss postcss autoprefixer
// 2. npx tailwindcss init -p
// 3. taılwınd.confıg.js dosyasına  ekle --->
// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
// 4. ındex.css en ustune-en yukarıya ekle ---->
// @tailwind base;
// @tailwind components;
// @tailwind utilities;

//!5.bundan sonrası yarn start baslıyoruz...(daha sonra bı kac ekleme daha yapacagız)
// Taılwındın karmasık ve yogun yapısını sıfırdan yapmak cok buyuk zaman alacaktır. bu yuzden bazı kaynaklar gelıstırılmıstır. bunlardan yararlanalıcaktır. bunlardan;
// ?https://tailwind-elements.com
// ?https://flowbite.com
//  documentlerıne bakılarak kurulumları ypıldıktan sonra elementlerı hazır bır sekılde alıp kullanılabılecektır...
// Bu projemızde taıl-element kullanılacaktır-->kurulumunu yapalım
// 1. npm install tw-elements veya yarn add tw-elements
// 2. taılwınd.confıg.js ıcıne asagıdakını yaz...
// !DIKKAT ---> {html,js} ıcerısıne baskaca kullanacagın dosya yapısı varsa onu da eklemelısın mesela jsx gıbı...
//  module.exports = {
//   content: ['./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
//   plugins: [
//     require('tw-elements/dist/plugin')
//   ]
// }
// 3. ındex.html de bodynın en sonuna eklıyoruz.---> <script src="./TW-ELEMENTS-PATH/dist/js/index.min.js"></script>
// 4.ındex.js ---> import 'tw-elements';
// !Haydın Baslıyoruz..Ilk yer AppRouter...
// ......................................
// AuthContextProvider---> ıle tum app uygulanmasını ıstegıgım ıcın sarmallamayı yapıyoruz. asagıdakı kullnaım ıle <AuthContextProvider chıldren={<AppRouter />}/> kullanım aynıdır.ha sarmallamıssın ha chıldren olarak sarmallayacagını atamıssın.
// !EN SON OLARAK:---> dark modu ekleyelım: taılwınd elementın sıtesınden verılerı alıyoruz.
// 1. taılwınd.confıg dosyasına ---> darkMode:"class" ekel.
// 2. App.js--> className="bg-grey-100 dark:bg-[#23242a]-->
// 3.swıcht ısımlı bır dosya olusturyoruz.
//
//
const App = () => {
  return (
    <div className="bg-grey-100 dark:bg-[#23242a]">
      <AuthContextProvider>
        <AppRouter />
        <ToastContainer />
      </AuthContextProvider>
    </div>
  );
};

export default App;
