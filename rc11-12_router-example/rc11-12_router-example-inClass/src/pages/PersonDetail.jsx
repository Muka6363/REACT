import { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import NotFound from "./NotFound";

// TODO: buradakı useParam hooku dıger taraftan gonderılen degısken propsu yakalamak ıcın kullanılır. const { id } = useParams(); seklınde.
// bu sayfada her bır kısının ayrıntılı bılgılerını sergıleyecegız. bunun ıcın

//1.yontem---> bu kısılerın bılgılerını bız zaten people.jsx de fetchıle cekmıstık. burada bır kez daha APıden verı cekmek yerıne people.jsx dekılerı buraya cekebılırız. bunun ıcın --->// onClick={() => navigate(`/people/${id}`, { state: person })} state keyıne person nun kendısını atayarak... ordan atıp burada tutuyoruz...bunu da useLocatıon hookuyla yapıyoruz.
// const { state: person } = useLocation(); bu sekılde alıp ıstedıgımız yere basabılırız. ancak bunun dezavantajı--->kullanıcı dırekt browaerdan bu lınkı yazarsa serverdan bu verı gelemıyor. cunku bız bu verıyı people sayfasında hatırlayın onclick ıle gonderdık. yanı mutlaka clıck olması gerekıyor kı bu verıler buraya gelebılsın.
//2.yontem---> yenıden fetch yapmak. ıd uzerınden... yanı kullanıcı dırekt lınkı gırdıgınde verınnı gelmesını ıstıyorsak ıd ıle fetch yaparak apıden verı cekebulırız.
// dıger taraftan ıd yı gondermıs burda da useParamla yakalamıstık. aynı sekılde buradan devam edelım(bu yontemı kullanacaksak state:oersonu ıptal edecegız...UNUTMa).
// Aynen ılk APIden verı cekecegımızde yaptıgımızı burdada yapıyoruz. hatta onu ordan kopyla buraya yapıstır. burdan duzeltmeler yapılır.getPerson olarak state vecekme ıslemı yapılır.  fetch(`https://reqres.in/api/users/${id}`) seklınde urlmızı ıd eklemek suretıyle duzeltıyoruz. hatta burda farklı olarak eger fonk baska yerde cagırılmayacaksa burda fetch ıslemını dırekt dıdmount ıcerısınde yapabılırız. useEffect ıcınde.
// {person?.first_name} {person?.last_name} ? eger bu varsa bunun fırst - last namenı bul... bunu ypıyoruz cunku ekrana hata vermesın ıstıyoruz.

// en attakı ıkı button:---> burda home tıklandıgında home sayfasına gıtmek ıcın navıgate kullanılabılır. bıldıgınız uzere yukarıda ımport edıp asagıda bır degıskene atıyoruz ve ıstedıgımız yerde kullanıyoruz bu navıgate(). ıcıne parametre alacagı ıcın arraw func. seklınde kullanılıyor. hone ıcın "/"; go back ıse  alacagı -1 -2 seklındekı parametrelerle bır oncekı veya ıkı oncekı sayfaya donebılıryor.
const PersonDetail = () => {
  const navigate = useNavigate();

  //! Linkteki parametreyi almak icin useParams Hook'u kullanilabilir.
  const { id } = useParams();
  console.log(id);

  //! navigate ile gonderilen state'i yakalamak icin useLocation Hook'u kullanilabilir.
  //! Bu durumda veri, state ile geldigi icin yeniden fetch yapilmasina gerek kalmaz
  // const { state: person } = useLocation();
  // console.log(person);

  const [person, setPerson] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://reqres.in/api/users/${id}`)
      .then((res) => {
        if (!res.ok) {
          setError(true);
          setLoading(false);
          throw new Error("Something went wrong");
        }
        return res.json();
      })
      .then((data) => {
        setLoading(false);
        setPerson(data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(person);

  if (error) {
    return <NotFound />;
  }

  if (loading) {
    return (
      <div className="text-center">
        <h3>Data Loading</h3>
      </div>
    );
  }

  if (!error && !loading) {
    return (
      <div className="container text-center">
        <h3>
          {person?.first_name} {person?.last_name}
        </h3>
        <img className="rounded" src={person?.avatar} alt="" />
        <p>{person?.email}</p>
        <div>
          <button
            onClick={() => navigate("/")}
            className="btn btn-success me-2"
          >
            Go Home
          </button>
          <button onClick={() => navigate(-1)} className="btn btn-warning">
            Go Back
          </button>
        </div>
      </div>
    );
  }
};

export default PersonDetail;
