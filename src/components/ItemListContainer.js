import { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import Card from 'react-bootstrap/Card';


    const ItemListContainer = ({items}) => {
        const {id} = useParams();
        const [state, setState] = useState([])
        
        useEffect(()=>{
            const res = fetch("https://rickandmortyapi.com/api/character")
            res.then((res)=>{
                return res.json()
            }).then((value)=>{
                setState(value.results)
            })
            },[])
        
        useEffect(()=>{
            const res = state.filter((value)=>{
                return value.id == id.id
            })
            setState(res)
        },[id])

        return(
        <div className="cards">
            {state.map((items)=>{
                return (
                    <>
                        <Card className="card" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={items.image} key={items.id} />
                                <Card.Body>
                                    <Card.Title><NavLink to={`/items/${items.id}`}>{items.name}</NavLink></Card.Title>
                                </Card.Body>
                        </Card>
                    </>
                )
            })}
        </div>
    )
}

export default ItemListContainer;