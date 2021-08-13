import React, { lazy, Suspense } from 'react';
import '../src/css/App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

const Home = lazy(() => import('../src/pages/Home'))
const CityList = lazy(() => import('../src/pages/CityList'))

function App() {
  return (
    <Router>
      <Suspense fallback={<div className='index-Loading' >Loading...</div>}>
        <div className="App-header">
          <Route exact path='/' render={() => <Redirect to='/home' />}></Route>
          <Route path='/home' component={Home}></Route>
          <Route path='/home/index' component={Home}></Route>
          <Route path='/citylist' component={CityList}></Route>
        </div>
      </Suspense>
    </Router >
  );
}

export default App;
