import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem"
import "./cart.css";

const Cart = () => {
  const { cart, totalPrice, deleteCart } = useContext(CartContext);

  const formatPrice = (price) => price.toLocaleString("es-AR");

  if (cart.length === 0) {
    return (
      <div className="cart-empty-container text-center p-4">
        <h2>No hay productos en el carrito 😞</h2>
        <Link to="/" className="btn btn-dark mt-3">
          Volver al inicio
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-container card shadow p-3">

      <h4 className="mb-3">Tu carrito</h4>

      {cart.map((productCart) => (
        <CartItem
          key={productCart.id}
          productCart={productCart}
          formatPrice={formatPrice}
        />
      ))}

      <h5 className="mt-3 text-end">
        Importe total:{" "}
        <p className="fw-bold">
          ${formatPrice(totalPrice())}
        </p>
      </h5>

      <Link to="/checkout" className="fw-bold btn btn-outline-dark w-150 mt-3">
        Finalizar la compra
      </Link>

      <button
        className="fw-bold btn btn-outline-danger w-150 mt-3"
        onClick={deleteCart}
      >
        Vaciar carrito
      </button>
    </div>
  );
};

export default Cart;

