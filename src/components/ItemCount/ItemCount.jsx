import { useState } from "react";

const ItemCount = ({ stock, addToCart }) => {
  const [count, setCount] = useState(1);

  const handleClickSubtract = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleClickAdd = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  return (
    <div className="d-flex flex-column align-items-start mt-3">
      <div className="d-flex align-items-center mb-3">
        <button className="btn btn-outline-dark btn-sm" onClick={handleClickSubtract} >
          -
        </button>
        <span className="mx-3 fs-5 fw-bold">{count}</span>
        <button className="btn btn-outline-dark btn-sm" onClick={handleClickAdd}  >
          +
        </button>
      </div>

      <button className="btn btn-dark px-2" onClick={() => addToCart(count)}  >
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
