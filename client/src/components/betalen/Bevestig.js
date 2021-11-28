// react imports
import { useRef, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { cartActions } from "../../store/cart-slice";

// eigen files
import LoadingSpinner from "../shared/LoadingSpinner";
import "./bevestig.scss";

// Component waarin we de gebruiker een kans geven om zijn/haar gegevens te bewerken. Als de gebruiker al is ingelogd pakken we deze gegevens van de state en vullen we deze in
const Bevestig = () => {
  const gebruiker = useSelector((state) => state.auth);
  const cart = useSelector((state) => state.cart);
  const naamInputRef = useRef();
  const emailInputRef = useRef();
  const adressInputRef = useRef();
  const plaatsInputRef = useRef();
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    setIsLoading(false);
  }, [gebruiker]);

  const bevestigGegevensHandler = async (e) => {
    e.preventDefault();

    const enteredNaam = naamInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredAdress = adressInputRef.current.value;
    const enteredPlaats = plaatsInputRef.current.value;

    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:8000/winkelmand/plaats-bestelling", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          naam: enteredNaam,
          email: enteredEmail,
          adress: enteredAdress,
          plaats: enteredPlaats,
          cart,
          totalAmount: cart.totalAmount,
        }),
      });

      const responseData = await response.json();
      if (!response.ok) throw new Error(responseData.message);

      // clear state van de winkelmand
      dispatch(cartActions.clearCart());
      // clear local storage winkelmand
      localStorage.removeItem("cartItems");
      setIsLoading(false);
      history.push("/succes");
    } catch (err) {
      setIsLoading(false);
      console.log(err.message);
    }
  };

  const welGebruiker = () => {
    return isLoading ? (
      <LoadingSpinner asOverlay />
    ) : (
      <div className="bevestig__container">
        <h1 className="kop">
          <span>B</span>evestigen
        </h1>
        <div className="bevestig__header">
          <h1>Beste,</h1>
          <p>
            Omdat wij een klein bedrijf zijn vragen we u om het totale bedrag over te maken naar:
            REKENINGNUMMER.
            <br /> Bevestig uw gegevens en wij versturen het product zodra wij de betaling binnen
            hebben. <br />
            Heeft u vragen? Aarzel niet en email naar: EMAIL
          </p>
        </div>

        <form>
          <div className="item">
            <label htmlFor="naam">Naam:</label>
            <input
              id="naam"
              type="text"
              ref={naamInputRef}
              placeholder="Vul uw naam in"
              value={gebruiker.gebruikerInfo.gebruikerNaam}
            />
          </div>
          <div className="item">
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="text"
              ref={emailInputRef}
              placeholder="Vul uw email in"
              value={gebruiker.gebruikerInfo.gebruikerEmail}
            />
          </div>
          <div className="item">
            <label htmlFor="adress">Adress:</label>
            <input
              id="adress"
              type="text"
              ref={adressInputRef}
              placeholder="Vul uw adress in"
              value={gebruiker.gebruikerInfo.gebruikerAdress}
            />
          </div>
          <div className="item">
            <label htmlFor="plaats">Plaats:</label>
            <input
              id="plaats"
              type="text"
              ref={plaatsInputRef}
              placeholder="Vul uw plaats in"
              value={gebruiker.gebruikerInfo.gebruikerPlaats}
            />
          </div>

          <div className="item">
            <label>Amount:</label>
            <p className="totalAmount">{cart.totalAmount}</p>
          </div>
          <button onClick={bevestigGegevensHandler}>Bevestig gegevens</button>
        </form>
      </div>
    );
  };

  const geenGebruiker = () => {
    return isLoading ? (
      <LoadingSpinner asOverlay />
    ) : (
      <div className="bevestig__container">
        <div className="bevestig__header">
          <h1>Beste,</h1>
          <p>
            Omdat wij een klein bedrijf zijn vragen we u om het totale bedrag over te maken naar:
            REKENINGNUMMER. Bevestig uw gegevens en wij versturen het product zodra wij de betaling
            binnen hebben.
          </p>
          <p>Heeft u vragen? Aarzel niet en email naar: EMAIL</p>
        </div>

        <form>
          <div className="item">
            <label htmlFor="naam">Naam:</label>
            <input id="naam" type="text" ref={naamInputRef} placeholder="Vul uw naam in" />
          </div>
          <div className="item">
            <label htmlFor="email">Email:</label>
            <input id="email" type="text" ref={emailInputRef} placeholder="Vul uw email in" />
          </div>
          <div className="item">
            <label htmlFor="adress">Adress:</label>
            <input id="adress" type="text" ref={adressInputRef} placeholder="Vul uw adress in" />
          </div>
          <div className="item">
            <label htmlFor="plaats">Plaats:</label>
            <input id="plaats" type="text" ref={plaatsInputRef} placeholder="Vul uw plaats in" />
          </div>

          <p className="totalAmount">{cart.totalAmount}</p>

          <button onClick={bevestigGegevensHandler}>Bevestig gegevens</button>
        </form>
      </div>
    );
  };

  return (
    <div>
      {gebruiker.isLoggedIn && welGebruiker()}
      {!gebruiker.isLoggedIn && geenGebruiker()}
    </div>
  );
};

export default Bevestig;
