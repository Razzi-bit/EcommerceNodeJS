// react imports
import { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

// Eigen imports
import WinkelmandList from "./WinkelmandList";
import LoadingSpinner from "../shared/LoadingSpinner";
import "./winkelmand.scss";

// Component die de winkelmand laat zien. Vanaf hier posten we het winkelmandje in de backend(Is eigenlijk niet nodig)
const WinkelMand = () => {
  const cart = useSelector((state) => state.cart);
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const postCartHandler = async () => {
    const items = cart.items;
    const totalQuantity = cart.totalQuantity;
    const totalAmount = cart.totalAmount;

    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:8000/winkelmand/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items,
          totalQuantity,
          totalAmount,
        }),
      });

      const responseData = await response.json();
      console.log(responseData);
      if (!response.ok) throw new Error(responseData.message);
      setIsLoading(false);
      history.push("/winkelmand/bevestigen");
    } catch (err) {
      setIsLoading(false);
      console.log(err.message);
    }
  };

  return (
    <div className="winkelmand">
      <h1>Winkelmand</h1>
      <div className="winkelmand_box">
        {isLoading && <LoadingSpinner asOverlay />}
        <ul>
          {cart.items.map((item) => (
            <WinkelmandList
              key={item.id}
              id={item.id}
              naam={item.naam}
              prijs={item.prijs}
              quantity={item.quantity}
              totalPrice={item.totalPrice}
              image={item.image}
            />
          ))}
        </ul>
        <div className="afreken_box">
          <div className="totaal">
            <h1>Totaal</h1>
            <p>$ {cartTotalAmount.toFixed(2)} </p>
          </div>
          <div className="btn_afrekenen">
            <button onClick={postCartHandler}>Gegevens controleren</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WinkelMand;
