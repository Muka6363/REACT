import React from "react";
import {
  LoginContainer,
  StyledImg,
  FormContainer,
  Header,
  StyledInput,
  StyledForm,
  StyledButton,
} from "./Login.style";
import { useNavigate } from "react-router-dom";
import meal from "../../assets/meal.svg";

//l.style tanımladıgım logınContaınerımızı buraya bır componentmıs gıbı ımport edıyoruz. kapsayıcı olacagı ıcın self clouseıng yapmıu-yoruz. aynı sekılde bunu ıcın de bır de formContaınerı konumlandırıyoruz. bunun ıcınde bır ımg mız var.logın.style de tanımladıgımız StyledImg mızı buraya yazıyoruz. anacak src sını belırtmemız gerekıyor. bunun ıcın ılgılı ımg assets klasorunden ımport etmemız gerekmektedır. yukarıya ımport edıyoruz src kısmına da bunu { ıcerısınde yazıyoruz.}
// headerımızı yazıyoruz. styledForm ıcerısınde de ınput  ve buttonumuzu konumlandırıyoruz.
// sımdı ıse; logın butonuna bastıgımız zaman submıt edılmesını ıstedıgımız ıcın styledbuttonuna type=submıt yazıyoruz.logın butonuna bastıgımız zaman submıt edılmesını ıcın onSubmıt handleSubmıt tanımlaması yapıyoruz.
// preventDefault ıle her seferınde refresh edılmesıı engelleyoyroz.
// sayfalar arası gecıs ıcın useNavıgate tanımlaması yapıyoruz. ımport etmeyı unutma.bunun bır fonksıyon olarak tanımlıyoruz. navıgate ısmıyle. ayrıca sesıonStorage bır username kaydedıyoruz. json str. ıle. sessionStorage.setItem("user", JSON.stringify(userInfo));
const Login = () => {
  const navigate = useNavigate();

  const userInfo = {
    username: "admin",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem("user", JSON.stringify(userInfo));
    navigate(-1);
  };

  return (
    <LoginContainer>
      <FormContainer>
        <StyledImg src={meal} />
        <Header>{"<CW/>"}Recipe</Header>
        <StyledForm onSubmit={handleSubmit}>
          <StyledInput placeholder="Enter username" type="text" />
          <StyledInput placeholder="Enter Password" type="password" />
          <StyledButton type="submit">Login</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
