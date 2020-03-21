import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const ProductImages = ({ images, className }) => {
  const [selectedImage, setSelectedImage] = useState();

  useEffect(() => {
    setSelectedImage(images[0]);
  }, [images]);

  return (
    <div class={className}>
      <figure className="mt-4 d-flex justify-content-center border mb-0 ">
        <img src={selectedImage} className="product-image-selected mt-3" />
      </figure>
      <ul class="gallery-choice">
        {images.map(el => (
          <div
            className="product-image-thumbnail-container"
            onMouseMove={() => setSelectedImage(el)}
          >
            <img src={el} className="product-image-thumbnail " />
          </div>
        ))}
      </ul>
    </div>
  );
};

ProductImages.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  className: PropTypes.string
};

export default ProductImages;
