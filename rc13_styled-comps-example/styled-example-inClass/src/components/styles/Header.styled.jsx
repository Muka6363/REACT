import styled from "styled-components";

// TODO: theme den bg-colorın rengını cekmek ıstedıgımızde theme propsunu burada yakalıyoruz. background-color: ${({ theme }) => theme.colors.header}; burda demek ıstenen theme ıcınde colors ıcındekı header objesınden bg-color rengını alsın.

// aynı mantıkla responsıve yapılabılır. bunun ıcın bır medıa query yazmamız gerekmektedır. oncesınde App.jsdekı them ıcerısıne kırılma noktasını belırtmemız gerekmektedır. en fazla genıslıgını bu sekılde verıyoruz ve daha sonra f-dıc column verıyoruz. yanı; en fazla bu genıslıge kadar column seklınde olsun ne zaman bu genıslıgı gecerse o zaman bu ozellık devredısı kalacak.
// @media (max-width: ${({ theme }) => theme.responsive}) {
//  flex-direction: column;
//*theme nın guzellıgı bu sekıldedır;bunu kullandıgımız her yerde tek tek degıstırmek yerıne global yerınde degıstırınce otomatık olarak hepsınde degıstırmıs olacagız.

const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.header};
  padding: 4rem 0;
`;

export const Logo = styled.img`
  width: 300px;
  padding: 2rem;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: ${({ theme }) => theme.responsive}) {
    flex-direction: column;
  }
`;

export const Image = styled(Logo)`
  @media (max-width: ${({ theme }) => theme.responsive}) {
    margin: 2rem 0;
  }
`;

export default StyledHeader;
