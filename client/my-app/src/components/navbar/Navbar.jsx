import React, { useEffect, useState } from "react";
import "./navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link } from "react-router-dom";
import Cart from "../cart/Cart";
import { useSelector } from "react-redux";

export default function Navbar() {
  const [cart, setcart] = useState(false);
  const [cartitem, setcartitem] = useState(0);
  const products = useSelector((state) => state.cart.products);
  //  console.log(products.length);
  useEffect(() => {
    setcartitem(products.length);
  }, [products.length]);
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <span>
            USA
            <ArrowDropDownIcon className="icon" />
          </span>
          <Link to="/productlist/1" style={{ textDecoration: "none" }}>
            <span className="links">Men</span>
          </Link>
          <Link to="/productlist/2" style={{ textDecoration: "none" }}>
            <span className="links">Women</span>
          </Link>

          <Link to="/productlist/4" style={{ textDecoration: "none" }}>
            <span className="links">Watch</span>
          </Link>
          <Link to="/productlist/3" style={{ textDecoration: "none" }}>
            <span className="links">Shoes</span>
          </Link>
        </div>

        <div className="logo">
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            THESTORE
          </Link>
        </div>

        <div className="right">
          <Link to="/" style={{ textDecoration: "none" }}>
            <span className="links">Homepage</span>
          </Link>

          <Link to="/about" style={{ textDecoration: "none" }}>
            <span className="links">About</span>
          </Link>

          <Link to="/contact" style={{ textDecoration: "none" }}>
            <span className="links">Contact</span>
          </Link>

          <Link to="/store" style={{ textDecoration: "none" }}>
            <span className="links">Stores</span>
          </Link>

          <div className="icons">
            <SearchIcon className="icon" />
            <PersonIcon className="icon" />
            <FavoriteIcon className="icon" />

            <ShoppingCartIcon className="icon" onClick={() => setcart(!cart)} />
            <span>{cartitem}</span>
          </div>
        </div>
      </div>
      {cart && <Cart />}
    </div>
  );
}
