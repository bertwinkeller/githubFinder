import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar.js'
import Users from './components/Users.js'
import Search from './components/Search.js'
import Alert from './components/Alert.js'
import About from './components/pages/About.js'
import User from './components/User.js'
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
              <Route exact path="/" render={props => (
                <Fragment>
                  <Search  />
                  <Users />
                </Fragment>
              )} />
              <Route exact path="/about" component={About} />
              <Route exact path="/user/:login" component={User} /> 
               
            </Switch>

          </div>
        </div>
      </Router>
      </AlertState>
    </GithubState>
  );


}

export default App;
