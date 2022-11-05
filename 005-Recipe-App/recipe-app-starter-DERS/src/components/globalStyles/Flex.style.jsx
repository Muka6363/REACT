import styled from "styled-components";

// Bu componentın amacı, projemızın bır cok yerınde kullandıgımız flex ozellıgınız burada global bır alanda tanımlayıp her ıhtıyacımız oldugunda yenıden yazmayıp bu comp. cahısrarak ıslemımızı yapabılmektır.
// asagıda justıfy ve align ıcın bunlar tanımlanırsa baskaca bırsey yazılırsa o yoksa da center ozellıgını kullan demek ıstenıyor.

const Flex = styled.div`
  display: flex;
  justify-content: ${({ justify }) => (justify ? justify : "center")};
  align-items: ${({ align }) => (align ? align : "center")};
  flex-wrap: ${({ wrap }) => wrap && wrap};
`;
export default Flex;
