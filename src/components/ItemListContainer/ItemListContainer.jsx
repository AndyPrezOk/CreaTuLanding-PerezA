import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import ItemList from "../ItemList/ItemList";
import Loading from "../Loading/Loading";
import ErrorPage from "../ErrorPage/ErrorPage";
import db from "../../db/db.js";
import "./itemListContainer.css";

const ItemListContainer = ({ mensaje }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { category } = useParams();

  const validCategories = ["bolsos", "raquetas", "accesorios"];

  if (category && !validCategories.includes(category.toLowerCase())) {
    return <ErrorPage />;
  }

  const getProducts = async () => {
    try {
      let q = collection(db, "products");

      if (category) {
        q = query(q, where("category", "==", category));
      }

      const dataDb = await getDocs(q);
      const data = dataDb.docs.map((productDb) => {
        return { id: productDb.id, ...productDb.data() };
      });

      setProducts(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    getProducts();
  }, [category]);

  return (
    <div className="itemListContainer container py-4 text-center">
      <h4 className="mensaje mb-4">{mensaje}</h4>

      {
        loading ? (
          <Loading />
        ) : products.length === 0 && category ? (
          <ErrorPage />
        ) : (
          <ItemList products={products} />
        )
      }
    </div>
  );
};

export default ItemListContainer;

