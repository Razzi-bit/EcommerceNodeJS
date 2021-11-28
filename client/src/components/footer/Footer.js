// react imports
import { Link } from "react-router-dom";

// eigen files
import "./footer.scss";

// Domme component die simpelweg de contact pagina laat zien
const Footer = () => {
  return (
    <footer>
      <div className="icons">
        <Link to="https://www.facebook.com/annasaccessoires" target="_blank">
          <i className="fab fa-facebook"></i>
        </Link>
        <Link to="https://nl.pinterest.com/annapegels/" target="_blank">
          <i className="fab fa-pinterest"></i>
        </Link>
        <Link to="https://www.instagram.com/annasaccessoires/" target="_blank">
          <i className="fab fa-instagram"></i>
        </Link>
      </div>
      <div className="footer-tekst">
        <Link to="/retourneren">Retourneren</Link>
        <Link to="/inspiratie">Inspiratie</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </footer>
  );
};

export default Footer;
