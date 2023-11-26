import { FC } from "react";
import { Routes, Route, HashRouter, Navigate } from "react-router-dom";
import Home from "../components/screens/home/Home";
import ErrorPage from "../components/screens/404/404";
import BookItem from "../components/screens/bookItem/bookItem";
import AdminPanel from "../components/screens/adminPanel/AdminPanel";
import Login from "../components/screens/authorization/Authorization";
import Registration from "../components/screens/authorization/Registration";
import UserPanel from "../components/screens/user/UserPanel";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import Layout from "../components/layout/Layout";
import Help from "../components/screens/help/Help";
import AboutUs from "../components/screens/about-us/AboutUs";
// import Faq from "../components/screens/faq/Faq";

const Router: FC = () => {
  const user = useSelector((state: RootState) => state.login.user);

  console.log(user)

  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/books/:id" element={<BookItem />} />
          <Route path="/help" element={<Help />} />
          <Route path="/about-us" element={<AboutUs />} />
          {/* <Route path="/faq" element={<Faq />} /> */}
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/user" element={user == "USER" || user == "ADMIN" ? <UserPanel /> : <Navigate to="/login" />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default Router;
