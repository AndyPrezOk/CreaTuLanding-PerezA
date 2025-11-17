import { useState,useEffect, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { addDoc, collection } from "firebase/firestore";
import { Link } from "react-router-dom";
import db from "../../db/db.js";
import FormCheckout from "../FormCheckout/FormCheckout.jsx";

const Checkout = () => {
    const [dataForm, setDataForm] = useState({
        fullname: "",
        phone: "",
        email: ""

    });

    const [orderId, setOrderId] = useState(null);
    const { cart, totalPrice, deleteCart } = useContext(CartContext);

    const handleChangeInput = (event) => {
        setDataForm({ ...dataForm, [event.target.name]: event.target.value });
    }

    const sendOrder = (event) => {
        event.preventDefault();

        const order = {
            buyer: { ...dataForm },
            products: { ...cart },
            total: totalPrice()
        }
        uploadOrder(order);
    }

    const uploadOrder = async (order) => {
        try {
            const orderRef = collection(db, "orders");
            const response = await addDoc(orderRef, order)

            setOrderId(response.id);

        } catch (error) {
            console.log("Error al subir la orden de compra");
        }
    }

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

                    <Link to="/" className="btn btn-dark w-100 mt-3 fw-bold"  onClick={deleteCart} >
                        Finalizar
                    </Link>

                </div>
            ) : (
                <FormCheckout
                    dataForm={dataForm}
                    handleChangeInput={handleChangeInput}
                    sendOrder={sendOrder}/>
            )}
        </div>
    );
}
export default Checkout