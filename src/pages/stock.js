import React from "react";
import stocks from "../data";
import { useParams } from "react-router-dom";

export default function Stock() {
  const { symbol } = useParams();
  // 
  const foundStock = stocks.find((stock) => stock.symbol == symbol);
  return (
    <div>
      <h2>Stock page for {symbol}</h2>
      <h2>Name: {foundStock.name}</h2>
      <h2>Price: {foundStock.lastPrice}</h2>
    </div>
  );
}
