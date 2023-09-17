import React from "react";
import "./grid.scss";
import { Link } from "react-router-dom";
export default function Grid() {
  return (
    <div className="grid">
      <div className="gridcontainer">
        <div className="col">
          <div className="row1">
            <img
              src="https://images.pexels.com/photos/4904563/pexels-photo-4904563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />

            <button>
              <Link to="/productlist/1" className="link">
                MEN
              </Link>
            </button>
          </div>
          <div className="row2">
            <img
              src="https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />

            <button>
              <Link to="/productlist/2" className="link">
                WOMEN
              </Link>
            </button>
          </div>
        </div>
        <div className="col">
          <div className="longrow">
            <img
              src="https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />

            <button>
              <Link to="/productlist/6" className="link">
                HOODIES
              </Link>
            </button>
          </div>
        </div>
        <div className="largecol">
          <div className="row1">
            <div className="col">
              <img
                src="https://images.pexels.com/photos/1976758/pexels-photo-1976758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />

              <button>
                <Link to="/productlist/5" className="link">
                  GLASSES
                </Link>
              </button>
            </div>
            <div className="col">
              <img
                src="https://images.pexels.com/photos/5895646/pexels-photo-5895646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />

              <button>
                <Link to="/productlist/4" className="link">
                  WATCH
                </Link>
              </button>
            </div>
          </div>
          <div className="row2">
            <img
              src="https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />

            <button>
              <Link to="/productlist/3" className="link">
                SHOES
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
