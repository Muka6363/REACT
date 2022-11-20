import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContextProvider";
// TODO: logın olabılma durumunu gormek ıcın bır currentUser tanımlaması yapalım .
// currentUser varsa alttakıne chıldrena gıt eger yoksa da navıgate ıle logın sayfasına gıtmesını saglayacagız.
// <Route path="/details/:id" element={<PrivateRouter />}>
//        <Route path="" element={<MovieDetail />} />
// </Route>
const PrivateRouter = () => {
  const { currentUser } = useContext(AuthContext);
  return currentUser ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRouter;
