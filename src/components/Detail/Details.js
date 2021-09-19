import React, { Component } from "react";
import "./Detail.css";

function Details(props) {
  const colorrOpt = props.product.colorOptions.map((colr, Indx) => {
    return (
      <img
        src={colr.imageUrl}
        alt={colr.StyleName}
        className="productImgSm"
        key={Indx}
        onClick={() => props.oncoloroptionclick(Indx)}
      />
    );
  });

  const feature = props.product.featureList.map((item, pos) => {
    return (
      <button
        className="time-Btn"
        key={pos}
        onClick={() => props.onfeatureitemclick(pos)}
      >
        {item}
      </button>
    );
  });

  return (
    <div className="Sec-Right">
      <h2>{props.product.title}</h2>
      <p>{props.product.description}</p>

      {colorrOpt}

      {/* <img src={props.product.colorOptions[0].imageUrl}  alt={props.product.colorOptions[0].StyleName} className="productImgSm"/>
                    <img src={props.product.colorOptions[1].imageUrl}  alt={props.product.colorOptions[1].StyleName} className="productImgSm"/>
                    <img src={props.product.colorOptions[2].imageUrl}  alt={props.product.colorOptions[2].StyleName} className="productImgSm"/>
                    <img src={props.product.colorOptions[3].imageUrl}  alt={props.product.colorOptions[3].StyleName} className="productImgSm"/> */}

      <br />

      {/* value chnage by button */}

      {feature}

      {/* <button className="time-Btn">{this.props.product.featureList[0]}</button>
                    <button className="Hrate-Btn">{this.props.product.featureList[1]}</button> */}

      <br />

      <button className="buy-Btn">{props.product.Buynow}</button>
    </div>
  );
}
export default Details;
