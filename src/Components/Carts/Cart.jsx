import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import { ItemCart } from "../ItemCart/ItemCart";
import "./Cart.css";

export const Cart = () => {

  const { cart, clearCart, totalPriceCart } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="bg-white cartVacio ">
        <h2 className="pt-5 text-center">Tu carrito esta vacio</h2>
        <Link to={"/"} className="col-lg-2 offset-5 link btn btn-success">
          Volver a Comprar
        </Link>
      </div>
    );
  }

  return (
    <div className="cart">

      <h2 className="pt-2 text-center">Carrito De Compras</h2>
      <hr/>

      {cart.map((item) => (
        <ItemCart item={item} />
      ))}

      {totalPriceCart() ? (
        <div className="row">
          <h3 className="col-lg-2 offset-10">Total: {totalPriceCart()} </h3>
          <div className="col-lg-4 offset-4 d-flex justify-content-center">
            <button className="btn btn-danger col-lg-8" onClick={clearCart}>
              Limpiar Carrito
            </button>
            <Link to={"/checkout"} className="mx-2 btn btn-success col-lg-8">
              Comprar
            </Link>
          </div>
        </div>
      ) : null}

    </div>
  );
};
