import React from "react";

const StepThree = () => {
  return (
    <div class="form-card">
      <h5 class="sub-heading mb-4">Company Details</h5>
      <label class="text-danger mb-3">* Required</label>
      <div class="form-group">
        <label class="form-control-label">Company Name * :</label>
        <input
          type="text"
          id="cname"
          name="cname"
          placeholder=""
          class="form-control"
          onblur="validate2(1)"
        />
      </div>
      <div class="form-group">
        <label class="form-control-label">Zip Code * :</label>
        <input
          type="text"
          id="zip"
          name="zip"
          placeholder=""
          class="form-control"
          onblur="validate2(2)"
        />
      </div>
      <div class="form-group">
        <label class="form-control-label">State * :</label>
        <input
          type="text"
          id="state"
          name="state"
          placeholder=""
          class="form-control"
          onblur="validate2(3)"
        />
      </div>
      <div class="form-group">
        <label class="form-control-label">City * :</label>
        <input
          type="text"
          id="city"
          name="city"
          placeholder=""
          class="form-control"
          onblur="validate2(4)"
        />
      </div>
    </div>
  );
};

export default StepThree;
