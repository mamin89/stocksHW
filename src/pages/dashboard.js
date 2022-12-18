import React from "react";
import { Link } from "react-router-dom";

import stocks from "../data";

export default function Dashboard() {
  return (
    <ul>
      {stocks.map((stock) => (
        <li>
          <Link to={"/stocks/" + stock.symbol}>{stock.name}</Link>
        </li>
      ))}
    </ul>
  );
}
