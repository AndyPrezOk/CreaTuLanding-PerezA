import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartItem = ({ productCart, formatPrice }) => {
  const { deleteProductById, decreaseQuantity, increaseQuantity } =
    useContext(CartContext);

  return (
    <div className="d-flex border-bottom py-3">

      <img
        src={productCart.image}
        alt={productCart.name}
        className="me-3 rounded"
        style={{ width: "70px", height: "70px", objectFit: "cover" }}
      />

      <div className="flex-grow-1">
        <p className="fw-semibold m-0">{productCart.name}</p>
        <p className="text-muted m-0">
          Precio unidad: ${formatPrice(productCart.price)}
        </p>

        <div className="d-flex align-items-center mt-2">
          <button
            className="btn btn-sm btn-outline-dark"
            onClick={() => decreaseQuantity(productCart.id)}
          >
            -
          </button>

          <span className="mx-3 fw-bold">{productCart.quantity}</span>

          <button
            className="btn btn-sm btn-outline-dark"
            onClick={() => increaseQuantity(productCart.id)}
          >
            +
          </button>
        </div>
      </div>

      <div className="text-end">
        <p className="fw-bold m-0">
          ${formatPrice(productCart.price * productCart.quantity)}
        </p>

        <button
          className="btn btn-sm btn-outline-danger mt-2"
          onClick={() => deleteProductById(productCart.id)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default CartItem;
