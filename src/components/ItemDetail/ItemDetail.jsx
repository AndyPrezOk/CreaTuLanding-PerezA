import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import "./ItemDetail.css";


const ItemDetail = ({ product }) => {
   
    return (
        <div className ="container py-4"  >
            <Card className= "card">
                <div className = "row">
                    <div className = "col-4 g-0"> 
                    <Card.Img className="img-fluid" src={product.image} />
                    </div>
                    <div className = "col-8"> 
                        <Card.Body >
                           <Card.Title className = "title">{ product.name}</Card.Title>
                            <Card.Title className = "description">{ product.description}</Card.Title>
                            <Card.Title>{"$" + product.price}</Card.Title>
                        </Card.Body>
                    </div>
                </div>
             </Card>
        </div>

    );
}
export default ItemDetail
