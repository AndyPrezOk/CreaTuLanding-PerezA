import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import "./item.css"

const Item = ({ product }) => {
  const formatPrice = (price) => price.toLocaleString("es-AR");
  
  return (
    <div className="main-container product-card">
      <Card className="shadow-sm item-card">
        <Card.Img variant="top" src={product.image} className="item-img" />

        <Card.Body className="text-center">
          <Card.Title className="item-title">{product.name}</Card.Title>
          <Card.Text className="item-price"> ${formatPrice (product.price)}</Card.Text>
          <Link to={`/detail/${product.id}`} className="btn btn-dark w-100 mt-2">
            + INFORMACIÓN
          </Link>
        </Card.Body>

      </Card>
    </div>
  );
}

export default Item;