import React, { Component } from 'react'
import { Provider } from 'react-redux'
import logo from './logo.svg'
import './App.scss'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import store from './store'
import Customers from './components/Customer/customers'
import Home from './components/Home/home'

class App extends Component {

  render () {
    return (
      <Provider store={ store }>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      </Provider>
    )
  }
}

export default App
