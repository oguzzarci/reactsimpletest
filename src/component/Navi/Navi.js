import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import { Button } from "reactstrap";
import {Link} from "react-router-dom"
import AuthService from "../JwtServices/AuthService";
const Auth = new AuthService();

class Navi extends React.Component {

  constructor(props) {
    super(props);
    this.Auth = new AuthService();
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  handleLogout(){
      Auth.logout();
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">LoadTest</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/usersettings">MyProfile</NavLink>
              </NavItem>
              <NavItem>
                <Link to="/login">
                <Button
                  color="danger"
                  size="sm"
                  type="submit"
                  onClick={this.handleLogout.bind(this)}
                >
                  Logout
                </Button></Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navi;
