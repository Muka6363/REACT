//?=============================================================
//?                 LIFECYCLE METOTLARI
//?      https://reactjs.org/docs/react-component.html
//?=============================================================

//* Lifecycle metotlari componetnlerin DOM'da varoldugu sure boyunca
//* uzerinde islem yapmamizi imkan saglayan ozel React metotlaridir.
//* Ornegin bir component olusturuldugunda, DOM'a basildiginda,
//* guncellendiginde veya DOM'dan kaldirildiginda bir seyler yapmak icin
//* lifecycle metotlari kullanilabilir.
//* En bilindik lifecycle metodu render() metodudur

//* Bir component'in olsuturulmasi (constructor,
//* Bir componentin DOM agacina eklenmesinin sonrasi(componentDidMount)
//* Bir component'in DOM'a basilmasi (render)
//* (Optional)Bir componentin guncellenmesinin sonrasi (componentDidUpdate)
//* Bir component'in DOM agacindan kaldirilmasi sonrasi(componentWillUnmount)

// TODO: Constrctor + Render + ComponenDıdMount

import React from "react";

class LifeCycleMethods extends React.Component {
  //! 1-) Bir componentin olsuturulmasinda cagrilir
  constructor(props) {
    console.log("Constructor running");
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleInc = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  //! 3-)Cocuk Doguyor...Kulagına ısım soylenmesı...Her cocuk dogumunda sadece 1 kez olur... Bir component DOM agacina eklendi... calısmasını ıstedıgımızı buun ıcınde konumlandırıyoruz. ORN: APIden verı cekmek.
  //! (İlk render sonrasi).
  //! Her yasam dongusu icin bir kere calisir. bunun karsılıgı useEffect...
  // burada bır state guncelleyınce render olur render,olsa da dıdmaoun baska calısmaz. tekrar calıstıgı yer Updatıng yerı...
  componentDidMount() {
    console.log("Mounted");
  }

  //! 4-)Cocuk  yas atlıyor...Dogum gunu partısı... ılk dogdugunda dogumgunu partısı yapılmaz... her yıl yapılır...Bu metot ilk render haric diger tüm render'lardan sonra cagrilir. component ya state ya da props guncellenınce render olur.  bunu ıcerısınde bır state guncellemesı yaparsanız sonsuz donguye gırebılırsınız.
  // state guncelledınız guncelleme oldugu ıcın render calısır. ılk harıc her render sonrası ComponentDıdUpdate calısır. bu calıstıgı ıcın state guncellenır..... burada ıllede state kullanacaksanız bunu bır kosula baglayarak kullanırız. yoksa sonsuz dongu...
  //!  prevState ve prevProps degerlerini parametre olarak alabilir.
  componentDidUpdate(prevProps, prevState) {
    console.log("Updated");
    // console.log(prevState.count);
  }

  //! 5-) bırını olumu sonrası defın ıslemıdır. component DOMdan kaldırıldıgı gıbı calısır. Bir component DOM agacindan kaldiriltiktan hemen sonra cagirlir. mesele bı verı ıstegınde bulundunuz ısınız bıttıkten osnra bunu kaldrmanız ıcın kullanacagınız metot bu dur.
  componentWillUnmount() {
    console.log("Unmounted");
  }

  render() {
    //! 2-) Her bir render'da cagrilir
    console.log("Rendered");
    return (
      <div className="container text-center">
        <h1 className="text-danger">LIFECYCLE METHODS</h1>
        <h3>COUNT={this.state.count}</h3>
        <button className="btn btn-info" onClick={this.handleInc}>
          INC
        </button>
      </div>
    );
  }
}
export default LifeCycleMethods;
