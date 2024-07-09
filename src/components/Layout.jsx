import { Outlet, Link } from "react-router-dom";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <nav>
        <ul className="ulNav">
          <li>
            <Link to="/"> // Home</Link>
          </li>
          <li>
            <Link to="/contact">// Contact</Link>
          </li>
          <li>
            <Link to="/portfolio">// Portfolio</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
      <Footer></Footer>

    </>
  )
};

export default Layout;


//to do
//- change between colors on div for RUBRIK on teh different projects
// - button for dark or light mode