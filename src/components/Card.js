import React, { useState } from "react";
import { Link } from "react-router-dom";

const Card = (product) => {
  const { images, title, price, das, brand, id } = product;
  const colors = images.map((el) => el.color);

  const [selectedColor, setSelectedColor] = useState(colors[0]);

  return (
    <Link className="col-lg-3 col-md-3 mb-3 mt-4" to={`/infos/${id}`}>
      <div className="card h-100 responsive">
        <img
          style={{ minHeight: "53%" }}
          className="cards center "
          src={images.find((el) => el.color === selectedColor).images[0]}
        />
        {das != 0 && <div className="das">DAS : {das} W/Kg</div>}
        <div class="card-body">
          <a className="fonttitle">{brand}</a>
          {colors.map((el) => (
            <button
              className="bcc1 float-right"
              onClick={() => setSelectedColor(el)}
              style={{ backgroundColor: el }}
            />
          ))}
          <br />
          <a className="fonttitle1">{title}</a>
          <br />
          <a className="float-right price">Prix {price}dt</a>
        </div>
      </div>
    </Link>
  );
};

export default Card;
