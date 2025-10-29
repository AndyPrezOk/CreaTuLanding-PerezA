import getProducts from "../../data/products.js";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { FadeLoader } from "react-spinners";
import "./itemListContainer.css";

const ItemListContainer = ({ mensaje }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true)
  const { category } = useParams();

  useEffect(() => {
    setLoading(true);

    getProducts()
      .then((data) => {
        if (category) {
          const productsFilter = data.filter((product) => product.category === category);
          setProducts(productsFilter);

        } else {
          setProducts(data)
        }

      })
      .finally(() => {
        setLoading(false)
      })

  }, [category])

  return (
    <div className="itemListContainer">
      <h5> {mensaje}  </h5>
      {
        loading ? <div><FadeLoader /></div> : <ItemList products={products} />
      }

    </div>
  )
}

export default ItemListContainer

