import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Contador from "./pages/contador/Contador";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Tarefa from "./pages/tarefa/Tarefa";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contador">Contador</Link>
            </li>
            <li>
              <Link to="/tarefa">Tarefa</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                titulo="Componente home"
                texto="Este é um componente home, que recebe props."
              />
            }
          />
          <Route path="/contador" element={<Contador />} />
          <Route path="/tarefa" element={<Tarefa />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
