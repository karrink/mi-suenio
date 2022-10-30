import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import { useContext } from "react";
import "./CartWidget.css"

const CartWidget = () => {

  const { cartQuantity } = useContext(CartContext);

  return (
    <>
      <Link to={"/cart"} className="link">
        <i
          className="text-xl cursor-pointer col-md-2 ri-shopping-cart-line"
        >
          <span>
            {cartQuantity()? " Tienes " + cartQuantity() + " art" : "Mi carrito" } 
          </span>
        </i>
      </Link>
    </>
  );
};

export default CartWidget;