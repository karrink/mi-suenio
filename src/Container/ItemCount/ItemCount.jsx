import Button from "react-bootstrap/Button";
import "./ItemCount.css";

const ItemCount = ({ stock, counter, setCounter, onAdd }) => {
  
  const add = (e) => {
    e.preventDefault();
    counter < stock && setCounter(counter + 1);
  };

  const subtract = (e) => {
    e.preventDefault();
    setCounter(counter - 1);
  };

  const reset = (e) => {
    e.preventDefault();
    setCounter(0);
  };

  return (
    <>
      <div className="mb-2">
        <p>Cantidad: {counter}</p>
        <button disabled={counter === 0} onClick={subtract}>
          <span className="span">
            <i className="ri-subtract-line"></i>
          </span>
        </button>
        <button onClick={reset}>
          <span className="span">
            <i className="ri-restart-line"></i>
          </span>
        </button>
        <button disabled={counter === stock} onClick={add}>
          <span className="span">
            <i className="ri-add-circle-line"></i>
          </span>
        </button>
      </div>
      <Button
        onClick={() => onAdd(counter)}
        disabled={counter === 0}
        variant="success"
      >
        Añadir al Carrito
      </Button>
    </>
  );
};

export default ItemCount;
