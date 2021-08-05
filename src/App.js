import '../src/css/App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import { MousePosition, CatPosition } from "../src/components/Mouse";
import Random from '../src/components/Random'

const First = () =>　<p>页面一的内容</p>
const Home = () =>　<p>首页的内容</p>
function App() {
  return (
    <Router>
      <div>
        <header className="App-header">
          {/* <MousePosition a="1"/>  */}
          {/* <CatPosition b="1"/> */}
          <Random></Random>
          <h1>路由基础</h1>
          <div>
            {/* 路由出口 */}
            <Route path="/first" component={First}></Route>
            {/* <Route path="/" component={Home}></Route> */}
            <Route exact path="/" component={Home}></Route>
          </div>
          <Link to="/first">页面一</Link>
          <div>鞥先</div>
          <Link to="/">首页</Link>
        </header>
        {/* 路由入口 */}
      </div>
    </Router>
  );
}

export default App;
