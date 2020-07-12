import React from "react";

const StepThree = () => {
  return (
    <div class="form-card">
      <h5 class="sub-heading mb-4">Choisissez le mode de paiement</h5>
      <div class="custom-control custom-radio mt-5 mb-5">
        <input
          type="radio"
          class="custom-control-input"
          id="defaultGroupExample1"
          name="groupOfDefaultRadios"
        />

        <label
          class="custom-control-label fonttitle1"
          for="defaultGroupExample1"
        >
          Espèce
        </label>
      </div>
      <hr data-content="AND" class="hr-text" />
      <div class="custom-control custom-radio mt-5 mb-5">
        <input
          type="radio"
          class="custom-control-input"
          id="defaultGroupExample2"
          name="groupOfDefaultRadios"
          checked
        />
        <label
          class="custom-control-label fonttitle1"
          for="defaultGroupExample2"
        >
          Chèque
        </label>
      </div>
    </div>
  );
};

export default StepThree;
