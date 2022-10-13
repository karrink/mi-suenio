import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { Detail } from "./Detail";

export const ItemDetailsContainer = () => {
    const [detail, setDetail] = useState();
    const {id} = useParams();

    useEffect(() =>{
        const URL = `https://api.jikan.moe/v4/anime/${id}`;
        fetch(URL)
            .then((data) => data.json())
            .then((data) => setDetail(data.data))
        },[id])
        
        console.log(detail)
    return detail ? <Detail detail={detail} /> : <h3>Cargando</h3>;
}