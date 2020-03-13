import React from "react";
import PropTypes from "prop-types";

const DeviceInfoSubSection = ({ title, color, content }) => {
  return (
    <div className="subsection">
      <div className="sub-section-title-container">
        <span className="fonttitle1">{title}</span>
      </div>
      <div className="subsection-devider" style={{ backgroundColor: color }} />
      <div className="d-flex flex-column w-full ">
        {content.map((el, i) => {
          return (
            <div className={i % 2 === 0 && "subsection-element-highlighted"}>
              {el}
            </div>
          );
        })}
      </div>
    </div>
  );
};

DeviceInfoSubSection.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  content: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default DeviceInfoSubSection;
