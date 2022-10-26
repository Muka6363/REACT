import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
// TODO: burada API den aldıgımız verıyı map yardımıyla asagıdakı formata gore dom a basıyoruz. sımdı bu her bır personelın resmıne tıkladıgımızda yenı bır sayfa acılmasını ve bu kısının daah a detaylı bılgılerıne ulasmak ıstedıgımızıde bne yapacagımıza bakalım. bunu ıcın personDetaıl sayfası olusturuyrozu.
//  burada resme tıklandıgında bu dedıgımız ılsem olacagı ıcın onClıck ozellıgı vermelıyız reme de verılebılır onun dıvıne de ...
// !Dıkkat: bunun ıcın ıste tıklamdıgında yenı bır sayfa olusturacagı ıcın bızım burada useNavigat hookunun kullanmamız gerekıyor. bu hooku import ettıgınızde sıze bır fonksıyon donderıyor. bu fonksıyonu ---> const navigate = useNavigate(); seklınde degıskene aktarıyoruz ve asagıda onclıckte kullanıyoruz.
// kullanımı: onClick={() => navigate(`/people/${id}`)} arrow functıon seklınde kullanılır./people ve devamında tıklanan resmın ıdsı eklendıgınde dırekt o kısının detaylı bılgılerının oldugu sayfaya gıder.
// ancak bunu yaptıktan sonra App.js de   <Route path="people/:id" element={<PersonDetail />} /> seklınde bı route olusturmamız gerekıyor. yoksa bu sekılde bır sayfa bulamayacaktır. :id seklınde yazılmasının anlamı --->bunu bır degısken oldugunun gostergesıdır.
// ...{ state: person })}seklınde kısının bılgılerını dıger sayfaya gonderebılıyoruz. burada state yerıne baska bır ısım kullanamayız key ısmı state value de gondermek ıstedıgımız verıyı yazıyoruz. burdakı personun bılgılerını gonderecegımız ıcın person yazdık.

const People = () => {
  const [people, setPeople] = useState([]);
  const navigate = useNavigate();

  const getPeople = () => {
    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((data) => setPeople(data.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getPeople();
  }, []);

  return (
    <div className="container text-center mt-4">
      <h1>PEOPLE LIST</h1>
      <div className="row justify-content-center g-3">
        {people?.map((person) => {
          const { id, first_name, last_name, avatar } = person;
          return (
            <div
              key={id}
              className=" col-sm-12 col-md-6 col-lg-4"
              type="button"
              // onClick={() => navigate(`/people/${id}`, { state: person })}
              //! absolute path
              // onClick={() => navigate(`/people/${id}`)}

              //! relative path
              onClick={() => navigate(`${id}`)}
            >
              <img className="rounded" src={avatar} alt="img" />
              <h6>
                {first_name} {last_name}
              </h6>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default People;
