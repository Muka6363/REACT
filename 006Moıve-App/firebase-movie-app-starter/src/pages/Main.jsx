import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";

const Main = () => {
  const [newData, setNewData] = useState(null);
  const getData = async () => {
    const myApi = process.env.REACT_APP_API_KEY;
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${myApi}`;

    const { data } = await axios(url);
    console.log("data :>> ", data);
    setNewData(data.results);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="fullCards ">
      {newData?.map((film) => {
        return <Card {...film} key={film.id} />;
        // return <Card film={film}/>;
      })}
    </div>
  );
};
export default Main;
