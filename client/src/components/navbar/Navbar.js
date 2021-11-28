// react imports
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useSelector } from "react-redux";

// eigen files
import "./navbar.scss";

// Component voor de navbar, deze checkt hoeveel producten er in het winkelmandje zitten.
const Navbar = () => {
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <header>
      <nav className="navbar__laptop">
        <FaBars className="hamburger" />
        <div className="nav__menu-mobiel">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/producten/:categorie">Oorbellen</NavLink>
          <NavLink to="/producten/:armbanden">Armbanden</NavLink>
          <NavLink to="/producten/:babyaccessoires">Baby accessoires</NavLink>
          <NavLink to="/producten/:tassen">Tassen</NavLink>
          <NavLink to="/producten/:waxmelts">Wax Melts</NavLink>
          <NavLink to="/profiel">Profiel</NavLink>
        </div>
        <NavLink className="home" to="/">
          Home
        </NavLink>
        <div className="dropdown">
          Categorieën <i className="fas fa-caret-down"></i>
          <div className="dropdown__menu">
            <ul>
              <li>
                <NavLink to="/producten/oorbellen">Oorbellen</NavLink>
              </li>
              <li>
                <NavLink to="/producten/armbanden">Armbanden</NavLink>
              </li>
              <li>
                <NavLink to="/producten/babyaccessoires">Baby-accessoires</NavLink>
              </li>
              <li>
                <NavLink to="/producten/tassen">Tassen</NavLink>
              </li>
              <li>
                <NavLink to="/producten/waxmelts">Wax Melts</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <h2>Anna's accessoires</h2>
      <div className="navbar__gebruiker-info">
        <NavLink to="/login" className="gebruiker">
          <i className="fas fa-user"></i>
        </NavLink>

        <NavLink to="/winkelmand">
          <i className="fas fa-shopping-cart"></i>
          <p className="item_nummer">{cartQuantity}</p>
        </NavLink>
      </div>
    </header>
  );
};

export default Navbar;
