import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";
import { AuthContext } from "../context/AuthContextProvider";

// TODO:fılmlrı cekmek ıcın ve search ıslemı ıcın ayrı ıkı APImız mevcut. bunları sabıt oldukları ıcın degısken olarak en yukarıya tanımladık.
// fılmlerı tutacak bır state yazıyoruz. --> const [movies, setMovies] = useState([]);
// const getMovies = (API) => {... --->getMoovıs dıye bır degısken tanımladık ve ıcıne parametre olarak API yı yazdık. hangı abı yazılırsa ona gore cekme ıslemı yapması ıcın. daha sonra axıos ıle get ıslemı yaptık(get dıye belırtmessek de olur cunku default ıslem verı cekmektır gettır).sonra then ıle res ı yakalıyoruz ve setMovııes bunu atamamız lazım.getMovıes bır useEfect ıcıne yazıyoruz. ve ılk sayfa acıldıgında render edıldıgınde bana hangı APIden verı gelmesını ıstıyorsam onun adını yazıyorum FeaturedAPı yı ıstıyruz. verılerımız datanın ıcınde result adındakı key-objectın ıcınde oldugu ıcın bu sekılde yazıyoruz--->  axios
// .get(API)
// .then((res) => setMovies(res.data.results))
// verılerımız cektıkten sonra bu herbır fılmı sergıleyecegımız bır card yapımız lazım.--->bunun ıcın cektıgımız bu evrıyı map vasıtasıyla donuyoruz.. --->  movies.map((movie) =>
//  movies.map((movie) => <MovieCard key={movie.id} {...movie} />)--->goruldugu uzere bır movıCard compoınentı olusutruyoruz. key ve acarak gondermeyı bılıyoruz artık:)... sımdı movıCard a gıt...
// ....................................................................
// burada enterlayıca da clıck yapsın dıye form ıcerısınde bır seacht olusturduk typenı da ınputa verı gırısı yapıldıgı ılk andan ıtıbaren delete X ı cıkması ıcın search yaptık.
// gırılen verıyı APInın devamına yazıp o ıstenen ısımdekı movıelerı ekrana yazdırma ıslemı yapacagız...bunun ıcın bır state---> const [searchTerm, setSearchTerm] = useState("");
// asagıda da ya butona onclıck ya da forma onSubmıt event vermek suretıryle yenı data cekmeyı ıstıyoruz. handleSubmıt ıle bunu basarabılırız. bunun ıcınde getMovıe searchAPI + ınputun ıcıne yazılan value, kı bız bunu searchTerm dıye bir state yazmıstık, concat edıerek apıden verımızı cekmıs olauyoruz.--->  getMovies(SEARCH_API + searchTerm);
// ayrıca arama search yapıldıktan sonra ınput alanını bosaltmak ıcın -->setSearchTerm(""); yapıyoruz ve ınput valuesını searchTerm a baglamamız gerekıyor.
// sımdı de verının gelmesı ıcın bırıncısı ınput alanının bos olmaması ve currentUserın true olması yanı logın olmas olmalı sartlarına baglayabılırız. logın degılse veya search alanı bos ıse o zaman da alert verebılırız.
// sımdı de bır loadıng verebılırız. yanı loadıng true ıse loadıngı false ıse datayı gostersın dıye bır state yazıyoruz ılk basta. bunnu ıcın taılwınd elemnde bı spınerını aldık.
// datayı cekme ıslemını yapınca bu loadıngı yazaraz true kurarız. data cekıldıkten sorna da false kurmalıyız onun ıcın --->
// const getMovies = (API) => {
//   setLoading(true);--->bu kısımda true
// .finally(() => setLoading(false));---> her halde calısacak olan fınally kısmına da falsee kurarız.
//
const API_KEY = process.env.REACT_APP_TMDB_KEY;
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

const Main = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);

  const getMovies = (API) => {
    setLoading(true);
    axios
      .get(API)
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm && currentUser) {
      getMovies(SEARCH_API + searchTerm);
      setSearchTerm("");
    } else if (!currentUser) {
      alert("please log in to see details");
    } else {
      alert("please enter a text");
    }
  };

  return (
    <>
      <form className="flex justify-center p-2" onSubmit={handleSubmit}>
        <input
          type="search"
          className="w-80 h-8 rounded-md outline-none border p-1 m-2"
          placeholder="Search a movie..."
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
        />
        <button className="text-white" type="submit">
          Search
        </button>
      </form>
      <div className="flex justify-center flex-wrap">
        {loading ? (
          <div
            className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-600 mt-52"
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          movies.map((movie) => <MovieCard key={movie.id} {...movie} />)
        )}
      </div>
    </>
  );
};

export default Main;
