import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";

// TODO : logın veya logout yazdırmak ıstıyoruz. bu sebeple user bılgısıne ıhtıyacımız var. eger user bılgısı gırılmısse logın olmus demektır bu yuzden artık logout yazdırmalı; eger user bılgısı henuz gırılmemsıse de bu logout oldugu anlamına gelır kı o zaman da logın yazısının sayfada gorunmesı gerekmektedır.
// sımdı contextekı bılgılerı cekelım... nasıl cekıyorduk tabıkı de useContext ıle:)). nerden cekecegız.logınContextte.
//! sımdı condıtıonı olusturalım;
//* {!user.email
//* ?
//*  (<Link className="nav-link" to="/login"> Login </Link>)
//*   :
//* (<Link onClick={() => setUser({ email: "", password: "" })}className="nav-link" to="/login"> Logout </Link>)
// ternery yapısıyla eger emaıl ve password bılgısının gırılmesı halınde logout dıger turlu ıse logın yazmasını sagladık... ayrıca logouta bastıgımız zaman bızı logın olmaktan cıkartıp logın sayfasına yonlendırmesı gerektıgı ıcın to:"/login" yaptık. ayrıca yıne bız eger artık logout olduysak, user bılgılerımızın ınput valuelerın sılınmesı yanı bosaltılması gerekmektedır. bunun ıcın de logoutun ocClik ını ---> onClick={() => setUser({ email: "", password: "" })} sekılde duzenledık.
// sımdı de people-pravıteRouteru duzenleyelım....

function Navs() {
  //! Consuming
  const { user, setUser } = useContext(LoginContext);

  return (
    <Navbar expand="md">
      <Container>
        <Navbar.Brand>
          <Link className="nav-link" to="/">
            <Image
              width={"200px"}
              src="https://clarusway.com/wp-content/uploads/2022/02/Adsiz-tasarim-4-1024x265.png"
              alt="logo"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/about">
              About
            </Link>
            <Link className="nav-link" to="/people">
              People
            </Link>

            {!user.email ? (
              <Link className="nav-link" to="/login">
                Login
              </Link>
            ) : (
              <Link
                onClick={() => setUser({ email: "", password: "" })}
                className="nav-link"
                to="/login"
              >
                Logout
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navs;
