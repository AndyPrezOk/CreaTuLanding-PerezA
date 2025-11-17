import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import db from "../../db/db.js";
import ItemDetail from "../ItemDetail/ItemDetail";
import Loading from "../Loading/Loading.jsx";
import ErrorPage from "../ErrorPage/ErrorPage.jsx";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [productNotFound, setProductNotFound] = useState(false);

  const { id } = useParams();

  const getProduct = async () => {
    try {
      const productRef = doc(db, "products", id);
      const dataDb = await getDoc(productRef);

      if (!dataDb.exists()) {
        setProductNotFound(true);
        return;
      }

      const data = { id: dataDb.id, ...dataDb.data() };
      setProduct(data);

    } catch (error) {
      console.log(error);
      setProductNotFound(true);

    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  if (loading) return <Loading />;

  if (productNotFound) return <ErrorPage />;

  return <ItemDetail product={product} />;
};

export default ItemDetailContainer;
