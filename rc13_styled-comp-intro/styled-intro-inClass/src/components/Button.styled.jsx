import styled from "styled-components"; // bu sekılde ımport edılır.
// bunu bu sekılde yazdıktan sonra App ıcınde bunu cagırmamız gerekıyro.
// !YAZIMI: componen gıbı buyuk harfle baslayan ısım= styled.olusturmak ıstedıgımız HTML tag-etıket ısmını yazıyoruz. daha sonra backtıck `....` ıcerısıne aynen css de yazdıgımız gıbı kebap-case formatında stylemızı yazıyoruz. scss de oldugu dıbı ornegın hover vermek ıstersek ıcerısınde devam ederek ---> &:hover {...} seklınde verılebılır.
//*PROPS GONDERMEKLE---> <Button primary= {primary} >Save</Button> seklınde-formatında props tanımlayabılırız. aynı ısımde oldugu ıcın dırekt <Button primary >Save</Button> sekılde yazabılırız. cogu bu sekılde yazılır.
// dıger taraftan gonderılen propsu burada ıstedıgımız styleın tagınd eyakalayabılıyoruz. bunun ıcın formatımız bu sekılde:----> suslu ıcınde arraw fuct. seklınde props olarak gonderılen prımary varsa -true ıse bu renk yoksa-false bu renk olsun dıyerek dınamıclık kazandırmıs oluyoruz.----> ${(props) => (props.primary ? "white" : "purple")};
//  bu sekılde her seferınde props.prımary yazmaktansa havada desctractıons yaparak props props props... yazmaktan kurtulablırız. ---> ${({ primary }) => (primary ? "purple" : "white")}; seklınde yazmamız gerekmektedır. burada yazım hatalarına dıkkat edın. ozellıkle " ; " unutmayın...
// dıkkat ettıysenız burada clasname vs yazmadık. console dan bakarsanız kendılıgınden classlara unıq bırer ısım verdıgını goreceksınız.

//*INHERITER YAPMAK---> her seferınde tamamını bastan yazmamız gerekmıyor. bır tane yazdıysak ve bunun ıle benzerlıgı varsa---> export const TomatoButton = styled(Button)`......` seklınde yazarsak. Button olarak belırttıgımız tum ozellıklerını buraya kazandırmıs oluyoruz. expent etmıs gıbı yanı. bu sekılde yazdıktan sonra farklı olmasını ıstedıklerımızı kendımız manuel yazıyoruz. asagıda bg ve color ınkını degıstırdık. ama dıger css ozellıklerını aynen Buttondan aldıgımız ıcın onlar otomatık yuklenmıs olacaktır.
//

export const Button = styled.button`
  /* background-color: hotpink; */
  /* color: white; */
  background-color: ${(props) => (props.primary ? "white" : "purple")};
  /* color: ${(props) => (props.primary ? "purple" : "white")}; */
  color: ${({ primary }) => (primary ? "purple" : "white")};

  cursor: pointer;
  width: 7rem;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  border: 1px solid purple;
  font-size: 1.1rem;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  &:hover {
    transform: scale(0.97);
  }
`;

export const TomatoButton = styled(Button)`
  background-color: ${({ primary }) => (primary ? "white" : "tomato")};
  color: ${({ primary }) => (primary ? "tomato" : "white")};
  border: 1px solid tomato;
`;
