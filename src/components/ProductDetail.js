import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "../style/productStyle.css";

const ProductDetail = ({ addCart }) => {
  const products = useSelector((state) => state.products.products);
  const paramId = useParams().productId;
  return (
    <>
      {products
        .filter((product) => product.id === parseInt(paramId))
        .map((val) => {
          return (
            <>
              <h4>{val.title}</h4>
              <div className="block">
                <p
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img src={val.image} width="170px" height="190px" alt="" />
                </p>
                <p className="dec">
                  <h4>{val.title}</h4>
                  <p>{val.price}</p>
                  <p className="circle"></p>
                  <p className="cat">{val.category}</p>
                  <p className="descr">{val.description}</p>
                  <p>
                    <button>Add to cart</button>
                  </p>
                </p>
              </div>
            </>
          );
        })}
    </>
  );
};

export default ProductDetail;
