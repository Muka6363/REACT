import React, { useEffect, useState } from "react";
import mailSvg from "./assets/mail.svg";
import manSvg from "./assets/man.svg";
import womanSvg from "./assets/woman.svg";
import manAgeSvg from "./assets/growing-up-man.svg";
import womanAgeSvg from "./assets/growing-up-woman.svg";
import mapSvg from "./assets/map.svg";
import phoneSvg from "./assets/phone.svg";
import padlockSvg from "./assets/padlock.svg";
import cwSvg from "./assets/cw.svg";
import Footer from "./components/footer/Footer";
import axios from "axios";
const url = "https://randomuser.me/api/";
const defaultImage = "https://randomuser.me/api/portraits/men/75.jpg";

function App() {
  const [newData, setNewData] = useState(null);
  const [myTitle, setMyTitle] = useState("");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const getData = async () => {
    const { data } = await axios(url);
    console.log("data", data.results[0]);
    setNewData(data.results[0]);

    // console.log("newData", newData?.name);
  };
  console.log("newData", newData);

  useEffect(() => {
    getData();
    setMyTitle("name");
    setDescription(
      newData?.name.title + " " + newData?.name.first + " " + newData?.name.last
    );
  }, []);

  /****************************************************** */
  const handleName = () => {
    setMyTitle("");
    setDescription("");
    setMyTitle("name");
    setDescription(
      newData?.name.title + " " + newData?.name.first + " " + newData?.name.last
    );
  };
  const handleMail = () => {
    setMyTitle("");
    setDescription("");
    setMyTitle("email");
    setDescription(newData?.email);
  };
  const handleAge = () => {
    setMyTitle("age");
    setDescription(newData?.dob?.age);
  };
  const handleMap = () => {
    setMyTitle("street");
    setDescription(
      newData?.location?.street?.number + " " + newData?.location?.street?.name
    );
  };
  const handlePhone = () => {
    setMyTitle("phone");
    setDescription(newData?.phone);
  };
  const handlePadlock = () => {
    setMyTitle("password");
    setDescription(newData?.login?.password);
  };
  /************************************************* */
  const handleAddUser = () => {
    setName(
      newData?.name.title + " " + newData?.name.first + " " + newData?.name.last
    );
    setEmail(newData?.email);
    setPhone(newData?.phone);
    setAge(newData?.dob?.age);
  };

  return (
    <main>
      <div className="block bcg-orange">
        <img src={cwSvg} alt="cw" id="cw" />
      </div>
      <div className="block">
        <div className="container">
          <img
            src={newData?.picture.large}
            alt="random user"
            className="user-img"
          />
          <p className="user-title">My {myTitle} is </p>
          <p className="user-value">{description}</p>
          <div className="values-list">
            <button className="icon" data-label="name">
              <img
                src={womanSvg}
                alt="user"
                id="iconImg"
                onClick={handleName}
              />
            </button>
            <button className="icon" data-label="email">
              <img src={mailSvg} alt="mail" id="iconImg" onClick={handleMail} />
            </button>
            <button className="icon" data-label="age">
              <img
                src={womanAgeSvg}
                alt="age"
                id="iconImg"
                onClick={handleAge}
              />
            </button>
            <button className="icon" data-label="street">
              <img src={mapSvg} alt="map" id="iconImg" onClick={handleMap} />
            </button>
            <button className="icon" data-label="phone">
              <img
                src={phoneSvg}
                alt="phone"
                id="iconImg"
                onClick={handlePhone}
              />
            </button>
            <button className="icon" data-label="password">
              <img
                src={padlockSvg}
                alt="lock"
                id="iconImg"
                onClick={handlePadlock}
              />
            </button>
          </div>
          <div className="btn-group">
            <button className="btn" type="button" onClick={() => getData()}>
              new user
            </button>
            <button className="btn" type="button" onClick={handleAddUser}>
              add user
            </button>
          </div>

          <table className="table">
            <thead>
              <tr className="head-tr">
                <th className="th">Firstname</th>
                <th className="th">Email</th>
                <th className="th">Phone</th>
                <th className="th">Age</th>
              </tr>
              <tr>
                <td>{name}</td>
                <td>{email}</td>
                <td>{phone}</td>
                <td>{age}</td>
              </tr>
            </thead>
            <tbody>
              <tr className="body-tr"></tr>
            </tbody>
          </table>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Footer />
      </div>
    </main>
  );
}

export default App;
