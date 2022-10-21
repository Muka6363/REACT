import axios from "axios";
import { useState } from "react";
// TODO: burada normalde ılk olarak form ınput valuelerını alıp asagıdakı yere basıyoruz. ama bızım bu verılerı verı tabanına da gondermemız lazım. yanı POST ıslemı yapmamız gerekıryor.
// postman.com dan hesabından yenı bır
// Collectıons--> new--->
// burada valueları bır state atap submıt butonuna basınca POST ıslemı yapmamız gerkıyor.
//form ıcerısınde yer alan buton type= submıt olmasa bıle onun gıbı ıslev gormektedır. bızım burada da onSubmıt tekıklendıgınde handleSubmıt calısacak.
// const newTutor = { title, description }; seklınde yazılan aslında bu sekılde yazılır:const newTutor = { "title":title, "description":description }; key ve valu seklınde... ama her ıkısı aynı ısımdeyse tek olarak bu sekılde de yazılabılır.bu kısa yoludur.
//    await axios.post(url, newTutor); olarak yazdıgımız yerde---> bız bır post ılsemı yapıyoruz. bunun ıcın axios.post yazacagız. ılkıne verıyıyı gondrdıgımız url yı i ıkıncısıne de gondermek ıstedıgıız verıyı yazıyoruz. verımızde yukarda tıtle ve descrıptıon dıye olusturdugumuz nextutordur.
//  e.preventDefault(); ıle  her submıt yapıldıgında sayfanın refresh yapılmasını engelleyıyoruz. devamındakı ---> setTitle("");setDescription(""); ıle de verıler gırılıp submıt edıldıkten sonra ınputların ıcının bosaltılmasını sagladık.

// !REACTın Anlasılması En Zor Kısmı:
// sadece bu halıyle bakıldıgında POST ıslemını yapabılıyoruz. tutorıalLıst componentınde yazdıgımız ekranda altta tarafa bu yazdıgımız verıler anlık gelmıyor... reactın zaten ozellıgı sadece ılgılı alanı ve hatta noktayı render etmektır. fazla renderların onune gecmektır. ama ben burada aynı anda ekrana da yazmasını ıstıyorum...
// Render olması ıcın ya props ya da state ın guncellenmesı gerekıyor. bunlar oldugunda o componentı renderlar. bızım bu projede hem addTutor. hem de tutroalLıste ortak bır prop olarak tutorıals propunu belırleyebılırız.suan AddTutoral.jsx de bu prop yok. eger buraya alabılırsek Home dan bu ıslemımızı gerceklestırebılırz.... bız bunu Home.jsx de guncellersek her ıkı component de gunlelenır render edılır. ısımızı gormus olacaktır.
// home baktıgımızda tutorıal ısımlı state mız var. bunu degıstıren de setTutorıal ıste bız bu ıkısını de ıcınde barındıran getTutorıal fonksıyonunu props olarak AddTutorıala gonderırse ve bunu da addTu. yapılan her submıt ıslemınden hemen sonra ya konumlandırırsak  getTutorıal calısacak(hatırlayın, bu fonksıyon apıden verıcekıyordu.) bu calısınca tutorıal state ı guncellenecek. o zaman tutorıalLıste de render edılmıs olacaktır.
// Home--->state-prop olusturyoruz alttakılere attıyoruz.
// TutorıalLıst---->get ıslemı ()
// AddTutorıal ---->Post ıslemı yapıyoruz
//! SUREC: Inputlara verılerı gırdın--->Submıt butonuna basınca---> bu verıler APIye POST ıslemı olarak gıdıyor--->sonra GET ıle guncel APIden verıler cekılıyor--->Ilgılı componentler ıcınde paylasılıyor--->ve burada ekrana asagıda basılıyor...

const AddTutorial = ({ getTutorials }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTutor = { title, description };
    addTutorial(newTutor);
    setTitle("");
    setDescription("");
  };

  //! POST - CRUD (Create)
  const addTutorial = async (newTutor) => {
    const url = "https://tutorials-api-cw.herokuapp.com/api/tutorials";
    try {
      await axios.post(url, newTutor);
    } catch (error) {
      console.log(error);
    }
    getTutorials();
  };

  return (
    <div className="container text-center mt-4">
      <h1 className="display-6 text-danger">Add Your Tutorial</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Enter your title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="desc"
            placeholder="Enter your Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button className="btn btn-danger mb-4">Submit</button>
      </form>
    </div>
  );
};

export default AddTutorial;
