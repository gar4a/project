import React from "react";
import "./Profil.css";
import ProfilMain from "../../components/Profil/ProfilMain";
import Infos from "../../components/Profil/Infos";
import HistoriqueCommande from "../../components/Profil/HistoriqueCommande";

const Profil = () => {
  return (
    <div class="container mt-5">
      <hr />
      <div class="row">
        <div class="col-md-3">
          <div class="text-center">
            <img
              src="https://c7.uihere.com/files/831/88/865/user-profile-computer-icons-user-interface-mystique.jpg"
              class="avatar img-circle mb-3"
              style={{ height: "200px", width: "200px" }}
            />
            <a className="fonttitle1">Bouchareb Hamza</a>
          </div>
        </div>

        <div class="col-md-9 personal-info">
          <nav class="navbar navbar-expand-lg bg-primary mb-3">
            <h3 className="fonttitle1 text-white">
              Informations personnelles :
            </h3>
          </nav>
          <form class="form-horizontal fonttitle1" role="form">
            <div class="form-group">
              <label class="col-lg-3 control-label">ID:</label>
              <div class="col-lg-8">
                <input class="form-control" type="text" value="1021530" />
              </div>
            </div>
            <div class="form-group">
              <label class="col-md-3 control-label">Login:</label>
              <div class="col-md-8">
                <input class="form-control" type="text" value="bouchareb.11" />
              </div>
            </div>
            <div class="form-group">
              <label class="col-lg-3 control-label">Email:</label>
              <div class="col-lg-8">
                <input
                  class="form-control"
                  type="text"
                  value="gar4a@hotmail.fr"
                />
              </div>
            </div>
            <div class="form-group">
              <label class="col-lg-3 control-label">Téléphone:</label>
              <div class="col-lg-8">
                <input
                  class="form-control"
                  type="text"
                  value="+216 XX XXX XXX"
                />
              </div>
            </div>

            <nav class="navbar navbar-expand-lg bg-primary mb-3">
              <h3 className="fonttitle1 text-white">
                Changez votre mot de passe :
              </h3>
            </nav>
            <div class="form-group">
              <label class="col-md-4 control-label">Mot de passe actuel:</label>
              <div class="col-md-8">
                <input
                  class="form-control"
                  type="password"
                  value="11111122333"
                />
              </div>
            </div>
            <div class="form-group">
              <label class="col-md-4 control-label">
                Nouveau mot de passe:
              </label>
              <div class="col-md-8">
                <input
                  class="form-control"
                  type="password"
                  value="11111122333"
                />
              </div>
            </div>
            <div class="form-group">
              <label class="col-md-4 control-label">Confirmation:</label>
              <div class="col-md-8">
                <input
                  class="form-control"
                  type="password"
                  value="11111122333"
                />
              </div>
            </div>

            <div class="form-group">
              <label class="col-md-3 control-label"></label>
              <div class="col-md-8">
                <input
                  type="button"
                  class="btn text-white"
                  style={{ backgroundColor: "#DE2554" }}
                  value="Save Changes"
                />
                <span></span>
                <input
                  type="reset"
                  class="btn btn-default ml-5 text-white"
                  style={{ backgroundColor: "#DE2554" }}
                  value="Cancel"
                />
              </div>
            </div>
            <nav class="navbar navbar-expand-lg bg-primary mb-3">
              <h3 className="fonttitle1 text-white">
                Historique de vos commandes :
              </h3>
            </nav>
            <HistoriqueCommande />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profil;
