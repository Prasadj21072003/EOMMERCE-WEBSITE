import React, { useState, useRef } from "react";
import "./slider.scss";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

export default function Slider() {
  const [moved, setmoved] = useState(0);
  const [leftbutton, setleftbutton] = useState(false);
  const prevmove = () => {
    setmoved(moved === 0 ? 2 : (prev) => prev - 1);
  };
  const nextmove = () => {
    setmoved(moved === 2 ? 0 : (prev) => prev + 1);
  };
  return (
    <div className="slider">
      <div className="slidercontainer">
        <div
          className="images"
          style={{ transform: `translateX(${moved * -100}vw)` }}
        >
          <img
            src="https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <img
            src="https://images.pexels.com/photos/13450629/pexels-photo-13450629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <img
            src="https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        <div className="icons">
          <ArrowCircleLeftIcon className="icon" onClick={prevmove} />
          <ArrowCircleRightIcon className="icon" onClick={nextmove} />
        </div>
      </div>
    </div>
  );
}
