// react imports
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

// eigen files
import CategorieOpties from "./CategorieOpties";
import LoadingSpinner from "../shared/LoadingSpinner";
import ProductList from "./ProductList";
import "./Producten.scss";

const Producten = () => {
  const categorie = useParams().categorie;
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [loadedProducts, setLoadedProducts] = useState();
  const [foundProducts, setFoundProducts] = useState();
  const gebruiker = useSelector((state) => state.auth);

  // useEffect die de producten uit de database haalt. We gebruiken req.param om te filteren in de backend. (param oorbellen = producten/oorbellen laat alleen oorbellen zien)
  useEffect(() => {
    const sendRequest = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`http://localhost:8000/producten?categorie=${categorie}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${gebruiker.gebruikerInfo.token} `,
          },
        });
        const responseData = await response.json();

        if (!response.ok) throw new Error(responseData.message);
        setFoundProducts(responseData.results);
        setLoadedProducts(responseData.data.products);
      } catch (err) {
        setError(err.message);
      }
      setIsLoading(false);
    };
    sendRequest();
  }, [categorie]);

  // Check of er produten zijn om weer te geven.
  const checkProducts = () => {
    if (foundProducts === 0) {
      return (
        <div className="center">
          <h1>We hebben nog geen producten voor deze categorie</h1>
        </div>
      );
    } else {
      return (
        <div className="producten">
          <ul>
            {loadedProducts.map((product) => (
              <ProductList
                key={product._id}
                id={product._id}
                image={product.image}
                prijs={product.prijs}
              />
            ))}
          </ul>
        </div>
      );
    }
  };

  return (
    <div className="categorieen" id="categorieen">
      <div className="categorieen__box">
        {isLoading && (
          <div className="center">
            <LoadingSpinner />
          </div>
        )}

        <div className="categorieen__box--text">
          <h1>Oorbellen</h1>
          {/* Lengte van gevonden resultaten */}
          <p>{foundProducts} Items gevonden</p>
        </div>
        <CategorieOpties />
      </div>

      {error && <h1>{error}</h1>}
      {!isLoading && loadedProducts && (
        <div className="producten__box">
          <div className="producten__box--opties">
            <div className="producten--opties active ">
              <p>Alles</p>
            </div>
            <div className="producten--opties">
              <p>Nieuw</p>
            </div>
          </div>
          {checkProducts()}
        </div>
      )}
    </div>
  );
};

export default Producten;
