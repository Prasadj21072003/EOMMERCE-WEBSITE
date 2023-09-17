import React from "react";
import "./list.scss";
import Card from "../card/Card";
import Usefetch from "../Usefetch";

export default function List({ catid, sort, maxprice, itemchecked }) {
  const { itemdata } = Usefetch(
    `/products?populate=*&[filters][categories][id][$eq]=${catid}${itemchecked.map(
      (item) => `&[filters][subcategories][id][$eq]=${item}`
    )}&[filters][price][$lte]=${maxprice}&sort=price:${sort}`
  );
  return (
    <div className="list">
      {itemdata?.map((item) => (
        <Card prop={item} key={item.id} />
      ))}
    </div>
  );
}
