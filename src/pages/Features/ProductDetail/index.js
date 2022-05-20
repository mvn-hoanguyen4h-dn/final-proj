import React, { useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

function ProductDetail() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("products"))
  );
  const { id } = useParams();
  const item = items.find((product) => product.id.toString() === id);
  console.log(item);

  return (
    <>
      <NavLink to="/management" className="back-item">
        <BsFillArrowLeftCircleFill />
      </NavLink>
      <div className="product-view">
        <div className="product-img">
          <img src={item.productLink} alt="product-img" />
        </div>
        <div className="product-desc">
          <h4>{item.name}</h4>
          <p>
            Price: <span className="product-price">${item.price}</span>
          </p>
          <p>
            ID: <span>{item.ID}</span>
          </p>
          <p>
            Category: <span>{item.category}</span>
          </p>
          <p>
            Quantity: <span>{item.quantity}</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
