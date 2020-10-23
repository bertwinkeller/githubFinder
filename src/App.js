import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar.js'
import Alert from './components/Alert.js'
import About from './components/pages/About.js'
import User from './components/User.js'
import Home from './components/pages/Home'
import NotFound from './components/pages/NotFound'
import GithubState from './context/github/githubState'
import AlertState from './context/alert/alertState'


const App = () => {




  return (
    <GithubState>
      <AlertState>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Alert  />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/user/:login" component={User} /> 
               <Route component={NotFound}/>
            </Switch>

          </div>
        </div>
      </Router>
      </AlertState>
    </GithubState>
  );


}

export default App;
