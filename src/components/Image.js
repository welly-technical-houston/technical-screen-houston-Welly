import React from "react";
import "../styles/Image.css";

const Image = ({ image, onClick }) => (
  <div className="Image" onClick={onClick}>
    <img width={200} height={200} src={image} />
  </div>
);

export default Image;
