import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {

  const [categories, setCategories] = useState([]);

  return (
    <div>
      <h1 className="title">Gif Expert App</h1>
      <AddCategory  setCategories={ setCategories } />
      <hr />
      {categories.map((category, i) => (
        <ul  key={ i }>
          <GifGrid category={ category } />
        </ul>
      ))}
    </div>
  );
};

export default GifExpertApp;
