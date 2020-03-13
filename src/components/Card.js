import React, { useState } from "react";

const Card = ({ image, title, price, colors, DAS, brand }) => {
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  return (
    <div className="col-lg-3 col-md-3 mb-3 mt-4">
      <div className="card h-100">
        <img className="cards center" src={image[selectedColor]} />
        <div className="das">DAS : {DAS} W/Kg</div>
        <div class="card-body">
          <a className="fonttitle">{brand}</a>
          {colors.map(el => (
            <button
              className="bcc1 float-right"
              onClick={() => setSelectedColor(el)}
              style={{ backgroundColor: el }}
            ></button>
          ))}
          <br />
          <a className="fonttitle1">{title}</a>
          <br />
          <a className="float-right price">Prix {price}dt</a>
        </div>
      </div>
    </div>
  );
};

export default Card;
