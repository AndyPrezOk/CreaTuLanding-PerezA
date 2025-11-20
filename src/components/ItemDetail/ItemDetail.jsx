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
                         
                            {product.stock <= 5 && product.stock > 0 && (
                                <p className="text-danger fw-bold mt-2">
                                    {product.stock === 1
                                        ? "Última unidad disponible"
                                        : `Últimas ${product.stock} unidades disponibles`}
                                </p>
                            )}
                            {product.stock === 0 ? (
                                <div className="mt-4">
                                    <p className="text-danger fw-bold fs-5">
                                        Producto sin stock
                                    </p>
                                    <div className='d-flex'>
                                        <button className="btn btn-secondary disabled me-3">
                                            No disponible
                                        </button>
                                        <Link to="/cart" className="btn btn-outline-dark">
                                            Ir al carrito
                                        </Link>
                                    </div>
                                </div>
                            ) : (
                                <>
                                    {hideItemCount ? (
                                        <ItemCount
                                            stock={product.stock}
                                            addToCart={addToCart}
                                        />
                                    ) : (
                                        <div className="d-flex">
                                            <Link to="/cart" className="btn btn-outline-dark mt-3 me-3">
                                                Ir al carrito
                                            </Link>
                                            <Link to="/" className="btn btn-outline-dark mt-3">
                                                Seguir comprando
                                            </Link>
                                        </div>
                                    )}
                                </>
                            )}

                        </Card.Body>
                    </div>
                </div>
            </Card>
        </div>
    );
}

export default ItemDetail;