import React from "react";

import "./featured.scss";
import Card from "../card/Card";

import Usefetch from "../Usefetch";
export default function Featured(props) {
  const { itemdata } = Usefetch(
    `/products?populate=*&[filters][type][$eq]=${props.type}`
  );

  console.log(itemdata);
  return (
    <div className="featuredcontainer">
      <div className="featured">
        <div className="top">
          <h2>
            {props.type === "featured"
              ? "Featured Products"
              : "Trending Products"}
          </h2>
          <div className="para">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Reprehenderit totam, aspernatur quisquam ducimus aliquid tempora
              dolore. Rem quia iure accusamus possimus mollitia praesentium,
              nisi fugiat dolores repellat beatae eos dolore.
            </p>
          </div>
        </div>
        <div className="bottom">
          {itemdata?.map((item) => (
            <Card prop={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
