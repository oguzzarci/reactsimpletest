import React, { Component } from "react";
import Navi from "../Navi/Navi";
import { Container } from "react-bootstrap";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

import {bindActionCreators} from "redux"
import * as LoginAction from "../../redux/actions/LoginAction"
import {connect} from "react-redux"

class UserDetalil extends Component {


  componentDidMount(){
    // this.props.actions.getCategories()
  }

  render() {

    return (
      <div>
        {
          console.log(this.props.categories)
        }
        <Navi />
        <Container style={{marginTop:'10%'}}>
            <FormGroup>
              <Label for="userName">UserName : </Label> <Label>{this.props.categories.length}</Label>
            </FormGroup>
            <FormGroup>
            <Label for="email">Email : </Label> <Label>admin@admin.com</Label>
            </FormGroup>

            <Form inline>
        <FormGroup>
          <Input type="password" name="password" id="password" placeholder="New password" />
        </FormGroup>
        <FormGroup>
          <Input type="password" name="password" id="password" placeholder="Confirm Password" />
        </FormGroup>

        <Button>ChangePassword</Button>
      </Form>
        </Container>
      </div>
    );
  }
}


function mapStateToProps(state){
  return {
      categories:state.oguzReducer
  }
}

function mapDispatchToProps(dispatch){
  return {
    actions:{
      // getCategories:bindActionCreators(LoginAction.getCategories,dispatch)
    }
  }
}




export default connect(mapStateToProps,mapDispatchToProps)(UserDetalil)
