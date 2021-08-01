import '../src/css/App.css';
import img from '../src/img/cat.png';

import Mouse from "../src/components/Mouse";

function App() {
  return (
    <div>
      <header className="App-header">
        {/* <Mouse render={(mouse) => {
          return <p className="mouse">mouse: ${mouse.x} : ${mouse.y}</p>
        }}/> */}
        <Mouse>
          {
            (mouse) => {
              return <p className="mouse">mouse: ${mouse.x} : ${mouse.y}</p>
            }
          }
        </Mouse>
        <Mouse>
          {
            (mouse) => {
              return <img src={img} alt="小花猫" style={{
                position: 'absolute',
                top: mouse.y,
                left: mouse.x,
                width: '20px',
                height: '20px'
              }}/>
            }
          }
        </Mouse>
      </header>
    </div>
  );
}

export default App;
