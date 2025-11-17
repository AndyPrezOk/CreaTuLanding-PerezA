import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import ItemCount from '../ItemCount/ItemCount';
import "./itemDetail.css";

const ItemDetail = ({ product }) => {

    const { addProduct } = useContext(CartContext);
    const [hideItemCount, setHideItemCount] = useState(true);

    const addToCart = (count) => {
        setHideItemCount(false);
        const newProduct = { ...product, quantity: count };
        addProduct(newProduct);

    }
    const formatPrice = (price) => price.toLocaleString("es-AR");

    return (
        <div className="container py-4 "  >
            <Card className="card-detail">
                <div className="row">
                    <div className="col-4 g-0">
                        <Card.Img className="img-fluid" src={product.image} />
                    </div>
                    <div className="col-8 ">
                        <Card.Body >
                            <Card.Title className="title">{product.name}</Card.Title>
                            <Card.Title className="description">{product.description}</Card.Title>
                            <Card.Title>{"$" + formatPrice(product.price)}</Card.Title>
                            {
                                hideItemCount ? (
                                    <ItemCount stock={product.stock} addToCart={addToCart} />                                 ) : (

                                    <div className="d-flex  ">
                                        <Link to="/cart" className="btn btn-dark mt-3 me-3">
                                            Ir al carrito
                                        </Link>
                                         <Link to="/" className="btn btn-outline-success mt-3">
                                            Seguir comprando
                                        </Link>
                                        
                                     </div>  
                                )
                            }

                        </Card.Body>
                    </div>
                </div>
            </Card>
        </div>

    );
}
export default ItemDetail 
