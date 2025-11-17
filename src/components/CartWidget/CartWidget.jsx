import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import carrito from "../../assets/img/carrito.png";
import "./cartwidget.css"


const CartWidget = () => {
  const {totalQuantity }= useContext (CartContext);
  const quantity = totalQuantity();

  return (
    <Link to = "/cart" className="cart">
            <p className="texto"> { quantity >= 0 && quantity}   </p>
            <img  src={carrito}   className="carrito"   alt="" />
    </Link>
  )
}
export default CartWidget
