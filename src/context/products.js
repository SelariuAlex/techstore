import React, { useState, createContext, useEffect } from "react";
import axios from "axios";
import url from "../utils/URL";

export const ProductContext = createContext();

export default function ProductProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [featured, setFeadtured] = useState([]);

  useEffect(() => {
    axios.get(`${url}/products`).then(response => {
      setProducts(response.data);
    });
    return () => {};
  }, []);

  return (
    <ProductContext.Provider value={{ loading, products, featured }}>
      {children}
    </ProductContext.Provider>
  );
}
