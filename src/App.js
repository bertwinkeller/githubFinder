import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar.js'
import Users from './components/Users.js'
import Search from './components/Search.js'
import Alert from './components/Alert.js'
import About from './components/pages/About.js'
import User from './components/User.js'
import GithubState from './context/github/githubState'


const App = () => {


  const [alert, setAlert] = useState(null)



  const showAlert = (msg, type) => {
    setAlert({ msg, type })
    setTimeout(() => setAlert(null), 3000)
  }


  return (
    <GithubState>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Alert alert={alert} />
            <Switch>
              <Route exact path="/" render={props => (
                <Fragment>
                  <Search 
                    setAlert={showAlert} />
                  <Users />
                </Fragment>
              )} />
              <Route exact path="/about" component={About} />
              <Route exact path="/user/:login" component={User} /> 
               
            </Switch>

          </div>
        </div>
      </Router>
    </GithubState>
  );


}

export default App;
