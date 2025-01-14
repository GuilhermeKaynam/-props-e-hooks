import "./App.css";
import Contador from "./pages/contador/Contador";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Tarefa from "./pages/tarefa/Tarefa";

function App() {
  return (
    <>
      <Home
        titulo="Componente home"
        texto="Este é um componente home, que recebe props."
      />
      <Contador />
      <Tarefa></Tarefa>
      <Login></Login>
    </>
  );
}

export default App;
