import React from "react";
 
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Navbar/Header";

const Main = () => {
  return (
    <div>
      <Header/>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
