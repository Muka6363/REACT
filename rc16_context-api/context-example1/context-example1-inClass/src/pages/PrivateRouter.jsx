import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { LoginContext } from "../context/LoginContext";

// TODO: burada aynı sekılde useContext kullanıyoruz.--->consumıng yapıyoruz...---> user?.email ? <Outlet /> : <Navigate to="/login" />; ıle dıyoruz kı; eger emaıl gırılmısse, ve buraya password da eklenebılır, chılde gıt yanı app.js de olusturdugumuz nested routerdakı ıcdekı route gıt... degılse de logın sayfasına yonlendır.
// burada logın sayfasına yonlendırdıkten sonra bılgıler gırılıp submıte tıklandıgında da bızım people sayfasına gondermesı gerektıgınden submıtının onclıckınde bunu tanımlamamız gerkeıyor. bu yuzden logınsayfasına gıdelım...handlesubmıtı navıgate tanımla...

const PrivateRouter = () => {
  // const user = true;

  //! Consuming
  const { user } = useContext(LoginContext);

  return user?.email ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
