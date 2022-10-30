import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ item }) => {

  return (
    <div>
      <Card className="card">
        <Card.Img variant="top" src={item.img} style={{ overflow: "hidden" }} />
        <Card.Body>
          <Card.Title>{item.nombre}</Card.Title>
          {item.stock > 0 ? (
            <Button variant="info">
              <Link to={`/item/${item.id}`} className="link">
                Ver mas
              </Link>
            </Button>
          ) : (
            <p className="btn btn-outline-danger">No hay stock</p>
          )}
        </Card.Body>
      </Card>
    </div>
  );
}

export default Item;
