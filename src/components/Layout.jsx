import { Outlet, Link } from "react-router-dom";
import Footer from "./Pages/Footer";
import Navigation from "./Navigation";

const Layout = () => {
  return (
    <>
      <Navigation />
      <Outlet /> 
      <Footer></Footer>

    </>
  )
};

export default Layout;


//outlet hjälper att rendera children routes