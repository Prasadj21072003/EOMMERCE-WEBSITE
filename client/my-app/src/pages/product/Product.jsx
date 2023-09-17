import React, { useEffect } from "react";
import "./product.scss";
import Card from "../../components/card/Card";
import { useParams } from "react-router-dom";
import List from "../../components/list/List";
import { useState } from "react";
import Usefetch from "../../components/Usefetch";

export default function Product() {
  const catid = parseInt(useParams().id);
  const { itemdata } = Usefetch(
    `/subcategories?[filters][categories][id][$eq]=${catid}`
  );
  // console.log(itemdata);
  const [maxprice, setmaxprice] = useState(1000);
  const [sort, setsort] = useState();

  const [checkeditem, setcheckeditem] = useState([]);

  const handlechange = (e) => {
    const value = e.target.value;
    const ischecked = e.target.checked;

    setcheckeditem(
      ischecked
        ? [...checkeditem, value]
        : checkeditem.filter((item) => item !== value)
    );
    console.log(checkeditem);
  };

  return (
    <div className="product">
      <div className="wrapper1">
        <div className="left">
          <div className="category">
            <h2>Product Categories</h2>
            {itemdata.map((item) => (
              <div key={item.id}>
                <input
                  type="checkbox"
                  name=""
                  id={item.attributes.title}
                  value={item.id}
                  onChange={handlechange}
                />
                <label htmlFor={item.attributes.title}>
                  {item.attributes.title}
                </label>
              </div>
            ))}
          </div>

          <div className="filter">
            <h2>Filter By Price</h2>
            <div>
              <span>0</span>
              <input
                type="range"
                name="range"
                id="range"
                min={0}
                max={1000}
                onChange={(e) => setmaxprice(e.target.value)}
              />
              <span>{maxprice}</span>
            </div>
          </div>
          <div className="sort">
            <h2>
              Sort By (<span>First Select The Preference</span>)
            </h2>
            <div>
              <input
                type="radio"
                name="price"
                id="pricebylow"
                onChange={() => setsort("asc")}
              />
              <label htmlFor="pricebylow">Price (Lowest first)</label>
            </div>
            <div>
              <input
                type="radio"
                name="price"
                id="pricebyhigh"
                onChange={() => setsort("desc")}
              />
              <label htmlFor="pricebyhigh">Price (Highest first)</label>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="image1">
            <img
              src="https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
          <div className="list1">
            <List
              catid={catid}
              sort={sort}
              maxprice={maxprice}
              itemchecked={checkeditem}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
