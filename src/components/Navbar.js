import React from "react";
import LogoTT from "../images/LogoTT.jpg";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Popper from "popper.js";
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
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
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
            <div class="dropdown">
              <button
                class="btn  dropdown-toggle borderbutton espacer"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
              >
                <span>
                  <i
                    class="fa fa-user-o fa-1x text-black"
                    aria-hidden="true"
                  ></i>
                </span>
              </button>

              <div
                class="dropdown-menu listRight"
                aria-labelledby="dropdownMenuButton"
              >
                <Link class="dropdown-item" to="/Profil">
                  Profil
                </Link>
                <Link class="dropdown-item" to="/Historique">
                  Historique Commandes
                </Link>
                <a
                  class="dropdown-item"
                  style={{ cursor: "pointer" }}
                  onClick={handleSubmit}
                >
                  Logout
                </a>
              </div>
            </div>
            <div>
              <div>
                <Link
                  class="btn borderbutton"
                  type="button"
                  id="dropdownMenuButton"
                  to="/cart"
                >
                  <span>
                    <a class="fa fa-shopping-cart fa-1x text-black"></a>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
