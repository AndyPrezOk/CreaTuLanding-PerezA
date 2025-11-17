import Item from "../Item/Item"
import "./itemList.css"

const ItemList = ({ products }) => {
  return (
    <div className="itemList">
      {
        products.map((product) => (
          <div key={product.id} className="product-card">
            <Item product={product} />
          </div>
        ))}
    </div>
  )
}

export default ItemList

