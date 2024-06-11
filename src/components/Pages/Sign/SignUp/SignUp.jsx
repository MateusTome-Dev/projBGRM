import "./index.css";
import Logo from "/public/img/logo.png";
import { Link } from "react-router-dom";
import React, { useState } from "react";
function SignIn() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    password: "",
    codigoHash: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    fetch("http://localhost:3000/cadastro", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((result) => result.json())
      .then((data) => {
        setMessage(data.message);
        setFormData({
          nome: "",
          email: "",
          password: "",
        });
        alert("Cadastro Efeituado!!");
      })
      .catch((error) => {
        console.log("ERROR: ", error);
      });
  };

  return (
    <div className="login-form">
      <div className="containerSign">
        <div className="main">
          <div className="contentSign">
            <h2>Cadastrar</h2>
            <form onSubmit={handleSubmit} method="post" className="formSign">
              <input
                className="inputSign"
                type="text"
                name="nome"
                placeholder="User Name"
                required
                autoFocus
                value={formData.nome}
                onChange={handleChange}
              />
              <input
                className="inputSign"
                type="email"
                name="email"
                placeholder="User email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                className="inputSign"
                type="password"
                name="password"
                placeholder="User Password"
                required
                autoFocus
                value={formData.password}
                onChange={handleChange}
              />
              <button className="btn" type="submit">
                Cadastrar
              </button>
            </form>
            <p className="account">
              Já tem uma conta?
              <Link to="/" className="link">
                Entre
              </Link>
            </p>
          </div>
          <div className="form-img">
            <img src={Logo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default SignIn;
