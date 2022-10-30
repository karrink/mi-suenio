import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../Components/Loader/Loader";
import ItemDetail from "../ItemDetail/ItemDetail";
import { db } from "../../Firebase/Config";
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  
  const [product, setProducto] = useState([]);
  const [loading, setLoading] = useState(true);
  const { itemsId } = useParams();

  useEffect(() => {
    setLoading(true);
    const itemRef = doc(db, "productos", itemsId);
    getDoc(itemRef)
      .then((resp) => {
        const itemDB = { id: resp.id, ...resp.data() };
        setProducto(itemDB);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return <>{loading ? <Loader /> : <ItemDetail item={product} />}</>;
};

export default ItemDetailContainer;
