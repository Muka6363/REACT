import axios from "axios";
import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Cards from "../../components/cards/Cards";
import mail from "../../assets/mail.svg";
const Home = () => {
  const [food, setFood] = useState("");
  const [mealType, setMealType] = useState("");
  const [products, setProducts] = useState(null);
  const [error, setError] = useState("");
  const getData = async () => {
    const APP_ID = process.env.REACT_APP_API_ID;
    const APP_KEY = process.env.REACT_APP_API_KEY;
    const url = `https://api.edamam.com/search?q=${food}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${mealType}`;
    const { data } = await axios(url);
    // const data = await fetch(url);
    // const rest = data.json();
    // console.log(rest.hits);
    setProducts(data.hits);
    setError("");
  };
  const nullError = () => {
    setError("");
  };
  useEffect(() => {
    if (products?.length === 0) {
      setError("Aradığınız yemek bulunamadı...");
      setTimeout(nullError, 2000);
    }
  }, [products]);

  const handleClick = () => {
    if (!food && mealType) {
      setError("yemek verisi eksik...");
    } else if (!mealType && food) {
      setError("öğün verisi eksik...");
    } else if (!food && !mealType) {
      setError("veri girişleri eksik...");
    } else if (food && mealType) {
      getData();
    }
  };

  return (
    <div>
      <Form>
        <input
          type="text"
          placeholder="food name"
          onChange={(e) => setFood(e.target.value)}
        />
        <select name="" id="" onChange={(e) => setMealType(e.target.value)}>
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
          <option value="Teatime">TeaTime</option>
        </select>
        <button type="button" onClick={handleClick}>
          Search
        </button>
      </Form>
      <div>
        <p>{error && <img src={mail} alt="" />}</p>
      </div>
      <div className="container m-4 row">
        {products?.map((item) => {
          return <Cards obje={item.recipe} />;
        })}
      </div>
    </div>
  );
};

export default Home;
