// react imports
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";

// eigen files
import { authActions } from "../../store/auth-slice";
import LoadingSpinner from "../shared/LoadingSpinner";
import "./login.scss";

const Login = () => {
  const emailInputRef = useRef(" ");
  const wachtwoordInputRef = useRef();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  // Functie de wordt getriggered als een gebruiker wilt inloggen. We sturen een post req en checken dit in de backend, als er een error is vangen we deze op in responseData.message
  const submitLoginHandler = async (e) => {
    e.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredWachtwoord = wachtwoordInputRef.current.value;

    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:8000/gebruikers/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: enteredEmail,
          wachtwoord: enteredWachtwoord,
        }),
      });

      const responseData = await response.json();

      // guardClause
      if (!response.ok) throw new Error(responseData.message);

      // Voer de login functie uit en sla deze op in de redux state
      dispatch(
        authActions.login({
          gebruikerId: responseData.gebruiker._id,
          gebruikerNaam: responseData.gebruiker.naam,
          gebruikerEmail: responseData.gebruiker.email,
          gebruikerAdress: responseData.gebruiker.adress,
          gebruikerPlaats: responseData.gebruiker.plaats,
          token: responseData.token,
        })
      );

      // Sla de gebruiker op in localStorage
      localStorage.setItem(
        "gebruikerInfo",
        JSON.stringify({
          gebruikerId: responseData.gebruiker._id,
          gebruikerNaam: responseData.gebruiker.naam,
          gebruikerEmail: responseData.gebruiker.email,
          gebruikerAdress: responseData.gebruiker.adress,
          gebruikerPlaats: responseData.gebruiker.plaats,
          token: responseData.token,
        })
      );

      setIsLoading(false);
      history.push("/");
    } catch (err) {
      console.log(err);
      setError(err.message);
      setIsLoading(false);
    }
  };

  return (
    <div className="login" id="login">
      <div className="container">
        <div className="img__box"></div>
        <div className="login__box">
          <div className="login__form">
            <div className="form__text">
              <h1>Welkom terug !</h1>
              <p>Log in om door te gaan</p>
            </div>
            {isLoading && <LoadingSpinner asOverlay />}
            <form action="#" className="form" onSubmit={submitLoginHandler}>
              {error && <span className="ErroMessage">{error}</span>}
              <div className="box">
                <label htmlFor="email">
                  <i className="fas fa-envelope"></i>
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Vul uw email in"
                  value={emailInputRef.value}
                  ref={emailInputRef}
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
                  ref={wachtwoordInputRef}
                />
              </div>
              <p className="wachtwoordVergeten"> Wachtwoord vergeten ?</p>
              <button>Log in</button>
              <Link to="/signup" className="form__Link">
                <p className="info__text">
                  Heb je geen account? <span>Sign up</span>
                </p>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
