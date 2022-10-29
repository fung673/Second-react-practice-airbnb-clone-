import React from "react";
import ReactDOM from "react-dom";

export function Hero() {
 return <section className="hero">
  <img className="hero--photo" src={require('../public/images/grid.png')} alt="grid" />
  <h1 className="hero--header">Online Experience</h1>
  <p className="hero--text">Join Unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
 </section>

}