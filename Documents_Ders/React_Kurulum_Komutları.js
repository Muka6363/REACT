//! REACT KOMUTLARI:
// npm veya yarn kullanımı;
// nmp i / install
// yarn add

//? REACT KURMAK İÇİN;
// npm install --save react react-dom

//? SIFIRDAN PROJE OLUŞTURMAK İÇİN;
// yarn create react-app my-app --> var olan dizine my-app isimli proje oluşturur.
// veya npx create-react-app my-app
// yarn create react-app . var olan dizin içine yeni klasör eklemeden proje oluşturur.
// yarn start

//? STARTER PROJEYİ (Node.Module olmayan proje)ÇALIŞTIRMAK İÇİN
// yarn / npm install /
// yarn start

// NPM GÜNCELLEME:
// yarn add -g npm
// veya
// npm i -g yarn

//? SASS / SCSS İÇİN;
// yard add sass veya npm i sass
// import "./scss/App.scss";  -> scss dosyası nerde ise
// @import "./reset", "./variables"; --> parçalı scss dosyasını import etmek için

//? BOOTSTRAP İÇİN;
// yarn add bootstrap veya (npm install bootstrap)
// import "bootstrap/dist/css/bootstrap.min.css"; --> CCS İMPORT LİNKİ-index.js ye

//? REACT - BOOTSTRAP İÇİN;
// yarn add react-bootstrap bootstrap veya (npm install react-bootstrap bootstrap)
// import "bootstrap/dist/css/bootstrap.min.css"; --> CCS İMPORT LİNKİ-index.js ye

// import {Container} from "react-bootstrap"  --> container eklemek için
// ya yukarıdaki gibi süslü içinde
// import Container from "react-bootstrap/Container"; --> veya böyle, (daha doğru kullanım bu)

// BOOTSTRAP KURDUKTAN SONRA, AÇILIR MENULER VB ÇALIŞMASI İÇİN;
// script linklerini index.htmlede body kapanış yagı üzerine ekle,

// <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous"></script>

// <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.min.js" integrity="sha384-IDwe1+LCz02ROU9k972gdyvl+AESN10+x7tBKgc9I5HFtuNz0wWnPclzo6p9vxnk" crossorigin="anonymous"></script>

///? UUID EKLEMEK İÇİN;
// yarn add uuid --> yükle
// import {v1 as uuid} from "uuid" --> import et
// key = { uuid() }  --> kullan

//? FONTAWSOME İÇİN;
// index.html'de head tagı içerisine;

// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />

//? Netlify-Deploy:
// 1- Manual Deploy:
// yarn run build komutu çalışınca klasör altında build klasörü oluşuyor. Bunu sürükle bırak yöntemi ile ilgili yere sürükle.
// 2- Githup ile:
// a-önce proje Githup reposu oluşturulur.
// b- Add New site'den Import an existing project seçilir.
// c- githupdan proje seçilir ve Deploy edilir.
// ç- domain settings'--> options 'den isim değişikliği yapılır.

//? REACT-Icons
// (npm install react-icons --save) veya
// (yarn add react-icons) --> yükle
// import { FaBeer } from 'react-icons/fa'; --> import et.

//? AXİOS KURULUMU
// yarn add axios
// import { axios } from "axios"

//? React uygulamalarını GitHub Pages ile yayınlamak

//  1. npm install gh-pages --save-dev
//  2. package.json dosyamızın içerisine bazı özellikler eklememiz gerekli.
//  2.1.Bunlardan ilki homepage özelliği;
//  "homepage": "http://kullaniciadi.github.io/repo-ismi"
//  2.2. Ekleyeceğimiz ikinci özellik ise script komutlari;
//  “scripts”: {
//*…react scriptleri,
//  "predeploy": "npm run build",
//  "deploy": "gh-pages -d build"
//  }
//  3. deploy komutunu çalıştırmadan önce uygulamayı "npm run build" komutu ile build etmeyi unutmayın.
//  4. Son adımımız uygulamamızı deploy edip GitHub’a göndermek. Bunun için terminalde uygulama dizinindeyken;
//  "npm run deploy"
//  komutunu yazıyoruz.
