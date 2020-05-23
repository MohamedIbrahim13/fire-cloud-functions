import React from 'react';
import {BrowserRouter,Switch, Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import Home from './components/home/Home';
import Details from './components/details/Details';
import Profile from './components/auth/Profile';
import CoverPage from './components/layout/CoverPage';
import JoinForm from './components/auth/JoinForm';
import LoginForm from './components/auth/LoginForm';


function App() {
  return (

    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route  path='/pre-home' component={CoverPage} />
          <Route path='/twiit/:id' component={Details} />
          <Route path='/profile' component={Profile} />
          <Route path='/join-us' component={JoinForm} />
          <Route path='/log-in' component={LoginForm} />
        </Switch>
        
      </div>
    </BrowserRouter>
    
  );
}

export default App;
