import React, { lazy, Suspense } from 'react';
import '../src/css/App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

const Home = lazy(() => import('../src/pages/Home'))
const CityList = lazy(() => import('../src/pages/CityList'))
const Index = lazy(() => import('../src/pages/Index'))
const News = lazy(() => import('../src/pages/News'))
const Profile = lazy(() => import('../src/pages/Profile'))
const HouseList = lazy(() => import('../src/pages/HouseList'))

function App() {
  return (
    <Router>
      <Suspense fallback={<div className='index-Loading' >Loading...</div>}>
        <div className="App-header">
          <Route exact path='/' render={() => <Redirect to='/home' />}></Route>
          <Route path='/home' component={Home}></Route>
          <Route path='/home/index' component={Home}></Route>
          <Route path='/citylist' component={CityList}></Route>
          <Route exact path="/home/index" component={Index}></Route>
          <Route exact path="/home/news" component={News}></Route>
          <Route exact path="/home/profile" component={Profile}></Route>
          <Route exact path="/home/list" component={HouseList}></Route>
        </div>
      </Suspense>
    </Router >
  );
}

export default App;
