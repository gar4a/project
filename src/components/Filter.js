import React from "react";

const Filter = (props) => {
  return (
    <nav class="navbar navbar-light bg-light mt-4">
      {" "}
      <form className="menucenter">
        {" "}
        <button class="btn bg-dark text-white" type="button">
          Smartphone
        </button>{" "}
        <button class="btn bg-dark text-white" type="button">
          Main button
        </button>{" "}
        <button class="btn bg-dark text-white" type="button">
          Main button
        </button>{" "}
        <button class="btn bg-dark text-white" type="button">
          Main button
        </button>{" "}
        <button class="btn bg-dark text-white" type="button">
          Main button
        </button>{" "}
      </form>{" "}
    </nav>
  );
};

export default Filter;
