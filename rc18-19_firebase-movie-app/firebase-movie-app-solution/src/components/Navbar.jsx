import React, { useContext } from "react";
import { Link } from "react-router-dom";
import avatar from "../assets/icons/avatar.png";
import { logOut } from "../auth/firebase";
import { AuthContext } from "../context/AuthContextProvider";
import Switch from "./Switch";

// TODO:GENEL BILGILENDIRME:
// taılwınd*elementten bır navbar alıp onu jsx e cevırıyoruz. daha sonra buraya yapıstırıyoruz.
// navbarı her sayfada gormek ıstedıgımız ıcın routes ın dısında konumlandırmamız lazım...
// navbarımız tum sayfalarda olacagı ıcın onu fıxed-top ıle yukarı sabıtlıyoruz. ancak relatıve posıtıons ıle akıstan cıktıgından altına gelecek olan logın ve dıger sayfalar navbarı altında kalmıs olacak ve gorunmeyecektır. bunn engellenmesı --->burada navbarımızın altına bır tane bos dıv ekleyerek ve de yukseklıgını kendımız belırleyerek <div className="h-[52px]"></div> navbarımızı yukarıda sabıt yenı yukleneceklerı onun altında yerlestırmıs olacagız.yanı navbarımmzın altında kalmasını engellşyoruz.
// <Link className="text-2xl  pr-2 font-semibold" to="/">.... React Movıe App yazısını bır lınke cevırıyoruz ve tıklandıgında "/" ıle home yanı Maıne gonderılmesını saglıyoruz.
// {currentUser && (<h5 className="mr-2 capitalize">{currentUser?.displayName}</h5> )}---> sayet currentUserımız varsa yanı lofın olunmussa bunun nameını bır h5 ıcerısıne yazmayı bır condıtıons baglı olarka yazadık. treu-false ıse...
//  <img
// src={currentUser?.photoURL || avatar}... burada da ılk durum ıcın google gırıs yapıldıysa, photoUrl mızı bu ımg nın ıcıne bastır ama eger normal olarak manuel gırıs yapıldıysa proje ıcerısınde assets ıcınde var olan avatar.png mı buraya bastır dedım.
// <span>....
//  role="button"
// onClick={() => logOut()}
// >
//   Logout
// </span> --->oldugu gıbı span bıle olsa role="button" yazılınca bır tıklanır eleman halıne gelmektedır. onclıck verılerek,tıklandıgında logout fonc.calıssın dıyoruz.
// sımdılık bıttı...Regıstere gecıyoruz...
// ..................................................................
//  onClick={() => logOut()} bu clıckı verdık tıklanınca sıgnOut fonk. aktıflesecek. 

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  //* with custom hook
  // const { currentUser } = useAuthContext();

  // const currentUser = { displayName: "Mustafa Kayikci" };
  // const currentUser = false;
  return (
    <>
      <nav className="w-full flex flex-wrap items-center justify-between py-3 bg-gray-900 text-white shadow-lg navbar navbar-expand-lg fixed-top">
        <div className="container-fluid w-full flex items-center justify-between px-6">
          <Link className="text-2xl  pr-2 font-semibold" to="/">
            React Movie App
          </Link>
          {/* Collapsible wrapper */}
          {/* Right elements */}
          <div className="flex items-center relative">
            {/* Icon */}
            {currentUser && (
              <h5 className="mr-2 capitalize">{currentUser?.displayName}</h5>
            )}
            <Switch />
            <div className="dropdown relative">
              <span
                className="dropdown-toggle flex items-center hidden-arrow"
                id="dropdownMenuButton2"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src={currentUser?.photoURL || avatar}
                  className="rounded-full"
                  style={{ height: 25, width: 25 }}
                  alt="user"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </span>
              <ul
                className="dropdown-menu min-w-max absolute bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none left-auto right-0"
                aria-labelledby="dropdownMenuButton2"
              >
                <li>
                  <Link
                    className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                    to="/register"
                  >
                    Register
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                    to="/login"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <span
                    className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                    role="button"
                    onClick={() => logOut()}
                  >
                    Logout
                  </span>
                </li>
              </ul>
            </div>
          </div>
          {/* Right elements */}
        </div>
      </nav>
      <div className="h-[52px]"></div>
    </>
  );
};

export default Navbar;
