import { NavLink } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  return (
    <div className="container">
      <NavLink to="/">
        <h3 className="heading">Deepak Goyal</h3>
      </NavLink>
      <nav>
        <ul>
          <li>
            <NavLink className="navbar-tab" activeClassName="active" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navbar-tab"
              activeClassName="active"
              to="/projects"
            >
              Project
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navbar-tab"
              activeClassName="active"
              to="/blogs"
            >
              Blog
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Navbar;
