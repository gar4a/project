import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar navbar-light bg-light text-black fonttitle1 na">
      <a4> Mon panier </a4>
      <Link
        to="/home"
        className="bmem fonttitle1 text-white float-right"
        style={{ background: "#de2554" }}
      >
        Continuer le shopping
      </Link>
    </div>
  );
};
export default Navbar;
