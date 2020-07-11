import React from "react";

const StepTwo = () => {
  return (
    <div class="form-card">
      <h5 class="sub-heading mb-4">Choisir un espace de livraison</h5>
      <div class="form-group">
        <label class="form-control-label">Shredding Job Size * :</label>
        <div class="select mb-3">
          <select name="shred-info" class="form-control">
            <option>NA</option>
            <option>1-20 boxes</option>
            <option>20-50 boxes</option>
            <option>50-100 boxes</option>
            <option>100+ boxes</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
