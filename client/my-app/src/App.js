import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Topbottom from "./components/topbottom/Topbottom";
import "./App.css";
import Product from "./pages/product/Product";
import Singleproduct from "./pages/singleproduct/Singleproduct";

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Topbottom />}>
            <Route index element={<Home />} />

            <Route path="/productlist/:id" element={<Product />} />
            <Route path="product/:id" element={<Singleproduct />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}
