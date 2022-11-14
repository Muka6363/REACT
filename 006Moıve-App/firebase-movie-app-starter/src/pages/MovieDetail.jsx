import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

const MovieDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [newMovie, setNewMovie] = useState("");
  const movieData = async () => {
    const myApi = process.env.REACT_APP_API_KEY;
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${myApi}`;
    const { data } = await axios(url);
    // console.log("data", data);
    setNewMovie(data);
  };
  useEffect(() => {
    movieData();
  }, []);

  return (
    <>
      <div className="container">
        <img
          className="image"
          src={`https://image.tmdb.org/t/p/w1280${newMovie?.poster_path}`}
          alt="Sunset in the mountains"
        />
        <div className="">
          <div className="title">{newMovie?.title}</div>
          <p className="truncate">{newMovie?.overview}</p>
        </div>
        <div>
          <button className="button" onClick={() => navigate(-1)}>
            Go Back
          </button>
        </div>
      </div>
    </>
  );
};

export default MovieDetail;
