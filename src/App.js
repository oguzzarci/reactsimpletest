import React, { Component } from 'react'
import { Container } from "reactstrap"
import LoginPage from "../src/component/Login/LoginPage"
import {Route,Switch} from "react-router-dom"
import NotFound from "./component/utils/NotFound"
import UserDetalil from "./component/Login/UserDetalil"
import Dashboard from './component/utils/Dashboard';


class App extends Component {
  render() {
  
    return (
      <Container>
      <div >
        <Switch>

          <Route path="/" exact component={LoginPage}/>
          <Route path="/userSettings" exact component={UserDetalil}/>
          <Route path="/user" exact component={Dashboard}/>
          <Route component={LoginPage}></Route>
        </Switch>
      </div></Container>
    )
  }
}

export default App;