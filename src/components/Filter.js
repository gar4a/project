import React from "react";

const Filter = (props) => {
  return (
    <nav class="navbar navbar-light bg-light mt-4">
      {" "}
      <form className="menucenter">
        {" "}
        <button class="btn bg-dark text-white" type="button">
          Apple
        </button>{" "}
        <button class="btn bg-dark text-white" type="button">
          Samsung
        </button>{" "}
        <button class="btn bg-dark text-white" type="button">
          Huawei
        </button>{" "}
        <button class="btn bg-dark text-white" type="button">
          Oppo
        </button>{" "}
        <button class="btn bg-dark text-white" type="button">
          Sony
        </button>{" "}
      </form>{" "}
    </nav>
  );
};

export default Filter;
