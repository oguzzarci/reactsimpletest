import React, { Component } from "react";
import { FormGroup} from "react-bootstrap";
import "../../component/AllComponent.css";
import { Button, Input, Label } from "reactstrap";
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import * as LoginAction from "../../redux/actions/LoginAction"

class LoginPage extends Component {


  componentDidMount(){
    this.props.actions.userCheck()
}



  render() {
    return (
      <div className="Login">
                {
          console.log(this.props.userdata)
                }
        <form>
          <FormGroup >
            <Label for="email">Email :</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email"

            />
          </FormGroup>
          <FormGroup>
            <Label for="Password">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password"
            />
          </FormGroup>

          <Button
            color="success"
            block
            
            type="submit"
          >
            Login
          </Button>
        </form>
      </div>
    );
  }
}




function mapStateToProps(state){
  return{
    userdata:state.userCheckReducer
  }
}


function mapDispatchToProps(dispatch){
  return {
    actions:{
      userCheck:bindActionCreators(LoginAction.userCheck,dispatch)
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginPage)