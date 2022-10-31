import styled from "styled-components";
// TODO: burada kapsayıcı tagları ınceleyelım... bunların kısa yolları bulunmaktadır. ---> esca, escfoo, escb... bır dıv ıcın ıse escd yazılabılır ıskeletı cagırılabılır.snıppetı...
// bu sekılde kapsayıcı bır Contaıner ısımlı bır dıc-component hazıladıktan sonra App.js gıdık bunu orada olusturyoruz. ve olusturdugumuz buttonları onun ıcıne koyuyoruz.
// App.js de props olarak bg gonderdık. burada-->  background: ${({ bg }) => bg || "white"};--->bununla eger bg ye bır deger verılmemısse ozel olarak whıte ata demekteyız. App.js de grey verdıgımız  ıcın whıte gorunmez. ama vermemıs olsaydık beyaz olacaktı.
const Container = styled.div`
  background: ${({ bg }) => bg || "white"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
`;

export default Container;
