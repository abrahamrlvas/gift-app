import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import GifGridItem from '../components/GifGridItem';

import "./style.css";

const GifItem = ({ category }) => {
  const { loading, data } = useFetchGifs( category );

  return (
    <>
      {loading && <p className="animate__animated animate__flash">Loading...</p>}
      <h2>{category}</h2>
      <div className="container">
        {data.map((gif) => (
          <GifGridItem key={gif.id} {...gif} />
        ))}
      </div>
    </>
  );
};

export default GifItem;
