import { Link } from "react-router-dom";

function Navigation() {
    return ( 
        <>
              <nav>
        <ul className="ulNav">
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
        </ul>
      </nav></>
     );
}

export default Navigation;