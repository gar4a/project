import React from "react";

const Footerlink = ({ title, link }) => {
  return (
    <li>
      <a href={link} style={{ color: "#999" }} className="footerlink">
        {title}
      </a>
    </li>
  );
};

export default Footerlink;
