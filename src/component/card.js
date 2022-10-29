import React from "react";

export function Card(props) {
 return <div className="card"><img className="card--image" src={require(`../images/${props.img}`)} alt="katie-zaferes" />
  <div className="card--stats"><img className="card--star" src={require('../images/star.png')} alt="star" />
   <span>{props.rating}</span>
   <span className="grey">({props.reviewCount})．</span>
   <span className="grey">{props.country}</span>
  </div>
  <p>{props.title}</p>
  <p><span className="bold">From ${props.price}</span> / person</p>
 </div>
}