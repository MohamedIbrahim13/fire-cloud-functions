import React from 'react';
import {BrowserRouter,Switch, Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import Home from './components/home/Home';
import Details from './components/details/Details';
import Profile from './components/auth/Profile';
import JoinForm from './components/auth/JoinForm';
import LoginForm from './components/auth/LoginForm';


function App() {
  return (

    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="h-auto">
          <div className="container-fluid container-md">
           <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/fire-details/:id' component={Details} />
            <Route path='/profile' component={Profile} />
            <Route path='/join-us' component={JoinForm} />
            <Route path='/log-in' component={LoginForm} />
           </Switch>
          </div>
        </div>
            
        
        
      </div>
    </BrowserRouter>
    
  );
}

export default App;
