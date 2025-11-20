import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { addDoc, collection, doc, getDoc, updateDoc } from "firebase/firestore";
import FormCheckout from "../FormCheckout/FormCheckout";
import db from "../../db/db.js";
import { Link } from "react-router-dom";

const Checkout = () => {
  const [dataForm, setDataForm] = useState({
    fullname: "",
    phone: "",
    email: ""
  });
  const [orderId, setOrderId] = useState(null);

  const { cart, totalPrice, deleteCart } = useContext(CartContext);

  const handleChangeInput = (e) => {
    setDataForm({ ...dataForm, [e.target.name]: e.target.value });
  };

  const sendOrder = async (event) => {
    event.preventDefault();

    try {
      await updateStock();  // ⭐ primero descontamos stock

      const order = {
        buyer: { ...dataForm },
        products: cart,
        total: totalPrice(),
      };

      await uploadOrder(order);
    } catch {
      console.log("Error en el checkout");
    }
  };

  // ⭐ Descuenta stock producto por producto
  const updateStock = async () => {
    for (const item of cart) {
      const itemRef = doc(db, "products", item.id);
      const productSnap = await getDoc(itemRef);

      if (productSnap.exists()) {
        const data = productSnap.data();
        const newStock = data.stock - item.quantity;

        if (newStock < 0) {
          throw new Error("Stock insuficiente");
        }

        await updateDoc(itemRef, { stock: newStock });
      }
    }
  };

  const uploadOrder = async (order) => {
    try {
      const orderRef = collection(db, "orders");
      const response = await addDoc(orderRef, order);
      setOrderId(response.id);
    } catch {
      console.log("Error al subir la orden");
    }
  };

return (
    <div className="container py-5 d-flex justify-content-center">
        {orderId ? (
            <div className="card shadow p-4 card-style" >
                <h3 className="text-success fw-bold text-center">¡Compra realizada!</h3>
                <p className="mt-3 text-center">
                    <strong>ID de tu orden:</strong> {orderId}
                </p>

                <h5 className="fw-bold mt-4">Datos del comprador</h5>
                <div className="mt-2">
                    <p><strong>Nombre:</strong> {dataForm.fullname}</p>
                    <p><strong>Teléfono:</strong> {dataForm.phone}</p>
                    <p><strong>Email:</strong> {dataForm.email}</p>
                </div>

                <h5 className="fw-bold mt-4">Productos</h5>
                <ul className="list-group mb-4">
                    {cart.map((prod) => (
                        <li key={prod.id} className="list-group-item d-flex justify-content-between">
                            <div>
                                {prod.name} <br />
                                <small className="text-muted">
                                    {prod.quantity} x ${prod.price.toLocaleString("es-AR")}
                                </small>
                            </div>
                            <strong>
                                ${(prod.price * prod.quantity).toLocaleString("es-AR")}
                            </strong>
                        </li>
                    ))}
                </ul>

                <div className="text-end">
                    <p className="fw-bold fs-5">
                        Total: ${totalPrice().toLocaleString("es-AR")}
                    </p>
                </div>

                <Link to="/" className="btn btn-dark w-100 mt-3 fw-bold" onClick={deleteCart} >
                    Finalizar
                </Link>

            </div>
        ) : (
            <FormCheckout
                dataForm={dataForm}
                handleChangeInput={handleChangeInput}
                sendOrder={sendOrder} />
        )}
    </div>
);
}
export default Checkout