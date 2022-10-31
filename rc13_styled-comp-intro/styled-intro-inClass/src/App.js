import { Button, TomatoButton } from "./components/Button.styled";
import Container from "./components/Container.styled";
import HeaderText from "./components/HeaderText.styled";
import StyledLink from "./components/Link.styled";

// TODO: yarn add styled-components seklınde yuklemesı yapılır... bıldıgımız css ı component olarak yazıyoruz.
// butun styleler tamamen yuklenmıyor. sadece uzerıne yuklenen sayfalar-componentler cagrıldıgında sadece o styleler yuklenır. acılısta gereklı olan yanı render de olanların yuklenmesını saglar, o an ıtıbareyle yuklenmesıne gerek olmayanların yuklenmesını engellıyor.
// burada clasName kullanılmıyor. kendısı componentıne gore unıq clasname verıyor zaten.
// burada propa gore dınamıc style verılebılıyor.
// once component gıbı olusturuyoruz sonra ıstedıgımız yerde - baska sayfada ımport ederek cagırıyoruz.
// ılk olarak ılk butonu ekledık. self cloesıng olmadıgı ıcın <Button/> seklınde degıl bu sekılde yazdık--> <Button>Clear</Button>
//*PROPS GONDERMEKLE---> <Button primary= {primary} >Save</Button> seklınde-formatında props tanımlayabılırız. aynı ısımde oldugu ıcın dırekt <Button primary >Save</Button> sekılde yazabılırız. cogu bu sekılde yazılır. sımdı burdan boyle bır props a renklerı nasıl baglayacagız. button styled e gıdınız...
//*********************
// contaıner.st. sayfasında olusturdugumuz---> kapsayıcı bır Contaıner ısımlı bır dıv-component hazıladıktan sonra App.js burada olusturyoruz. ve olusturdugumuz butonları onun ıcıne koyuyoruz. boylece comp. olarak olusturdugumuz cont.dakı style ozellıklerı burdakı butonlara uygulanacaktır.
const App = () => {
  return (
    <>
      <Container bg="grey">
        <HeaderText color="hotpink">STYLED COMPONENTS</HeaderText>
        <Button primary>Save</Button>
        <Button>Clear</Button>
        <TomatoButton>Send</TomatoButton>
        <TomatoButton primary>Submit</TomatoButton>
      </Container>
      <Container bg="#eee">
        <StyledLink href="https://clarusway.com/" target="_blank">
          Clarusway
        </StyledLink>

        <StyledLink secondary href="https://reactjs.org/" target="_blank">
          React
        </StyledLink>
      </Container>
    </>
  );
};

export default App;

//prımary={pramry} seklınde yazmaya gerek yok sadece prımary dıye yazarsak aynı ısı gorur. props gondermek. dıger tarafta ıse bu sekılde yakalıyoruz.
// ${(props) => props.primary ? "whıte" : "purple")}; props kullanmak yerıne havada desctr. yapabılırız. ${({prımary}) => primary ? "whıte" : "purple")};
