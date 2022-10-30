import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import "./ItemCart.css";

export const ItemCart = ({ item }) => {
  const { removeItemCart } = useContext(CartContext);
  
  return (
    <div className="mb-3 row" key={item.id}>
      <img src={item.img} className="col-lg-1 imgCart" />
      <h5 className="col-lg-4 d-flex">{item.nombre}</h5>
      <i
        onClick={() => removeItemCart(item.id)}
        className="text-4xl cursor-pointer col-lg-2 text-rose-700 ri-delete-bin-line"
      ></i>
      <h6 className="col-lg-2">Cantidad: {item.cantidad}</h6>
      <h6 className="col-lg-2 offset-1">Precio: ${item.precio}</h6>
    </div>
  );
};
