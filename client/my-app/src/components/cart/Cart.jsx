import React, { useEffect, useState } from "react";
import "./cart.scss";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useDispatch, useSelector } from "react-redux";
import { remove, reset } from "../../redux/cartreducer";
import { Link } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

export default function Cart() {
  const products = useSelector((state) => state.cart.products);
  //console.log(products);
  const dispatch = useDispatch();

  const [subtotal, setsubtotal] = useState();

  var sum = 0;
  var total;

  const totalprice = () => {
    total = 0;
    products.map((product) => (total += product.price * product.quantity));
    return total.toFixed(2);
  };

  const deleteid = (id, quantity, price) => {
    dispatch(remove(id));
    var deleteprice = quantity * price;
    setsubtotal(subtotal - deleteprice);
  };

  const resetcart = () => {
    dispatch(reset());
    setsubtotal(0);
  };

  const stripePromise = loadStripe(
    "pk_test_51No7jZSETKp3uMVs7QcOTFb4ksXucrvhx9peOjKmpBbYqlkQ3aODQEuPRMlRTtpnrp7VNjIub3pFsTm1xzasP3dx00GCWQrhBv"
  );

  const handlepayment = async () => {
    try {
      const stripe = await stripePromise;

      const res = await axios.post(
        "http://localhost:1337/api/orders",
        {
          products,
        },
        {
          headers: {
            Authorization: "Bearer " + process.env.REACT_APP_API_TOKEN,
          },
        }
      );
      console.log(res?.data);
      await stripe.redirectToCheckout({
        sessionId: res?.data?.stripesession?.id,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="cart">
      <h2>Product in your cart</h2>
      {products?.map((item) => (
        <div className="cartitem" key={item.id}>
          <Link to={`/product/${item.id}`} className="link1">
            <div className="image">
              <img
                src={process.env.REACT_APP_API_UPLOAD_URL + item.img}
                alt=""
              />
            </div>
            <div className="info">
              <span className="title">{item.title}</span>
              <p>{item.desc}</p>
              <span className="price">
                {item?.quantity} x ${item?.price}
              </span>
            </div>
            <div
              className="delete"
              onClick={() => deleteid(item?.id, item?.quantity, item?.price)}
            >
              <DeleteOutlineIcon />
            </div>
            <div className="totalprice">
              <span>${item?.quantity * item?.price}</span>
            </div>
          </Link>
        </div>
      ))}
      <div className="last">
        <div className="total">
          <span>SUBTOTAL</span>
          <span>${totalprice()}</span>
        </div>
        <button onClick={handlepayment}>PROCEED TO CHECKOUT</button>
        <span className="reset" onClick={() => resetcart()}>
          Reset Cart
        </span>
      </div>
    </div>
  );
}
