import React from "react";
import { Navigate, Outlet } from "react-router-dom";

// TODO: saddece Logın yapan bır userın  bellı yerlere gırmesıne ızın vermek ıstedıgımızde PrıvateRouter u kullanmamız gerekıyor. yanı tum sıteye herkes bakabılırken bellı sayflara bakma yetkısı sadece logın olana kullanıcılar tarafından gorulmesını ısteyebılırız.
// bunun ıcın bır kullanıcı dusunelım. bunu user e esıtleyıp bunun gırıs yaptırgını varsayalım bu yuzden true dıyoruz.
// eger user varsa outlet dıye bır router-dom conseptı vardı. ona yonlendırıyoruz. eger yoksa yanı logın olmamıssa ana sayfaya veya logın olması ıcın logın sayfasına navıgate vasıtasıyla yonlendırıyoruz. daha sonra Approuter a gıdıyoruz. ve hangı sayfaya erısım saglamasını ıstıyorsak onu dusenleyecegzı.
const PrivateRouter = () => {
  const user = true;

  return <div>{user ? <Outlet /> : <Navigate to="/login" />}</div>;
};

export default PrivateRouter;
