import { Card, ListGroup } from "react-bootstrap";

export const Detail = ({detail}) => {
    <div className="cards">
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={detail.images.jpg.image_url} />
            <Card.Body>
                <Card.Title>{detail.title}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>{detail.rating}</ListGroup.Item>
                <ListGroup.Item>{detail.type}</ListGroup.Item>
                <ListGroup.Item>{detail.year}</ListGroup.Item>
            </ListGroup>
        </Card>
    </div>
};