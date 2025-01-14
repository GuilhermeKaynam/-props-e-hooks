import { useEffect, useState } from "react";

function Tarefa() {
  const [completed, setCompleted] = useState(false);
  const [tarefa, setTarefa] = useState("");

  useEffect(() => {
    if (completed) {
      setTarefa("Parabéns! Você concluiu a tarefa!");
    } else {
      setTarefa("Opa! Você não concluiu a tareda!");
    }
  }, [completed]);

  return (
    <>
      <h2>Componente Tarefa</h2>
      <h3>{tarefa}</h3>
      <p>Conclua a Tarefa</p>
      <button onClick={() => setCompleted((v) => !v)}>Concluir Tarefa</button>
    </>
  );
}

export default Tarefa;
