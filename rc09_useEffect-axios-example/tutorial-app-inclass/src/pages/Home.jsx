import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";
import axios from "axios";
import { useEffect, useState } from "react";

// Todo: apımızı urlsını yazarak cekıyoruz. bu cektıgımız verıyı bır data ısımlı degıskene atıyoruz. axios ıle cekmek pıyasada en cok kullanılan yontem.
// bu datayı asagıdakı AddTutorial ve TutorialList e gonderebılmemız ıcın bunun global bır degısken halınde olması gerekıyor. bu yuzden bunu bır staten ıcıne atıyorumz SetTutorialList bunun ıcın olusturduk. gelen verıye baktıgımız zaman [{..}, {..}.....] json formatında bır arraydır. bu sebeple bu statetın baslangıc degerı olarak [] olarak verdık. ama dıkkat, bu bu verı ham halde oldugu ıcın (bu arada bu verı data olarak apıcıler tarafından bır keye value olarak tanımlanmıs. bız de bu key olan data nın valuesıne ulasmak ıcın kendımız de aynı ısımle ona ulasıyoruz. yanı data.data aslında ama bız desct yaptıgımız ıvcın dıret data yazıyoruz.) destc. yaparak arraya ulasabılırız. {data} seklınde yazıyoruz.
// axios kullanınca, bu otomatık verıyı jsonlastırıyor.
// daha sonra bu halıyle durmadan refresh state guncellemesı olarak tekrar tekrar yaparak sosnsuz donguye gırdıgı ıcın bız useEffect dıdmount yapmamız lazım. yanı apıden sadece bır kez verıyı cekmıs olsun ve cektıkten sonra da sadce 1 kez render edılsın .
//  sımdı elımızde var olan verıyı alt componentlere props yontemıyle gonderelım...

const Home = () => {
  const [tutorials, setTutorials] = useState([]);

  const url = "https://tutorials-api-cw.herokuapp.com/api/tutorials";

  const getTutorials = async () => {
    const { data } = await axios(url);
    console.log(data);
    setTutorials(data);
  };
  //dıdmount---> burada acılısta sadece bır kez cekılecek.
  useEffect(() => {
    getTutorials();
  }, []);

  return (
    <>
      <AddTutorial />
      <TutorialList />
    </>
  );
};

export default Home;

// import AddTutorial from "../components/AddTutorial";
// import TutorialList from "../components/TutorialList";
// import axios from "axios";
// import { useEffect, useState } from "react";

// const Home = () => {
//   const [tutorials, setTutorials] = useState([]);

//   const url = "https://tutorials-api-cw.herokuapp.com/api/tutorials";

//   //? CRUD: (GET-READ)
//   const getTutorials = async () => {
//     try {
//       const { data } = await axios(url);
//       console.log(data);
//       setTutorials(data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   //? didmount
//   useEffect(() => {
//     getTutorials();
//   }, []);

//   return (
//     <>
//       <AddTutorial getTutorials={getTutorials} />
//       <TutorialList tutor={tutorials} getTutorials={getTutorials} />
//     </>
//   );
// };

// export default Home;
