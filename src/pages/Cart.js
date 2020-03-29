import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/cart";
import EmptyCart from "../components/Cart/EmptyCart";
import CartItem from "../components/Cart/CartItem";

export default function Cart() {
  let user = false;
  const { cart, total } = useContext(CartContext);

  if (cart.length === 0) {
    return <EmptyCart />;
  }

  return <h1>{total}</h1>;
}
