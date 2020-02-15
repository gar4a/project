import React from "react";

export const TextInput = ({ value, label, isPassword, onChange }) => {
  return (
    <div class="wrap-input100 validate-input">
      <input
        value={value}
        onChange={onChange}
        class="input100"
        type={isPassword && "password"}
        name="email"
      />
      <span class="focus-input100"></span>
      <span class="label-input100">{label}</span>
    </div>
  );
};
