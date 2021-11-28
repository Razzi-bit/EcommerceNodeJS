// react imports
import { Link } from "react-router-dom";

// eigen imports
import "./succes.scss";

const Succes = () => {
  return (
    <div className="succes__container">
      <div className="succes-img">
        <i className="fas fa-check-circle"></i>
      </div>
      <h1 className="title">Succes!</h1>
      <h2 className="subtitle">Uw bestelling is succesvol binnengekomen!</h2>
      <div className="text">
        Ons team gaat er zo snel mogelijk mee aan de slag. zodra de betaling binnen is gekomen.
        Daarna ontvangt u een tack & trace via email.
      </div>
      <div className="sub-text">Verwachte levering(na betaling) 2-3 werkdagen.</div>
      <div className="button">
        <Link to="/"> Terug naar home</Link>
      </div>
    </div>
  );
};

export default Succes;
