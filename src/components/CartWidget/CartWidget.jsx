import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import shopping from "../../assets/img/shopping.png"
import "./cartwidget.css"

const CartWidget = () => {
  const {totalQuantity }= useContext (CartContext);
  const quantity = totalQuantity();

  return (
    <Link to = "/cart" className="cart-context" >
            <p className="text"> { quantity >= 0 && quantity}   </p>
            <img  src={shopping}   className="cart"   alt="" />
    </Link>
  )
}
export default CartWidget
