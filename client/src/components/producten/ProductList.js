// react imports
import { useDispatch } from "react-redux";

// eigen files
import { cartActions } from "../../store/cart-slice";

//  Component die de winkelmand update
const ProductList = (props) => {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id: props.id,
        image: props.image,
        naam: props.naam,
        prijs: props.prijs,
      })
    );
  };
  return (
    <li>
      <img src={props.image} alt={props.naam} />
      <div className="box">
        <div className="product__text">
          <p>{props.naam}</p>
          <p>{props.prijs}</p>
        </div>
        <div className="btn">
          <button onClick={addToCartHandler}>
            <i className="fas fa-shopping-cart"></i>
          </button>
        </div>
      </div>
    </li>
  );
};

export default ProductList;
