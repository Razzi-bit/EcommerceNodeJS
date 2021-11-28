// react imports

import { Link } from "react-router-dom";
import useForm from "./useForm";

// eigen files
import "./signup.scss";
import LoadingSpinner from "../shared/LoadingSpinner";
import validate from "./validateInfo";

const Signup = () => {
  // Maak variabelen zodat je ze gemakkelijk kan gebruiken in jsx
  const { handleChange, values, handleSubmit, errors, formTouched, isLoading } = useForm(validate);

  return (
    <div className="login" id="login">
      <div className="container">
        <div className="img__box"></div>
        <div className="login__box">
          <div className="login__form">
            <div className="form__text">
              <h1>Welkom!</h1>
              <p>Registreer om door te gaan</p>
            </div>
            {isLoading && <LoadingSpinner asOverlay />}
            <form action="#" className="form" onSubmit={handleSubmit}>
              {errors && formTouched && <span className="ErroMessage">{errors[0]}</span>}
              <div className="box">
                <label htmlFor="naam">
                  <i className="fas fa-signature"></i>
                </label>
                <input
                  type="text"
                  id="naam"
                  name="naam"
                  placeholder="Vul uw naam in"
                  value={values.naam}
                  onChange={handleChange}
                />
              </div>
              <div className="box">
                <label htmlFor="email">
                  <i className="fas fa-envelope"></i>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Vul uw email in"
                  value={values.email}
                  onChange={handleChange}
                />
              </div>
              <div className="box">
                <label htmlFor="adress">
                  <i className="fas fa-map-marker"></i>
                </label>
                <input
                  type="text"
                  id="adress"
                  name="adress"
                  placeholder="Vul uw adress in"
                  value={values.adress}
                  onChange={handleChange}
                />
              </div>
              <div className="box">
                <label htmlFor="plaats">
                  <i className="fas fa-street-view"></i>
                </label>
                <input
                  type="text"
                  id="plaats"
                  name="plaats"
                  placeholder="Vul uw plaats in"
                  value={values.plaats}
                  onChange={handleChange}
                />
              </div>
              <div className="box">
                <label htmlFor="wachtwoord">
                  <i className="fas fa-lock"></i>
                </label>
                <input
                  type="password"
                  id="wachtwoord"
                  name="wachtwoord"
                  placeholder="Vul uw wachtwoord in"
                  value={values.wachtwoord}
                  onChange={handleChange}
                />
              </div>
              <div className="box">
                <label htmlFor="bevestigWachtwoord">
                  <i className="fas fa-lock"></i>
                </label>
                <input
                  type="password"
                  id="bevestigWachtwoord"
                  name="bevestigWachtwoord"
                  placeholder="Bevestig uw wachtwoord"
                  value={values.bevestigWachtwoord}
                  onChange={handleChange}
                />
              </div>
              <p className="wachtwoordVergeten"> Wachtwoord vergeten ?</p>
              <button>Registreren</button>
              <Link to="/login" className="form__Link">
                <p className="info__text">
                  Heb je al een account? <span>Log in</span>
                </p>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
