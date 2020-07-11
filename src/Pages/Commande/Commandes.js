import React, { useState } from "react";
import Stepper from "../../components/Stepper/Stepper";
import "./Commande.css";
const Commandes = () => {
  const [step, setstep] = useState(1);
  const increment = () => {
    setstep(step + 1);
  };
  const decrement = () => {
    setstep(step - 1);
  };
  return (
    <div>
      <div class="container-fluid px-1 py-5 mx-auto">
        <div class="row d-flex justify-content-center">
          <div class="col-xl-5 col-lg-6 col-md-7">
            <div class="card-com b-0">
              <h3 class="heading">Validation de la commande</h3>
              <ul id="progressbar" class="text-center">
                <li class="active step0" id="step1"></li>
                <li class={`${step >= 2 && "active"} step0`} id="step2"></li>
                <li class={`${step >= 3 && "active"} step0`} id="step3"></li>
                <li class={`${step >= 4 && "active"} step0`} id="step4"></li>
              </ul>
              <fieldset class="show">
                <Stepper step={step} />
                {step > 1 && step < 4 && (
                  <button
                    class="btn-block btn-secondary mt-3 mb-1 prev"
                    onClick={decrement}
                  >
                    <span class="fa fa-long-arrow-left"></span>PRECEDENT
                  </button>
                )}
                {step < 3 && (
                  <button
                    id="next1"
                    class="btn-block btn-primary mt-3 mb-1 next button"
                    onClick={increment}
                  >
                    SUIVANT<span class="fa fa-long-arrow-right"></span>
                  </button>
                )}
                {step === 3 && (
                  <button
                    id="next1"
                    class="btn-block btn-primary mt-3 mb-1 next"
                    onClick={increment}
                  >
                    VALIDER LA COMMANDE
                    <span class="fa fa-long-arrow-right"></span>
                  </button>
                )}
                {step === 4 && (
                  <button
                    id="next1"
                    class="btn-block btn-primary mt-3 mb-1 next"
                    style={{ background: "#de2554" }}
                  >
                    IMPRIMER LA FACTURE
                  </button>
                )}
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Commandes;
