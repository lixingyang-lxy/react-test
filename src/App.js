import '../src/css/App.css';


import { MousePosition, CatPosition } from "../src/components/Mouse";

function App() {
  return (
    <div>
      <header className="App-header">
        <MousePosition /> 
        <CatPosition />
      </header>
    </div>
  );
}

export default App;
