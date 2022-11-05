import React from "react";
import { useLocation } from "react-router-dom";

const Detail = () => {
  const { state: food } = useLocation();
  // console.log("food", food);
  return (
    <div className=" container m-4 d-flex">
      <div>
        {food.ingredientLines.map((item, index) => {
          return (
            <p key={index}>
              {index + 1} : {item}
            </p>
          );
        })}
      </div>
      <div>
        <img src={food.image} alt="" />
      </div>
      <div>
        <p>{food.cuisineType}</p>
      </div>
    </div>
  );
};

export default Detail;
