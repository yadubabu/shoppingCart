import React from "react";
import { useSelector } from "react-redux";
// import "../style/productStyle.scss";

const ProductListing = () => {
  const products = useSelector((state) => state.products);
  return (
    <>
      {products.products.map((product) => (
        <div key={product.id} className="product">
          <h4>{product.title}</h4>
          <a href={`/product/${product.id}`}>
            <img
              src={`${product.image}`}
              alt="product"
              width="100px"
              height="100px"
            />
          </a>
        </div>
      ))}
    </>
  );
};

export default ProductListing;
