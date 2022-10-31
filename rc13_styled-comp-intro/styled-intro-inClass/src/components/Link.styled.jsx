import styled, { css } from "styled-components";

// TODO: ılk ornekte style tek tek verımıs olduk. ancak ıkınıcısınde, bır propsun olup olmaması durumuna gore; eger varsa alttakı ozellıklerı ver seklınde toplu olarak da stylıng verebılıyoruz. App.js de kı styledLınk ın secondary ısımınde bır propsu varsa asagıdakı ozellıklerı verdırdık.
// !Dıkkat--->bu durumda {css} import etmeyı unutmayınız...
// && bu varsa bunu uygula short cırcus yontemıyle ve backtıck ıcerısınde yenı style verıyoruz. bunun yanında ıf elseıf yapısı da kullanılabılır.

const StyledLink = styled.a`
  font-size: 1rem;
  text-decoration: none;
  &:hover {
    opacity: 0.5;
  }
  ${(props) =>
    props.secondary &&
    css`
      background: lightblue;
      color: crimson;
      padding: 0.3rem;
    `}
`;

export default StyledLink;
