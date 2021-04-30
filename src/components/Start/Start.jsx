import React,{ useState} from "react";
import { Link } from "react-router-dom";
import Social from "../Social/Social";
import "./Start.scss";

const Start = () => {
  const [state, setState] = useState({
		showModal: false
	});
  return (
    <div className="inicio">
      <div className="logo">
        <div className="logo-container">
          <div className="imagen1" />
          <p>Gestiona tus seguidores de forma segura</p>
          <div className="imagen2" />
        </div>
      </div>
      <div className="login-mobile">
        <div className="login-mobile-text">
          <p>Bienvenidos!</p>
          <h2>Conecta con tus seguidores</h2>
        </div>
        <div className="login-mobile-buttons">
          <Link className="btn-azul" to="/login-mobil">
            Iniciar Sesión
          </Link>
          <Link className="btn-transarente" onClick={() => setState({ showModal: true })} >
            Iniciar sesión con otra cuenta
          </Link>
          <div className="link-nuevo-usuario">
            ¿Eres un nuevo usuario?
            <Link className="link" to="/registro-mobil">
              {" "}
              Crear una cuenta
            </Link>
          </div>
        </div>
      </div>
      <Social show={state.showModal} onClose={() => setState({ showModal: false })} />
    </div>
  );
};

export default Start;
