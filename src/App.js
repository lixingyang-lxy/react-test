import '../src/css/App.css';


// import { MousePosition, CatPosition } from "../src/components/Mouse";

import Random from '../src/components/Random'
function App() {
  return (
    <div>
      <header className="App-header">
        {/* <MousePosition a="1"/>  */}
        {/* <CatPosition b="1"/> */}
        <Random></Random>
      </header>
    </div>
  );
}

export default App;
