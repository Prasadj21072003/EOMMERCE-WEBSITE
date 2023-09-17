import React from "react";
import "./footer.scss";

export default function Footer() {
  return (
    <div className="footer">
      <div className="wrapper">
        <div className="categories">
          <h2>Categories</h2>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accesories</span>
        </div>
        <div className="links">
          <h2>Links</h2>

          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="about">
          <h2>About</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
            aliquam obcaecati quidem iure assumenda sint porro consectetur
            doloremque sed, provident numquam quis eius voluptatum? Excepturi
            voluptate possimus animi ratione perferendis.
          </p>
        </div>
        <div className="contact">
          <h2>Contact</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
            aliquam obcaecati quidem iure assumenda sint porro consectetur
            doloremque sed, provident numquam quis eius voluptatum? Excepturi
            voluptate possimus animi ratione perferendis.
          </p>
        </div>
      </div>

      <div className="last">
        <span>THESTORE</span>
      </div>
    </div>
  );
}
