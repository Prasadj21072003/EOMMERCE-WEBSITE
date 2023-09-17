import React from "react";
import "./card.scss";
import { Link } from "react-router-dom";

export default function Card({ prop }) {
  console.log(prop.id);
  return (
    <Link to={`/product/${prop.id}`} className="link">
      <div className="card">
        <div className="container">
          <div className="image">
            <img
              src={
                process.env.REACT_APP_API_UPLOAD_URL +
                prop.attributes?.img?.data?.attributes?.url
              }
              alt=""
              className="firstimg"
            />
            <img
              src={
                process.env.REACT_APP_API_UPLOAD_URL +
                prop.attributes?.img2?.data?.attributes?.url
              }
              alt=""
              className="secondimg"
            />
          </div>
          <h2> {prop.attributes.title}</h2>
          <div className="prices">
            <span className="oldprice">20$</span>
            <span className="newprice">{prop.attributes.price}$</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
