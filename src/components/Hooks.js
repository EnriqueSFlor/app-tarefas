import { useState, useEffect } from "react";

const Hooks = () => {
  const [novaIdade, setNovaIdade] = useState(40);
  const changeAge = () => {
    setNovaIdade(42);
  };

  useEffect(() => {
    console.log("testando");
  });

  return (
    <div>
      <p>Idade: {novaIdade}</p>
      <button onClick={changeAge}>Mudar idade</button>
    </div>
  );
};
export default Hooks;
