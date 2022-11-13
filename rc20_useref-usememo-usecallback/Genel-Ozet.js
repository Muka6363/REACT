// //! memoization tekniğini kullanarak, componentlerin veya fonksiyonların gereksiz yere tekrar tekrar render edilmesini veya oluşturulmasını engelleyebiliriz.
// ​
// //! React Memo
// ​
// //? Bir component React.memo ile çağrılırsa, React bu component’i render eder ve bu component’e gönderilen props değerlerini saklar/kaydeder (memoized). Bir sonraki render durumunda bu component’e gönderilen props değerleri, bir önceki render edildiğindeki props değerleri ile aynıysa component tekrar render edilmez.
// ​
// //* Kullanım şekli:
// ​
// //todo kullanacağın conponentde önce import et.
// ​
// import React, { Component, memo } from "react";
// ​
// //todo Parent'dan props'u gönder
// const ReactMemo = ({ props }) => {
//   return <div>React-Memo Componenti : {props}</div>;
// };
// ​
// //todo export ederken memo()ile sarmalla
// export default memo(HeaderMemo);
// ​
// // Yukarıdaki örnekte eğer ReactMemo componentine props gönderilmemiş olmasaydı  parentında return içerisinde bulunsa dahi ilk renderdan sonra render edilmeyecekti. tekrar render edilebilmesi için parentenden props gönderilmesi gerekli. Props gönderildikten sonrada her renderda memo değerleri karşılaştırır. Aynıysa render etmez farklıysa render eder.
// ​
// //! useMemo
// // Shallow comparison nedir:
// // Primitive veri türleri
// // "" === ""        ===> true
// // true === true    ===> true
// // object veri türleri
// // [] === []        ===> false
// // {} === {}        ===> false
// // obje tipi veri türlerinin bellek üzerindeki referansları farklıdır. içeriğe bakılmaz. Bu yüzden her sorgulamada içerik aynıda olsa referans farklı olacağı için false değer döndürür. Bu yüzden her render'da objenin referansının false olduğunu yani farklı olduğunu gören React-Memo o Conponenti tekrar render eder. Bunu önlemenin yolu da useMemo'dur.
// ​
// // React Memo faydasız kaldığı yer object tipli verilerdir. onu engellemenin yolu da useMemo kullanmaktır.
// // Shallow comparison’da eğer karşılaştırılan tipler nesne (Object) ise içerisindeki değerleri değil referans değerleri karşılaştırılır. Eğer karşılaştırılan nesneler memory’de aynı adresi gösteriyorsa true, göstermiyorsa false olarak değer döndürür.
// ​
// //* Kullanım şekli:
// //todo kullanacağın conponentde önce import et.
// import { useMemo } from "react";
// ​
// //todo sonra değişkenleri velirle:
// const [search, setSearch] = useState("");
// const [data, setData] = useState([]);
// ​
// //todo sonra useMemo'yu kullan.
// const filteredData = useMemo(() => {
//   return data?.filter((item) =>
//     item.name.toLowerCase().includes(search.toLowerCase())
//   );
// }, [data, search]);
// ​
// //todo   sonra conponente gönder.
// <Card data={filteredData} />;
// ​
// //?  Burada ne yapmış olduk?
// // data ve search'ı takip et bunlarda ne zaman değişiklik olursa o zaman filteredData'yı hesapla. Dolayısıyla Card conponendine sadece gerekli yerlerde değişiklik olduğu zaman ilgili prop gitmiş olsun dedik.
// ​
// //! useCallback
// // x (app) Component'imizin içersinde başka bir y componenti (ClearButton) olduğunu düşünelim. y component'inin içersinde çalışmasını istediğimiz bir fonksiyon var ve x componentinde tanımlı. x Component'i render edildiğinde y Component'inin render edilmesini istemiyoruz. Bu durumda y component'inde tanımlı memo'ya, y component'inde kullanılan  fonksiyonun değişmediğini, dolayısıyla render edilmesine gerek olmadığını deklere edecek bir komut ihtiyacı ortaya çıkıyor. Bu ihtiyacı'da useCallback karşılıyor.
// ​
// //* Kullanım şekli:
// //todo kullanacağın conponentde (x) önce import et.
// import { useCallback } from "react";
// ​
// //todo ClearButton (y componenti) component'inde kullanılacak handleClear fonksiyonunu içerisinde useCallback ile tanımla.
// const handleClear = useCallback(() => {
//   setText("");
//   setSearch("");
// }, []);
// ​
// //todo  ClearButton'a handleClear fonksiyonunu gönder.
// <ClearButton handleClear={handleClear} />;
// ​
// //?  Soru: handleClear'i useCallback olmaksızın normal bir fonksiyon olarak tanımlasaydık ne olurdu.
// //   Cevap: text'in bağlı olduğu input her değiştiğinde ve search'in tanımlı olduğu buton'a her tıklandığında gerek olmadığı halde ClearButton Componentide render edilmiş olacaktı. Bu da büyük projelerde probleme sebebiyet verebilir.
// ​
// //! useRef
// // useRef bir component içerisinde component’in tekrar render olmasını tetiklemeden “mutable” değişken tutmamızı sağlayan yapıdır.
// // yani useRef ile objede tanımlasak bellekdeki yeri değişmediği için Component render edilmez.
// // useRef ile Dom elementlerini yakalayabiliriz.
// ​
// //* Kullanım şekli:
// //todo kullanacağın conponentde önce import et.
// import { useRef } from "react";
// ​
// //todo Sonra bir değişkene ata.
// const divRef = useRef();
// ​
// //todo ilgili tag'da gömülü ref attributuna tanımla.
// <div ref={divRef}>
//   <p>First element child</p>
//   <input type="text" ref={inputRef} />
//   <p>Last element child</p>
// </div>;
// ​
// //todo sonra ilgili elemente eriş.
// console.log(divRef.current);
// ​
// //todo değişken ataması.
// const taxData = useRef({ tax: 122, ship: 225 });
