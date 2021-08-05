import '../src/css/App.css';

const First = () => <p>页面的内容</p>
const Home = () => <p>首页的内容</p>
function App() {
  return (
    <div>
      <header className="App-header">
      <First />
      <Home />
      </header>
    </div>
  );
}

export default App;
