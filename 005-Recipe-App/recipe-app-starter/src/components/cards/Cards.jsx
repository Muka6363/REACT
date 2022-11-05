import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
const Cards = ({ obje }) => {
  const { label, image, cuisineType, ingredientLines } = obje;
  const foodInfo = { label, image, cuisineType, ingredientLines };
  console.log("foodInfo :>> ", foodInfo);
  const navigate = useNavigate();
  return (
    <Card className="m-3" style={{ width: "15rem" }}>
      <Card.Title className="text-truncate">{label}</Card.Title>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Button
          variant="primary"
          onClick={() => navigate(`/detail/${label}`, { state: foodInfo })}
        >
          Go somewhere
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Cards;
