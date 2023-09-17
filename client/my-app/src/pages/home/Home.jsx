import React from "react";
import "./home.scss";
import Navbar from "../../components/navbar/Navbar";
import Slider from "../../components/slider/Slider";
import Featured from "../../components/featured/Featured";
import Grid from "../../components/grid/Grid";
import Contact from "../../components/contact/Contact";

export default function Home() {
  return (
    <div className="home">
      <Slider />
      <Featured type="featured" />
      <Grid />
      <Featured type="Trending" />
      <Contact />
    </div>
  );
}
