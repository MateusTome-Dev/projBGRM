import "./index.css";
import Logo from "/public/img/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./index.css";

function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formData.email === '' || formData.password === '') {
      alert('Preencha os campos');
      return;
    }

    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.token) {
          localStorage.setItem('token', data.token);
          console.log(localStorage.getItem('token'));
          window.location.href = `/instrucoes`;
        } else {
          alert('Erro ao logar!');
        }
      })
      .catch((error) => {
        console.error("Erro ao fazer login:", error);
        alert("Erro ao fazer login. Por favor, tente novamente.");
      });
  };

  return (
    <div className="login-form">
      <div className="containerSign">
        <div className="main">
          <div className="contentSign">
            <h2>Entrar</h2>
            <form onSubmit={handleSubmit} method="post" className="formSign">
              <input
                className="inputSign"
                type="email"
                name="email"
                placeholder="User Email"
                required
                autoFocus
                value={formData.email}
                onChange={handleChange}
              />
              <input
                className="inputSign"
                type="password"
                name="password"
                placeholder="User Password"
                required
                value={formData.password}
                onChange={handleChange}
              />
              <button className="btn">Entrar</button>
            </form>
            <p className="account">
              Não tem uma conta?
              <Link to="/signup" className="link">
                Registre-se
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
