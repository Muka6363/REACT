import { Button, TomatoButton } from "./components/Button.styled";
import Container from "./components/Container.styled";
import HeaderText from "./components/HeaderText.styled";
import StyledLink from "./components/Link.styled";

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
