import React from "react";

const StepTwo = () => {
  return (
    <div class="form-card">
      <h5 class="sub-heading mb-4">Choisissez un espace de livraison</h5>
      <div class="form-group mt-5 mb-5">
        <label class="form-control-label fonttitle">
          Liste des espaces TT:
        </label>
        <div class="select mb-3">
          <select name="shred-info" class="form-control">
            <option>TT Rue Jamel Abdenasser, Tunis</option>
            <option>TT Avenue Des Etats Unis, Tunis</option>
            <option>TT Rue Tahar Memmi, Ariana</option>
            <option>TT Ave du Grand Margreb Arabe, Manouba</option>
            <option>TT Avenue Iben Kholdoun, Tunis</option>
            <option>TT Avenue du Japon, Tunis</option>
            <option>TT Avenue Habib Thameur, Tunis</option>
            <option>TT 103 Boulevard du 9 Avril 1938, Tunis</option>
            <option>TT 34 Boulevard Bab Benet, Tunis</option>
            <option>TT 64 Rue de La Palestine, Tunis</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
