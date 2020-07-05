import React from "react";
import Footerlink from "./Footerlink";

const Footer = () => {
  return (
    <div className="d-flex flex-column align-items-center bg-light py-3">
      <div className="container d-flex">
        <ul
          class="col-lg-2 col-md-2 col-sm-4 col-xs-6"
          style={{ borderRight: "0.5px dashed grey" }}
        >
          <li className="footertitle">​My TT​​</li>
          <Footerlink
            title="Recharge TT Cash"
            link="/Particulier/Pages/TT-Cash.aspx"
          />
          <Footerlink
            title="Recharge TT Cash"
            link="/Particulier/Pages/TT-Cash.aspx"
          />
          <Footerlink
            title="Recharge TT Cash"
            link="/Particulier/Pages/TT-Cash.aspx"
          />
          <Footerlink
            title="Recharge TT Cash"
            link="/Particulier/Pages/TT-Cash.aspx"
          />
          <Footerlink
            title="Recharge TT Cash"
            link="/Particulier/Pages/TT-Cash.aspx"
          />
        </ul>

        <ul
          class="col-lg-2 col-md-2 col-sm-4 col-xs-6"
          style={{ borderRight: "0.5px dashed grey" }}
        >
          <li className="footertitle">Mon Espace Entreprise</li>

          <Footerlink
            title="Recharge TT Cash"
            link="/Particulier/Pages/TT-Cash.aspx"
          />

          <a href="/Fr/Entreprise/Inscription"></a>

          <Footerlink
            title="Recharge TT Cash"
            link="/Particulier/Pages/TT-Cash.aspx"
          />

          <Footerlink
            title="Recharge TT Cash"
            link="/Particulier/Pages/TT-Cash.aspx"
          />
        </ul>
        <ul
          class="col-lg-2 col-md-2 col-sm-4 col-xs-6"
          style={{ borderRight: "0.5px dashed grey" }}
        >
          <li className="footertitle">​​Produits et services​​</li>

          <Footerlink
            title="Recharge TT Cash"
            link="/Particulier/Pages/TT-Cash.aspx"
          />

          <Footerlink
            title="Recharge TT Cash"
            link="/Particulier/Pages/TT-Cash.aspx"
          />

          <Footerlink
            title="Recharge TT Cash"
            link="/Particulier/Pages/TT-Cash.aspx"
          />
        </ul>
        <ul
          class="col-lg-2 col-md-2 col-sm-4 col-xs-6"
          style={{ borderRight: "0.5px dashed grey" }}
        >
          <li className="footertitle">Assistance</li>

          <Footerlink
            title="Recharge TT Cash"
            link="/Particulier/Pages/TT-Cash.aspx"
          />

          <Footerlink
            title="Recharge TT Cash"
            link="/Particulier/Pages/TT-Cash.aspx"
          />

          <Footerlink
            title="Recharge TT Cash"
            link="/Particulier/Pages/TT-Cash.aspx"
          />
        </ul>
        <ul
          class="col-lg-2 col-md-2 col-sm-4 col-xs-6"
          style={{ borderRight: "0.5px dashed grey" }}
        >
          <li className="footertitle">Accés à l'information</li>

          <Footerlink
            title="Recharge TT Cash"
            link="/Particulier/Pages/TT-Cash.aspx"
          />

          <Footerlink
            title="Recharge TT Cash"
            link="/Particulier/Pages/TT-Cash.aspx"
          />

          <Footerlink
            title="Recharge TT Cash"
            link="/Particulier/Pages/TT-Cash.aspx"
          />

          <Footerlink
            title="Recharge TT Cash"
            link="/Particulier/Pages/TT-Cash.aspx"
          />
        </ul>
        <ul
          class="col-lg-2 col-md-2 col-sm-4 col-xs-6"
          style={{
            color: "#33333",
            fontSize: "14px",
          }}
        >
          <li className="footertitle">Suivez Nous</li>
          <Footerlink
            title="Recharge TT Cash"
            link="/Particulier/Pages/TT-Cash.aspx"
          />
          <Footerlink
            title="Recharge TT Cash"
            link="/Particulier/Pages/TT-Cash.aspx"
          />
          <Footerlink
            title="Recharge TT Cash"
            link="/Particulier/Pages/TT-Cash.aspx"
          />
        </ul>
      </div>
      <span style={{ color: "#999" }} className="footerlink">
        Tous droits réservés © 2016 - www.tunisietelecom.tn -
        <a
          href="/Fr/Infos-Légales"
          style={{ color: "#428bca" }}
          className="footerlink"
        >
          Informations légales
        </a>
      </span>
    </div>
  );
};
export default Footer;
