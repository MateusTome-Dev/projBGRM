import "./index.css";
import Logo from'/public/img/logo.png'
import { Link } from "react-router-dom";
function SignIn() {
  return (
    <div className="login-form">
      <div className="containerSign">
        <div className="main">
          <div className="contentSign">
            <h2>Cadastrar</h2>
            <form action="#" method="post" className="formSign">
              <input className="inputSign"
                type="text"
                name=""
                placeholder="User Name"
                required
                autoFocus
              />
              <input className="inputSign"
                type="email"
                name=""
                placeholder="User Email"
                required
                autoFocus
              />
              <input className="inputSign"
                type="password"
                name=""
                placeholder="User Password"
                required
                autoFocus
              />
              <button className="btn" type="submit">
                Entrar
              </button>
            </form>
            <p className="account">Já tem uma conta?<Link to="/" className="link">Entre</Link></p>
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
