import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import {List} from "./ItemList"


export const ItemListContainer = () =>{
    const [content, setContent] = useState([]);
    const {id} = useParams();
    
    useEffect(() => {
        const URLRating = `https://api.jikan.moe/v4/anime?rating=${id}`;
        fetch(URLRating)
        .then((res)=>res.json())
        .then((data)=>setContent(data.data))
        .catch((err)=> console.log(err));
    }, [id])
    
    
    return content.length ? <List items={content} /> : <h2>Cargando...</h2>;
};