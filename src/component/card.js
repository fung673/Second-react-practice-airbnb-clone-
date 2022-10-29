import React from "react";

export function Card(props) {
 let badgeText
 if (props.openSpots === 0) {
  badgeText = "SOLD OUT"
 } else if (props.country === "Online") {
  badgeText = "ONLINE"
 }


 return (
  <div className="card">
   {badgeText && <div className="card--badge">{badgeText}</div>}
   <img className="card--image" src={require(`../images/${props.img}`)} alt="katie-zaferes" />
   <div className="card--stats"><img className="card--star" src={require('../images/star.png')} alt="star" />
    <span>{props.rating}</span>
    <span className="grey">({props.reviewCount})．</span>
    <span className="grey">{props.country}</span>
   </div>
   <p className="card--title">{props.title}</p>
   <p className="card--price"><span className="bold">From ${props.price}</span> / person</p>
  </div>)
}