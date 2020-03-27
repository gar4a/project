import React from "react";

const Footer = () => {
  return (
    <div className="d-flex justify-content-end ">
      <div className="align-items-center d-flex">
        <span>
          Total price: <b>50.00€</b>
        </span>
        <button href="" class="btn btn-success float-right ml-5 ">
          Commander
        </button>
      </div>
    </div>
  );
};

export default Footer;
