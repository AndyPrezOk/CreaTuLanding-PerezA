import { Link } from "react-router-dom";
import "./item.css"
import Card from 'react-bootstrap/Card';

const Item = ({product}) => {
  return (
    <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Title>{"$"+ product.price}</Card.Title>
        <Link to =  { "/detail/"+ product.id}   className="btn btn-dark">+ INFORMACIÓN</Link>
      </Card.Body>
    </Card>
  );
}
export default Item;