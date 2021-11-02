import React from "react";
import './style.css'

const GifGridItem = ({ title, url }) => {
  return (
    <div className="main-card">
      <div className="">
        <h3 className="card-title">{title}</h3>
        <img className="card-img" src={url} alt={title} />
      </div>
    </div>
  );
};

export default GifGridItem;
