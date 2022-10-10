const Person = (props) => {
  const { name, img, tel } = props;

  return (
    <div>
      <p>Merhabalar {name}</p>
      <img src={img} alt="img1" />
      <p>{tel}</p>
    </div>
  );
};
export default Person;