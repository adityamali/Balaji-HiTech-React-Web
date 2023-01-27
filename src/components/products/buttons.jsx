import React from "react";
import Data from "./../../resources/data/products-data";
 
const Buttons = ({ setItem, menuItems }) => {
  return (
    <>
      <div className="d-flex justify-content-center">
        {menuItems.map((Val, id) => {
          return (
            <button
              className="btn-dark"
              key={id}
            >
              {Val}
            </button>
          );
        })}
        <button
          className="btn-dark"
          onClick={() => setItem(Data)}
        >
          All
        </button>
       </div>
    </>
  );
};
 
export default Buttons;