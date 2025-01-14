import { useState } from "react";
import Home from "../home/Home";

function Login() {
  const [isLogged, setIsLogged] = useState(false);
  return (
    <>
      {isLogged ? (
        <Home
          titulo="Componente Home"
          texto="Esse é o componete home, que recebe props"
        />
      ) : (
        <div>
          <h2>Componete Login</h2>
          <button onClick={() => setIsLogged(true)}>Entrar</button>
        </div>
      )}
    </>
  );
}

export default Login;
