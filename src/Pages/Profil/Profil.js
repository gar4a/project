import React from "react";
import "./Profil.css";
import ProfilMain from "../../components/Profil/ProfilMain";
import Infos from "../../components/Profil/Infos";
import HistoriqueCommande from "../../components/Profil/HistoriqueCommande";

const Profil = () => {
  return (
    <div class="d-flex container" id="wrapper">
      <div class="bg-light border-right" id="sidebar-wrapper">
        <div class="sidebar-heading">Bienvenue </div>
        <div class="list-group list-group-flush">
          <button
            href="#"
            class="list-group-item list-group-item-action bg-light"
            onClick=""
          >
            Mon Profil
          </button>
          <a href="#" class="list-group-item list-group-item-action bg-light">
            Mes informations
          </a>
          <a href="#" class="list-group-item list-group-item-action bg-light">
            Historique commande
          </a>
        </div>
      </div>

      <div class="container-fluid">
        <ProfilMain />
      </div>
    </div>
  );
};

export default Profil;
