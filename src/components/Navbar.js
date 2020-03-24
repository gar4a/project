import React from "react";
import LogoTT from "../images/LogoTT.jpg";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import $ from "jquery";
import Popper from "popper.js";
import { Link } from "react-router-dom";

export const Navbar = ({}) => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
          <a class="navbar-brand" href="#">
            My TT Shop
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto">
              <li class="nav-item  active">
                <a class="nav-link navbarcolor" href="#">
                  <span>
                    <i class="fa fa-apple" aria-hidden="true"></i> iPhone
                  </span>
                </a>
              </li>
              <li class="nav-item active espacel">
                <a class="nav-link navbarcolor" href="#">
                  <span>
                    <i class="fa fa-android" aria-hidden="true"></i> Samsung
                  </span>
                </a>
              </li>
              <li class="nav-item active espacel">
                <a class="nav-link navbarcolor" href="#">
                  <span>
                    <i class="fa fa-windows" aria-hidden="true"></i> Nokia
                  </span>
                </a>
              </li>
              <li class="nav-item active espacel">
                <a class="nav-link navbarcolor" href="#">
                  <span>
                    <i class="fa fa-android" aria-hidden="true"></i> Huawei
                  </span>
                </a>
              </li>
            </ul>
            <div class="dropdown">
              <button
                class="btn  dropdown-toggle borderbutton espacer"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span>
                  <i
                    class="fa fa-user-o fa-1x text-white"
                    aria-hidden="true"
                  ></i>
                </span>
              </button>

              <div
                class="dropdown-menu listRight"
                aria-labelledby="dropdownMenuButton"
              >
                <a class="dropdown-item" href="#">
                  Profil
                </a>
                <a class="dropdown-item" href="#">
                  Historique Commandes
                </a>
                <a class="dropdown-item" href="#">
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
                    <a class="fa fa-shopping-cart fa-1x text-white"></a>
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
