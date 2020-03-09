import React, { Component } from 'react';
import './App.css';
import UserContainer from './User/Components/UserContainer'
import { inject } from 'mobx-react';
import RootStore from './Root/RootStore';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class App extends Component {

  render () {

    return (
      <>
      <Router>
        <Switch>
          <Route  exact={true}
                  path='/'
                  component={UserContainer}
          />
        </Switch>
      </Router>
      </>
    )
  }

}

export default App;
