import React, { useEffect, useState } from "react";
import "./singleproduct.scss";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useParams } from "react-router-dom";

import { useDispatch } from "react-redux";
import Usefetch from "../../components/Usefetch";
import { add } from "../../redux/cartreducer";

export default function Singleproduct() {
  const productid = parseInt(useParams().id);

  const [number, setnumber] = useState(1);
  const [selectedimg, setselectedimg] = useState("");

  const dispatch = useDispatch();

  const { itemdata } = Usefetch(`/products/${productid}?populate=*`);
  // console.log(itemdata);

  return (
    <div className="singleproduct">
      <div className="container">
        <div className="col">
          <div className="image1">
            <img
              src={
                process.env.REACT_APP_API_UPLOAD_URL +
                itemdata.attributes?.img?.data?.attributes?.url
              }
              alt=""
              onClick={() =>
                setselectedimg(
                  process.env.REACT_APP_API_UPLOAD_URL +
                    itemdata.attributes?.img?.data?.attributes?.url
                )
              }
            />
          </div>
          <div className="image2">
            <img
              src={
                process.env.REACT_APP_API_UPLOAD_URL +
                itemdata.attributes?.img2?.data?.attributes?.url
              }
              alt=""
              onClick={() =>
                setselectedimg(
                  process.env.REACT_APP_API_UPLOAD_URL +
                    itemdata.attributes?.img2?.data?.attributes?.url
                )
              }
            />
          </div>
        </div>
        <div className="mediumcol">
          <img
            src={
              selectedimg
                ? selectedimg
                : process.env.REACT_APP_API_UPLOAD_URL +
                  itemdata.attributes?.img?.data?.attributes?.url
            }
            alt=""
          />
        </div>
        <div className="largecol">
          <div className="upperdiv">
            <div className="heading">
              <h2>{itemdata?.attributes?.title}</h2>
            </div>
            <div className="price">
              <span>${itemdata?.attributes?.price}</span>
            </div>
            <div className="desc">
              <p>{itemdata?.attributes?.desc}</p>
            </div>
          </div>
          <div className="add">
            <div className="number">
              <div className="icons">
                <RemoveIcon
                  className="icon"
                  onClick={() =>
                    setnumber((prev) => (prev === 1 ? 1 : prev - 1))
                  }
                />
              </div>
              <div className="span">
                <span>{number}</span>
              </div>
              <div className="icons">
                <AddIcon
                  className="icon"
                  onClick={() => setnumber(number + 1)}
                />
              </div>
            </div>
            <div className="button">
              <button
                onClick={() =>
                  dispatch(
                    add({
                      id: itemdata?.id,
                      title: itemdata?.attributes.title,
                      price: itemdata?.attributes.price,
                      desc: itemdata?.attributes.desc,
                      img: itemdata?.attributes?.img?.data?.attributes?.url,
                      quantity: number,
                    })
                  )
                }
              >
                <AddShoppingCartIcon className="icon" />
                ADD TO CART
              </button>
            </div>
            <div className="addtowishlist">
              <div className="one">
                <button>
                  <FavoriteBorderIcon className="icon" /> ADD TO WISH LIST
                </button>
              </div>
            </div>
          </div>
          <div className="last">
            <div className="one">
              <span>Vender:Polo</span>
              <span>Product Type:T-shirt</span>
              <span>Tag:T-shirt,Women,Top</span>
            </div>
            <div className="two">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
