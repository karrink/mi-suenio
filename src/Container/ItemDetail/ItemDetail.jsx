import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import "./ItemDetail.css";

const ItemDetail = ({ item }) => {
  const [cantidad, setCantidad] = useState(0);
  const { addToCart, isInCart } = useContext(CartContext);

  const onAdd = () => {
    const itemToCart = {
      id: item.id,
      precio: item.precio,
      nombre: item.nombre,
      stock: item.stock,
      img: item.img,
      cantidad,
    };
    addToCart(itemToCart);
    alert(`Su producto fue agregado con exito al carrito`);
  };

  return (
    <div className="bg-white cont">
      <div className="pt-6">
        <div className="max-w-2xl mx-auto mt-6 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-4 lg:gap-x-8 lg:px-8">
          <div className="hidden overflow-hidden rounded-lg aspect-w-3 aspect-h-4 lg:block">
            <img src={item.img} />
          </div>
        </div>
        <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {item.nombre}
            </h1>
          </div>
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <p className="text-2xl tracking-tight text-gray-900">
              Precio: $ {item.precio}
            </p>
            <p className="text-2xl tracking-tight text-gray-900">
              Cantidad disponible: {item.stock}
            </p>
            <form className="mt-10">
              {isInCart(item.id) ? (
                <>
                  <Button>
                    <Link className="link" to={"/cart"}>
                      Terminar Compra
                    </Link>
                  </Button>
                  <Button className="ml-3 btn btn-success">
                    <Link className="link" to={"/"}>
                      Volver a Comprar
                    </Link>
                  </Button>
                </>
              ) : (
                <ItemCount
                  stock={item.stock}
                  counter={cantidad}
                  setCounter={setCantidad}
                  onAdd={onAdd}
                />
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
