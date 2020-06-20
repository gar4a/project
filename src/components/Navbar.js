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
                <Link class="nav-link navbarcolor" to="/iPhone">
                  <i class="fa fa-apple" aria-hidden="true"></i> iPhone
                </Link>
              </li>
              <li class="nav-item active espacel">
                <Link class="nav-link navbarcolor" to="/Samsung">
                  <i class="fa fa-android" aria-hidden="true"></i> Samsung
                </Link>
              </li>
              <li class="nav-item active espacel">
                <Link class="nav-link navbarcolor" to="/Nokia">
                  <i class="fa fa-windows" aria-hidden="true"></i> Nokia
                </Link>
              </li>
              <li class="nav-item active espacel">
                <Link class="nav-link navbarcolor" to="/Huawei">
                  <i class="fa fa-android" aria-hidden="true"></i> Huawei
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
