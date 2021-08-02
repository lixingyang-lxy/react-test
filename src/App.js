import '../src/css/App.css';


import { MousePosition, CatPosition } from "../src/components/Mouse";

function App() {
  return (
    <div>
      <header className="App-header">
        <MousePosition a="1"/> 
        <CatPosition b="1"/>
      </header>
    </div>
  );
}

export default App;
