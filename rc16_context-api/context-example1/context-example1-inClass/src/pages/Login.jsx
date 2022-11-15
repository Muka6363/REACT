import { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";
import { useNavigate } from "react-router-dom";

// TODO : const { user, setUser } = useContext(LoginContext); seklınde, app.jsdekı global statemızı kullanabılıyoruz artık. hangı verılerı kullanacaksak {...ıcıne...} = hangı contextten okuyacaksak useContext(...ıcıne...) yazılır. her ıkısını ımport etmeyı unutmayınız...
// ! DİKKAT :sıkca karsılasılacak bır hata mesalesı: bız state tanımlarken ılk degerını "" seklınde verdıgımızde ılk olarak undıfıned,  daha sonra verı gelıyorsa bu bıze value hata olarak consoleda doner. ( bu daha cok nested yapılarda object yapılarında karsımıza cıkmaktadır,) bunun engellenmesı ıcın shourt cırcus yontemıyle value duzenlemek lazım. --->value={user?.email || ""} ve value={user?.password || ""}... yanı burada bız, eger ser?.email,password bunlardan undefıned gelen olursa  undufıned gelırse ""  yanı null olarak donder bana dıyoruz.
// sımdı bu global statemızı burada ve baska yerlerde kullanabılıyoruz. logın-logout yazdıracagımız ıcın ve bu yazı da navbarda oldugu ıcın oraya gecıyoruz...
// ..................................................
// kısı sayfamıza geldı ve direkt people ı tıkladı. ancak logın olmadıgı ıcın dırekt logın sayfasına yonlendırdık. logın bılgılerını gırdıkten ve submıte tıkladıktan sonra bır oncekı tıklama yerı olan people sayfasına gıtmesı ıcın  navigate(-1); hookunu bu sekılde kullanıyoruz.

const Login = () => {
  //! local state--> bu global state olusturmadan once olusturulmustu. app.jsde aynı ısımlı yenı bır global state tanımladıgımız ıcın artık bu local state ıhtıyacımız yok.b u yuzden bunu kaldırdık. asagıda global statemızı useContext ıle cagırıyoruz..
  // const [user, setUser] = useState({ email: "", password: "" });

  //! Consuming LoginContext
  const { user, setUser } = useContext(LoginContext);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  console.log(user);
  return (
    <Container>
      <h1 className="text-center mt-4">LOGIN PAGE</h1>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            name="email"
            value={user?.email || ""}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            name="password"
            value={user?.password || ""}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </Form.Group>
        <Container className="text-center">
          <Button variant="danger" type="submit">
            Submit
          </Button>
        </Container>
      </Form>
    </Container>
  );
};

export default Login;
