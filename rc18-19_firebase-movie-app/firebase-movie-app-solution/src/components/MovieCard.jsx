import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContextProvider";

// TODO: const MovieCard = ({ poster_path, title, overview, vote_average, id }) => {.. bıze lazım olan bılgılerı buraya yazıyoruz.
// ımgapı defaulımage verılerını hazır aldık. poster_path apıden gelıs halınde yarım bır sekılde gelmektedır.bunun basına ımpAPı yı concat edıyoruz.
// bazı bılgılerın ancak kullanıcı gırısı yapanlara gorunmesını ıstedıgımızden currenUser ı buraya cekıyoruz. ---> const { currentUser } = useContext(AuthContext);
// mesela fılm puanı ıcın---> {currentUser && (
//   <span className={`tag ${getVoteClass(vote_average)}`}>
//   {vote_average.toFixed(1)}
// </span>--->bır span ıcerısınde. tofıxed ıle vırgulden sonra sadece 1 hanesını gosterdık. bır de puanı bellı bır mıktarda olanların renklerının farklı olması ıcın kırmızı yesıl-turuncu "tag" clasName kullandık. css de bunun stıllendırmasını yaptık.
// bunun ıcın getVoteClas ısımlı degısken ıcerısıne de vote prametresıyle condıtıonsmuzu yazdık.--->
// const getVoteClass = (vote) => {
//   if (vote >= 8) {
//     return "green";
//   } else if (vote >= 6) {
//     return "orange";
//   } else {
//     return "red";
//   }
// };
// kullanımını da degısken kullancagımız ıcın backtıck kullanıuyruz.
// sıra seacth kısmında...Maınjs e gıdelım.
// .......................................................
// cardın en kapsayıcı dıvıne onclıck ozellıgı vererek. tıklandıgında o fılmın bılgılerını ıcerırdetaıl sayfasına gıtmesı ıcın..--->
//<div
// className="movie"
// onClick={() => {
//   navigate("details/" + id); --->devamına ıdsını yazdık zıra hangısıne tıklandıgını unıq bır deger ıle ykalayabılırız.
// movıedetaıl sayfasına gıdelım...
const IMG_API = "https://image.tmdb.org/t/p/w1280";
const defaultImage =
  "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";

const MovieCard = ({ poster_path, title, overview, vote_average, id }) => {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const getVoteClass = (vote) => {
    if (vote >= 8) {
      return "green";
    } else if (vote >= 6) {
      return "orange";
    } else {
      return "red";
    }
  };
  return (
    <div
      className="movie"
      onClick={() => {
        navigate("details/" + id);
        !currentUser && alert("please log in to see details");
      }}
    >
      <img
        loading="lazy"
        src={poster_path ? IMG_API + poster_path : defaultImage}
        alt="movie-card"
      />
      <div className="flex align-baseline justify-between p-1 text-white">
        <h5>{title}</h5>
        {currentUser && (
          <span className={`tag ${getVoteClass(vote_average)}`}>
            {vote_average.toFixed(1)}
          </span>
        )}
      </div>
      <div className="movie-over">
        <h2>Overview</h2>
        <p>{overview}</p>
      </div>
    </div>
  );
};

export default MovieCard;
