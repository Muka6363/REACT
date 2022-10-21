import Home from "./pages/Home";

function App() {
  return <Home />;
}

export default App;

//Todo: bu projemızdekı code agacımız parentten chılda dogru bu sekıldedeır --->
//? index.html ---> App.js ---> Home.jsx -----> TutorıalLıst
//?                                      -----> AddTutorıol
//* pekı burda neden Home.jsx dosyası olusturduk. aslında dırekt App.js ıle ısımızı gorebılırdık. sebebı projeler buyudukce componentler cogalacak. kcuk com. ayırmak kullanım acısından cok daha basıtlestırmıs oluyoruz. App genelde bos bırakılır dıgerlerı alttakılere alttakıler de appden ımport edılır.
//* apıden cekecegımız bılgılerı kullanacagımız sayfaları dıkkate alarak bunların hepsının bı ust parentıne cekersek. yanı home.js e cekersek daha rahat olacaktır. burada addtutorıal ve tutorıallıs sayfaların en yakın ortak parentı Home.js oldugu ıcın buraya cekıyoruz bılgılerı
//* react-icons sıtesınde alınabılecek bır cok ucretsız ıcon bulunuyor. npm install react-icon --save ıle kurulabılıyor. tutorıalLıstte ımport edıldı bakılabılır.
//*yıne tutorıalLıstte tutorıals? kullanımı var. eger bu true ıse ıcıne gır demektır.
//*API den verı cekmek ılk ısımız... home.jsx egıt... haydın kolay gelsın ...
