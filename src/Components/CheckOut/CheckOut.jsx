import { useContext } from "react";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import { db } from "../../Firebase/Config";
import {
  collection,
  addDoc,
  writeBatch,
  query,
  where,
  documentId,
  getDocs,
} from "firebase/firestore";
import "./CheckOut.css";

const CheckOut = () => {
  const [stock, setStock] = useState(null);
  const [orderID, setOrderID] = useState(null);
  const [input, setInput] = useState({
    nombre: "",
    email: "",
    direccion: "",
  });
  const { cart, totalPriceCart, setCart } = useContext(CartContext);

  const handlerInputs = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handlerSubmit = async (e) => {
    e.preventDefault();
    const order = {
      comprador: { ...input },
      items: cart,
      total: totalPriceCart(),
    };

    if (input.nombre.length < 3 || input.nombre === "") {
      alert("Nombre incorrect");
      return;
    }

    if (input.email === "" || input.email < 3) {
      alert("Email incorrect");
      return;
    }

    if (input.direccion === "" || input.direccion < 3) {
      alert("Direccion incorrect");
      return;
    }

    const batch = writeBatch(db);
    const orderRef = collection(db, "ordenes");
    const productosRef = collection(db, "productos");
    const q = query(
      productosRef,
      where(
        documentId(),
        "in",
        cart.map((item) => item.id)
      )
    );

    const productos = await getDocs(q);
    const outOfStock = [];
    productos.docs.forEach((doc) => {
      const itemsInCart = cart.find((item) => item.id === doc.id);
      if (doc.data().stock >= itemsInCart.cantidad) {
        batch.update(doc.ref, {
          stock: doc.data().stock - itemsInCart.cantidad,
        });
      } else {
        outOfStock.push(itemsInCart);
      }
    });

    if (outOfStock.length === 0) {
      batch.commit().then(() => {
        addDoc(orderRef, order).then((doc) => {
          setOrderID(doc.id);
          setCart([]);
        });
      });
    } else {
      alert(
        `No hay stock del producto ${outOfStock.map((item) => item.nombre)}`
      );
      setCart([]);
    }
  };
  
  if (orderID) {
    return (
      <div className="my-5 orderContainer">
        <div className="order">
          <h2>Compra Exitosa!!</h2>
          <hr />
          <p>
            Tu codigo de compra es: <strong>{orderID}</strong>
          </p>
          <Link to={"/"} className="btn btn-success link">
            Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  if (cart.length === 0) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="my-5 form">
      <div className="checkout">
        <h2>Termina tu Compra</h2>
        <hr />
        <form>
          <input
            name="nombre"
            value={input.nombre}
            onChange={handlerInputs}
            type="text"
            className="my-4 form-control"
            placeholder="Nombre y Apellido"
          />
          <input
            name="email"
            type="email"
            value={input.email}
            onChange={handlerInputs}
            className="my-4 form-control"
            placeholder="Email"
          />
          <input
            name="direccion"
            value={input.direccion}
            onChange={handlerInputs}
            type="text"
            className="my-3 form-control"
            placeholder="Dirección"
          />
          <button
            type="submit"
            className="mt-5 btn btn-primary col-lg-2 offset-5"
            onClick={handlerSubmit}
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
