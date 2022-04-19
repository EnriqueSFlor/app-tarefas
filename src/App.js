import "./App.css";
import FirstComponent from "./components/FirstComponent";
import AnotherComponent from "./components/AnotherComponent";
import Imagens from "./components/imagens";
import Hooks from "./components/Hooks";
import List from "./components/List";
import RenderCond from "./components/RenderCond";

function App() {
  return (
    <div className="App">
      <h2>Helo React</h2>
      <FirstComponent />
      <Imagens />
      <Hooks />
      <List />
      <RenderCond />
    </div>
  );
}

export default App;
