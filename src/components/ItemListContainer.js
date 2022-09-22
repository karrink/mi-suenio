import Container from 'react-bootstrap/Container';

function ItemListContainer(props) {
        return (
            <Container>
                <h1>{props.greeting}</h1>
            </Container>
            
        );
}

export default ItemListContainer;