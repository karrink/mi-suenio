import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../Components/Loader/Loader";
import { ItemList } from "../ItemList/ItemList";
import { db } from "../../Firebase/Config";
import { collection, getDocs, limit, query, where } from "firebase/firestore";
import "./ItemListContainer.css";

const ItemListContainer = (props) => {

  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pag, setPag] = useState(4);
  const { categoryId } = useParams();

  const seeMore = (e) => {
    e.preventDefault();
    setPag(pag + 4);
  };

  useEffect(() => {
    setLoading(true);
    const productRef = query(collection(db, "productos"), limit(pag));
    const q = categoryId
      ? query(productRef, where("categoria", "==", categoryId))
      : productRef;
    getDocs(q)
      .then((resp) => {
        const productosDB = resp.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProduct(productosDB);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId, pag]);

  return (
    <div className="container itemList">
      {categoryId ? (
        <h3 className="titulos">{categoryId.toUpperCase()}</h3>
      ) : (
        <h3 className="titulos">{props.greeting}</h3>
      )}
      {loading ? <Loader /> : <ItemList items={product} seeMore={seeMore} />}
    </div>
  );
};

export default ItemListContainer;
