import React, { useState, useEffect } from "react";

const Quantity = ({ onChange }) => {
  const [value, setValue] = useState(1);
  useEffect(() => {
    onChange(value);
  }, [value]);
  return (
    <div className="d-flex justify-content-between align-items-center quantity">
      <span className="pl-4">{value}</span>
      <div className="d-flex flex-column ">
        <button
          onClick={() => setValue(value + 1)}
          className="font-weight-bold mr-1"
        >
          +
        </button>
        <button
          onClick={() => setValue(value > 1 ? value - 1 : value)}
          className="font-weight-bold mr-1"
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Quantity;
