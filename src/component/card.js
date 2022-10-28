import React from "react";

export function Card(props) {
 return <div className="card"><img className="card--image" src={require('../images/katie-zaferes.png')} alt="katie-zaferes" />
  <div className="card--stats"><img className="card--star" src={require('../images/star.png')} alt="star" />
   <span>5.0</span>
   <span className="grey">(6)．</span>
   <span className="grey">USA</span>
  </div>
  <p>Life lesson with Katie Zaferes</p>
  <p><span className="bold">From $136</span> / person</p>
 </div>
}