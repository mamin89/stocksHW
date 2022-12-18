import React from 'react'
import {Link} from "react-router-dom"

export default function Navbar() {
  return (
    <div style={{backgroundColor: "red"}}>
        <Link to="/" style={{marginRight: "5px"}}>
            Home
        </Link>
        <Link to="/stocks" style={{marginRight: "5px"}}>
            Stocks
        </Link>
        <Link to="/about" style={{marginRight: "5px"}}>
            About
        </Link>
    </div>
  )
}
