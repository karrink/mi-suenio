import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

export const Item = ({item}) => {
    return(
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={item.images.jpg.image_url} />
                <Card.Body>
                <Card.Title><Link to={`/detail/${item.mal_id}`}>{item.title}</Link></Card.Title>
            </Card.Body>
            </Card>
        </div>
    );
};