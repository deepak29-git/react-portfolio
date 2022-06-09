import { NavLink } from "react-router-dom";
import "./Navbar.css";
function Navbar({ bg, setBg, setColor }) {
  const darkModeHandler = () => {
    if (bg === "#475569") {
      setBg("white");
      setColor("black");
    } else {
      setBg("#475569");
      setColor("white");
    }
  };

  return (
    <div className="container">
      <div className="title-cotainer">
        <NavLink to="/">
          <h3 className={`${bg === "#475569" ? "white-heading" : "heading"}`}>
            Deepak Goyal
          </h3>
        </NavLink>
        {bg==="#475569"?<span onClick={() => darkModeHandler()} className="material-icons-outlined dark-mode-icon">light_mode</span>:<span onClick={() => darkModeHandler()} className="material-icons-outlined dark-mode-icon">dark_mode</span>}
        

      </div>
      <nav>
        <ul>
          <li>
            <NavLink
              className={`${
                bg === "#475569" ? "nav-darkmode-tab" : "navbar-tab"
              }`}
              activeClassName="active"
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={`${
                bg === "#475569" ? "nav-darkmode-tab" : "navbar-tab"
              }`}
              activeClassName="active"
              to="/projects"
            >
              Project
            </NavLink>
          </li>
          <li>
            <NavLink
              className={`${
                bg === "#475569" ? "nav-darkmode-tab" : "navbar-tab"
              }`}
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
