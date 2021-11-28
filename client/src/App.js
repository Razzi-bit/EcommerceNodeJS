// react imports
import { useEffect, useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

// Onze compontents
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import Contact from "./components/footer/contact/Contact";
import Inspiratie from "./components/footer/inspiratie/Inspiratie";
import Retourneren from "./components/footer/retourneren/Retourneren";
import Login from "./components/auth/Login";
import Signup from "./components/auth/signup";
import Producten from "./components/producten/Producten";
import Winkelmand from "./components/winkelmand/Winkelmand";
import Bevestig from "./components/betalen/Bevestig";
import Succes from "./components/betalen/Succes";

// Functies etc
import { authActions } from "./store/auth-slice";
import { cartActions } from "./store/cart-slice";
import LoadingSpinner from "./components/shared/LoadingSpinner";
import "./app.scss";

// Wanneer de app opstart zetten we initial true
let isInitial = true;

function App() {
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const cart = useSelector((state) => state.cart);
  const gebruikerIsLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  // Check een keer of er een token is wanneer de app start
  useEffect(() => {
    try {
      const storedData = JSON.parse(localStorage.getItem("gebruikerInfo"));
      if (storedData && storedData.token) {
        dispatch(
          authActions.login({
            gebruikerId: storedData.gebruikerId,
            token: storedData.token,
          })
        );
      }
      setIsLoading(false);
    } catch (err) {
      setError(err.message);
      console.log(err);
      setIsLoading(false);
    }
  }, [dispatch]);

  // Plaats winkelmand items in de localStorage
  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    localStorage.setItem("cartItems", JSON.stringify(cart));
  }, [cart]);

  // Check localStorage en vul de winkelmand met de producten die in localstorage zitten
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("cartItems"));

    if (storedData) {
      storedData.items.forEach((item) => {
        dispatch(
          cartActions.addItemToCart({
            id: item.id,
            prijs: item.prijs,
            image: item.image,
            naam: item.naam,
          })
        );
      });
    }
  }, []);

  // Routes afhankelijk van of gebruiker is ingelogd of niet
  let routes;

  if (gebruikerIsLoggedIn) {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/producten/:categorie" exact>
          <Producten />
        </Route>
        <Route path="/product/:productId" exact>
          <Home />
        </Route>
        <Route path="/winkelmand" exact>
          <Winkelmand />
        </Route>
        <Route path="/winkelmand/bevestigen" exact>
          <Bevestig />
        </Route>
        <Route path="/succes" exact>
          <Succes />
        </Route>
        <Route path="/contact" exact>
          <Contact />
        </Route>
        <Route path="/inspiratie" exact>
          <Inspiratie />
        </Route>
        <Route path="/retourneren" exact>
          <Retourneren />
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/signup" exact>
          <Signup />
        </Route>
        <Route path="/wachtwoordVergeten" exact>
          <Home />
        </Route>
        <Route path="/resetWachtwoord" exact>
          <Home />
        </Route>
        <Route path="/producten/:categorie" exact>
          <Producten />
        </Route>
        <Route path="/product/:productId" exact>
          <Home />
        </Route>
        <Route path="/winkelmand" exact>
          <Winkelmand />
        </Route>
        <Route path="/winkelmand/bevestigen" exact>
          <Bevestig />
        </Route>
        <Route path="/succes" exact>
          <Succes />
        </Route>
        <Route path="/contact" exact>
          <Contact />
        </Route>
        <Route path="/inspiratie" exact>
          <Inspiratie />
        </Route>
        <Route path="/retourneren" exact>
          <Retourneren />
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    );
  }

  // Return JSX op basis van inlogStatus, errorStatus en isLoading status

  return (
    <div className="App">
      {error && <h1>${error}</h1>}
      {isLoading ? (
        <LoadingSpinner asOverlay />
      ) : (
        <>
          <Navbar />
          {routes}
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
