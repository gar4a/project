import React from "react";
import PropTypes from "prop-types";

const DeviceHighlights = ({ brand, title, className, content }) => {
  return (
    <div class={className}>
      <div className="fonttitle">
        <h4 className="font-weight-bold">{brand}</h4>
      </div>
      <div className="fonttitle1">
        <h3 className="font-weight-bold">{title}</h3>
      </div>
      <div className="mt-5">
        {content.map(el => (
          <>
            <h6 class=" text-uppercase">{el}</h6>
            <hr data-content="AND" class="hr-text" />
          </>
        ))}
        <div>
          <a href="#">
            <u>
              <b> Plus d'infos sur ce mobile </b>
            </u>
            <button class="fa fa-chevron-right"></button>
          </a>
        </div>
        <div>
          <a href="#">
            <u>
              <b>Découvrez la gamme {brand} </b>
            </u>
            <button class="fa fa-chevron-right"></button>
          </a>
        </div>
      </div>
    </div>
  );
};

DeviceHighlights.propTypes = {
  brand: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  content: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default DeviceHighlights;
