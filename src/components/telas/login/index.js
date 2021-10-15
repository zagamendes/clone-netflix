import React, { useContext, useState } from "react";
import "./login.css";
import Footer from "../../footer";
import bgLarge from "../../../img/bg-large.jpg";
import { useHistory } from "react-router";
import isLogged from "../../../utils/auth";
import { getDatabase, ref, onChildAdded, onValue } from "firebase/database";
import { usuarioContext } from "../../../utils/contexto";
import Cached from "@material-ui/icons/Cached";

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const { user, setUser } = useContext(usuarioContext);
  const db = getDatabase();
  const usuariosRef = ref(db, "usuarios");
  isLogged() && history.push("/browse");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    onValue(usuariosRef, (snapshot) => {
      const IDs = Object.keys(snapshot.val());
      const usuarios = snapshot.val();

      IDs.forEach((id) => {
        if (usuarios[id].email == email && usuarios[id].senha == senha) {
          setUser({ ...usuarios[id], id: id });
          localStorage.setItem("user", JSON.stringify({...user}));
          history.push("/browse");
        }
      });
      setLoading(false);
    });

    onChildAdded(usuariosRef, (usuario) => {
      if (usuario.email == email && usuario.senha == senha) {
        setUser({ ...usuario, id: usuario.key });
        setLoading(false);
        history.push("/browse");
      }
    });
  };
  return (
    <>
      <div className="container">
        <div className="container-img">
          <img src={bgLarge} alt="background" />
        </div>
        <div className="container-login">
          <div className="form-login">
            <h2>Entrar</h2>
            <form onSubmit={handleSubmit}>
              <input
                placeholder="Email"
                onChange={({ target }) => setEmail(target.value)}
              />
              <input
                placeholder="Senha"
                type="password"
                onChange={({ target }) => setSenha(target.value)}
              />
              <button>Entrar {loading ? <Cached /> : ""}</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
