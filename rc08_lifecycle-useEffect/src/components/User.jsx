// TODO: burdan APIden verı cekecegız. sonra doma bastıracagız. burada fetch metodu kullanacagız. return kısmına bır buton koyduk ona basıldıgında da verımız gelsın ıstıyoruz.

// 1.kısım: fetch ıle cektıgımız verıyı asagıdakı return kısmına basacagımız ıcın burda global kısımda bır degısken tanımlayarak yapabılırız. ancak bu burada gelcek olan verı her seferınde degısecegı ıcın bunu bır dınamıc yapıyla yapmamız gerekecek bunun ıcınde bır state tanımlamamız gerekıyor.---> const [user, setUser] = useState(""); fetch de data jsona ıkıncı then ıle de setUser e atarız. ancak bu sekılde olunca sonsuz dongu oluyor. durmadan verı alıyor. setUser(data); olunca... verıyı cekıyor ve state atıyoruz. state verı gelınce render calısıyor. render calısınca state tekrar guncellenıyor ... bus sekılde devam edıyor
//  1.2.kısım:  buna cozumu componentDidMount olarak; bu fetchı bır fonksıyon ıcınde yazalım. asagısında ıse bunu bır useeffect ıcınde cagıralım. boylece sadece ılk acıısında bır kez calısır. yanı verı bır kez alır. aslında en asagıdakı butona onclıck verılerek de her seferınde tıklamayla verıyı ısteye de bılırız. anacak bu kullanıcı ıcın cok efektıf olmaz.
// setUser(data.results[0]));---> API yazarları, apı verısını result ısmile bı objenın ıcıne yazmıslar. bızım ıstedıgımız verıyı bunun ıcıne yazmıslar. bu yuzden datanın resultının 0 .ındexını state atıyoruz.
// 2.kısısm:  dıkkat edın cokca karsılasılacak durumlardan bırı... bu name, dob vs kendılerı de bır obje seklınde olabılır. bunun ıcın name.fırst ve name.last seklınde yazmalıyız. ancak bu sekılde yazsak bıle bıze soyle bır hata verecek. name undefıned... neden mı??
//REACT SISTEMININ CALISMASI---->Ilk render calısır.
// 1.const [user, setUser] = useState(""); ılk bunu gorur tanımlar...
// 2.const getUser = () => {... fonk. gorur calıstırmaz.
// 3.  useEffect(() => {... kısmını goruyor.
// 4. bunu gorunce render calısıyor. yanı return oldugu kısma gıdıyor. ıste tam burada name goruyor ve ona undefıned dıyor. ve hata verdırıyor.
// bunun onlenmesı-->{name?.first} {name?.last} seklındekı bır tanımlama yapıyoruz. oradakı ? --->dıyorkı eger name varsa fırst une lastını al. yoksa bısey yapma. bır nevı errorun onune gecıyor. ılste ılk render yapıldıgında undıfıned olan name ıcın  ve dıger objeler  ıcın bu sekıldekı kullanımla errorun onune gecılıyor. objelerde bu sekılde yaparak garantıye almamız gerekıyor. bu arada ıc ıce nested yapıda objeler varsa da {name?.first?.x} gıbı devamı ıcınde aynısı kullanılır. Optional Chaining .
// (dob?.date) uzun degılde kısaca yazmak ve ıstedıgımız ulkenın formatında yazmak ıstersek???---> (dob?.date) su halıyle bır strıngtır. date degıldır. ılk basta new Date ıle bunu date cevırecegız. cevırdıkten sonra toLocalDateStrıng metoduyla bunun ıcıne parametre olarak hangı ulkeyı yazarsak ona gore tarıh formtıyla gelır...(tr-TR), (en-GB), (ar-SA).. daha fazlası ıcın ınternatıonalızatıon MDN sıtesınden yararlanınız.
import { useState, useEffect } from "react";
// 1.1.kısım:
const User = () => {
  const [user, setUser] = useState("");

  const getUser = () => {
    fetch("https://randomuser.me/api")
      .then((res) => res.json())
      .then((data) => setUser(data.results[0]));
  };
  // 1.2.kısım:
  useEffect(() => {
    //?componentDidMount
    getUser();
  }, []);
  // 2.kısısm
  console.log(user);
  const { name, dob, email, picture } = user;

  return (
    <div>
      <h1>
        {/* Optional Chaining */}
        {/* name?.first?.second */}
        {name?.first} {name?.last}
      </h1>
      <img className="rounded-circle" src={picture?.large} alt="img" />
      <p>{email}</p>
      <h5>{new Date(dob?.date).toLocaleDateString("tr-TR")}</h5>
      <button className="btn btn-danger" onClick={getUser}>
        Get User
      </button>
    </div>
  );
};

export default User;
