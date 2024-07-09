import { Outlet, Link } from "react-router-dom";
import Footer from "./Pages/Footer";

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
