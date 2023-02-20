import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import ProductListing from "./components/ProductListing";
import PageNotFound from "./components/PageNotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useSelector, useDispatch } from "react-redux";
import { fetchProduct } from "./redux/actions/productActions";
import { productApi } from "./redux/api/productApi";

const App = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const renderProducts = async () => {
    const response = await productApi.get("/products");
    dispatch(fetchProduct(response));
  };
  useEffect(() => {
    renderProducts();
  }, []);

  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route element={<PageNotFound />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
