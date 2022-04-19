import "./App.css";
import FirstComponent from "./components/FirstComponent";
import AnotherComponent from "./components/AnotherComponent";
import Imagens from "./components/imagens";
import Hooks from "./components/Hooks";

function App() {
  return (
    <div className="App">
      <h2>Helo React</h2>
      <FirstComponent />
      <Imagens />
      <Hooks />
    </div>
  );
}

export default App;
