import { useNavigate } from "react-router-dom";

const Card = ({ title, poster_path, overview, id }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/detail/${id}`);
  };

  return (
    <div className="container">
      <img
        className="image"
        src={`https://image.tmdb.org/t/p/w1280${poster_path}`}
        alt="Sunset in the mountains"
      />
      <div className="">
        <div className="title">{title}</div>
        <p className="truncate">{overview}</p>
      </div>
      <div>
        <button className="button" onClick={handleClick}>
          Go Detail
        </button>
      </div>
    </div>
  );
};

export default Card;
