import React, { Component } from "react";
import { FormGroup } from "react-bootstrap";
import "../../component/AllComponent.css";
import { Button, Input, Label } from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as LoginAction from "../../redux/actions/LoginAction";
import AuthService from "../JwtServices/AuthService";


class LoginPage extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.Auth = new AuthService();
  }



  componentWillMount() {
    if (this.Auth.loggedIn()) {
      this.props.history.replace("/");
    }
  }

  componentDidMount() {
    this.props.actions.userCheck();
  }

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleFormSubmit}>
          <FormGroup>
            <Label for="email">Username</Label>
            <Input
              type="text"
              name="username"
              id="username"
              placeholder="Enter Email"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="Password">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password"
              onChange={this.handleChange}
            />
          </FormGroup>

          <Button color="success" block type="submit">
            Login
          </Button>
        </form>
      </div>
    );
  }

  handleFormSubmit(e) {
    e.preventDefault();
    
      this.Auth.login(this.state.username, this.state.password)
      .then(res => {
        this.props.history.replace("/");
      })
      .catch(err => {
        alert(err);
      });
    

  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
}

function mapStateToProps(state) {
  return {
    userdata: state.userCheckReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      userCheck: bindActionCreators(LoginAction.userCheck, dispatch)
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
//export default LoginPage;
