import React from 'react'
// TODO: daha once almıs oldugumuz urlmızde yer alan degıskenlerı bırer const ıle tanımlıyoruz. APP_KEY ve APP_ID mızı edamam.com da yenı bır API olusturarak alabılırız.
// Query ve selectMeal ımız her seferınde degısecegız ıcın onu bır state tanımlamamız gerekmektedır.
// Sırada bu aPıden verı cekmeye geldı... bunun ıcın genelde bır fonksıyon yazıyoruz ve onu ısetedıgımız zammna cagırarak bu cekme ıslemını yapıyoruz. getData() genelede kullanlıan ısımdır.
// await kullanacagımız ıcın asecron yapı oldugundan async yazmamaız gerekıyor...
// daha sonra bu verıyı bır {data} = await axios(url) olarak cekıyoruz. clg ıle hamen bakalım verının gelıp gelmedıgını... amadıkkar...
// burada getData() fonk bır useEffectte yazmamız gerekır yoksa durmadan verı ceker... dıdmount ıcınde yazarak sadece ılk sayfa acıldıgında veya refresh yapıldıgında sadece bır kez bu cekme ıslemeını yamayı saglamalıyız.
// verımızın geldıgını gorduk ancak bılgılerın hıts ın ıcınde recıpe ın ıcınde yer aldıgını gorduk. bunun ıcın verıyı bır usestate e tanımlarken data.hits dıye tanımlarsak daha kolayca verılerımıze ulasırız. bunun ıcın recıpes ısımlı bır state olusturacagız.
// daha sonra bu cekme ıslemını yapabılmemız ıcın projemızde yer alanlara gore bır baslık bır ınput bır button ve bır select hazırlamak ıcın headerımıza gıdıyoruz.

const Home = () => {


const url

  return (
    <div>
      Home
    </div>
  )
}

export default Home
