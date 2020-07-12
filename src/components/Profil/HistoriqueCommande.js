import React from "react";

const HistoriqueCommande = () => {
  return (
    <div class="container">
      <table class="table">
        <thead>
          <tr className="text-black">
            <th>#Ref</th>
            <th>Date de création</th>
            <th>Statut</th>
          </tr>
        </thead>
        <tbody>
          <tr class="table-success">
            <td>21568388</td>
            <td>15/06/2018</td>
            <td>Validée</td>
          </tr>
          <tr class="table-success">
            <td>21469834</td>
            <td>11/12/2019</td>
            <td>Validée</td>
          </tr>
          <tr class="table-danger">
            <td>21469720</td>
            <td>30/11/2019</td>
            <td>Expirée</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default HistoriqueCommande;
