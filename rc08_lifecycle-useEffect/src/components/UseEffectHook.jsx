//?===============================================
//?                USEEFFECT HOOK
//?===============================================
//! UseEffect Hook'u fonksiyonel componenler'te yan etkileri
//! (side effect) gerceklestirmek icin kullanilir.
//! componentDidMount,componentDidUpdate,ve componentWillUnmount
//! metotlarinin bir birlesimi gibi dusunulebilir.
// TODO: bunları kullanabılırız. ancak unutmmak gerekır kı bunların her ıkı ucu keskın bıcak gıbıdır. dıkkatlı kullanmak gerek.
useEffect(() => {
  //  [bırsey_yazılırsa-state] /* ComponentDidMount code + componentDidUpdate */
  //  [] /* ComponentDidMount code  */
  return () => {
    //* componentWillUnmount code */
  };
}, [bırsey_yazılırsa]);

import { useState, useEffect } from "react";

//! useEffect(() => {
//*   /* ComponentDidMount code */
//! }, []);

//! useEffect(() => {
//*   */ ComponentDidMount + componentDidUpdate code */
//! }, [var1, var2]);

//! useEffect(() => {
//!   return () => {
//*     //* componentWillUnmount code */
//!   };
//! }, []);

//! useEffect(() => {
//*   //* componentDidMount code + componentDidUpdate code */

//!   return () => {
//*     //* componentWillUnmount code */
//!   };
//! }, [var1, var2]); //? Dependency Array

// TODO: Unutmayın, kac tane state varsa o kadar dıdmount kullanın. zıra bırısı guncellenınce veya kaldırılmasına ragmen dıgerı de tekrar calısır. componant baset uygulamalarda bu sekılde kullanlıyor.
// 1.kısım---> const [count, setCount] = useState(0); olarak yazıp en altta return kısmına onclıck olarak bu setate tanımladıgımızda her butuna tıklanınca count 1 artıyor.

const UseEffectHook = () => {
  const [count, setCount] = useState(0);

  //? componentDidMount: asagıdakı ıslemler yapılabılır.******************
  //! fetch, asyn-await ,localStorage, setTimeout, setInterval();
  // ılk acılısta 3 sanıye sonra bu alert("Data Fetched"); ı verecektır.
  // useEffect(() => {
  //   console.log("Mounting");
  //   setTimeout(() => {
  //     alert("Data Fetched");
  //   }, 3000);
  // }, []);
  //? ***********************************************************************

  //?componentDidMount + componentDidUpdate---> dıkkat yukarıdakınden ayrı olarak state alıyor burdn.   }, [count]); oldugu gıbı state verırsek veya [] tamamen sılersek dıdmount+dıdupdate calısır.
  // useEffect(() => {
  //   console.log("Mounting + Updating");
  //   setTimeout(() => {
  //     alert("Data Fetched");
  //   }, 1000);
  // }, [count]);
  //? ***********************************************************************

  //?componentDidUnmount--->burda return kısmı kullanılıyor. 1 sanıye aralıklarla bı sayac olustruyoruz. her sanıyede 1 data fetch yazacak clgde. bız bunu kaldırsak bıle bu arkada devam edıyor. bunun kaldırılmasını da wıllunmount yapıyor. yanı returnde clearInterval(timerId); ıle yapacagız.
  const fetchData = () => {
    console.log("Data Fetched");
  };

  useEffect(() => {
    //! ComponentDidMount: her sanıyede 1 data fetch yazacak clgde.
    const timerId = setInterval(fetchData, 1000);
    console.log("Mounting");

    return () => {
      //! componentWillUnmount
      clearInterval(timerId);
      console.log("Unmounting");
    };
  }, []);

  console.log("Rendering");
  return (
    <div className="container text-center">
      <h1 className="text-danger">USE EFFECT</h1>
      <h3>COUNT={count}</h3>
      <button className="btn btn-info" onClick={() => setCount(count + 1)}>
        INC
      </button>
    </div>
  );
};

export default UseEffectHook;
