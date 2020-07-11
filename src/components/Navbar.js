import React from "react";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { Link } from "react-router-dom";
import { signout } from "../actions/auth";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

export const Navbar = ({}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signout(history));
  };
  return (
    <div>
      <nav
        class="navbar navbar-expand-lg navbar-light bg-light"
        style={{ position: "fixed", zIndex: 6, width: "100vw" }}
      >
        <div class="container">
          <Link class="navbar-brand" to="/home">
            My TT Shop
          </Link>
          <button class="navbar-toggler" type="button">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto">
              <li class="nav-item  active">
                <Link class="nav-link navbarcolor" to="/Smartphones">
                  <i class="fa fa-mobile" aria-hidden="true"></i> Smartphones
                </Link>
              </li>
              <li class="nav-item active espacel">
                <Link class="nav-link navbarcolor" to="/PetitsPrix">
                  <i class="fa fa-dollar" aria-hidden="true"></i> Petits Prix
                </Link>
              </li>
              <li class="nav-item active espacel">
                <Link class="nav-link navbarcolor" to="/BonsPlans">
                  <i class="fa fa-gift" aria-hidden="true"></i> Bons Plans
                </Link>
              </li>
              <li class="nav-item active espacel">
                <Link class="nav-link navbarcolor" to="/Accessoires">
                  <i class="fa fa-headphones" aria-hidden="true"></i>{" "}
                  Accessoires
                </Link>
              </li>
            </ul>
            <div class="mr-4">
              <Link to="/Profil">
                <i class="fa fa-user-o fa-1x text-black" aria-hidden="true"></i>
              </Link>
            </div>
            <div>
              <Link
                class="btn borderbutton mr-4"
                type="button"
                id="dropdownMenuButton"
                to="/cart"
              >
                <span>
                  <a class="fa fa-shopping-cart fa-1x text-black"></a>
                </span>
              </Link>
            </div>
            <div class="mr-4">
              <button onClick={handleSubmit}>
                <i
                  class="fa fa-sign-out fa-1x text-black"
                  aria-hidden="true"
                ></i>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
