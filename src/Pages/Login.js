import React, { useState, useEffect } from "react";
import logo from "../images/bg-login.png";
import { TextInput } from "../components/TextInput";
import { signin } from "../actions/auth";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  const handleIdChange = (event) => {
    setId(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signin(id, password, history));
  };

  return (
    <body className="body">
      <div class="limiter">
        <div class="container-login100">
          <div class="wrap-login100">
            <form class="login100-form" onSubmit={handleSubmit}>
              <span class="login100-form-title p-b-43"></span>

              <TextInput label="ID" value={id} onChange={handleIdChange} />
              <TextInput
                label="Password"
                isPassword
                value={password}
                onChange={handlePasswordChange}
              />

              <div class="flex-sb-m w-full p-t-3 p-b-32">
                <div>
                  <a href="#" class="txt1">
                    Forgot Password?
                  </a>
                </div>
              </div>

              <div class="container-login100-form-btn">
                <button class="login100-form-btn" type="submit">
                  Login
                </button>
              </div>
            </form>

            <div class="login100-more">
              <img className="responsive" src={logo} alt="Logo" />;
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Login;
