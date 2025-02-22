import React, { Component } from 'react'
import { Container } from "reactstrap"
import LoginPage from "../src/component/Login/LoginPage"
import {Route,Switch} from "react-router-dom"
import NotFound from "./component/utils/NotFound"
import UserDetalil from "./component/Login/UserDetalil"
import TestCreate from './component/utils/TestCreate';

import Dashboard from './component/utils/Dashboard';

class App extends Component {
  render() {
  
    return (
      <Container>
      <div >
        <Switch>
          <Route path="/login" exact component={LoginPage}/>
          <Route path="/userSettings" exact component={UserDetalil}/>
          <Route path="/testcreate" exact component={TestCreate}/>
          <Route path="/" exact component={Dashboard}/>
          <Route component={NotFound}></Route>
        </Switch>
      </div></Container>
    )
  }
}

export default App;