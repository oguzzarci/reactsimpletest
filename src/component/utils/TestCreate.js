import React, { Component } from "react";
import Navi from "../Navi/Navi";
import {Container,Card} from "react-bootstrap";
import AuthService from "../JwtServices/AuthService"
import {Label,Col,Input,Button} from "reactstrap"
import './a.css'
export default class Dashboard extends Component {

  constructor() {
    super();
    this.Auth = new AuthService();
  }

  componentWillMount() {
    if (!this.Auth.loggedIn()) {
      this.props.history.replace("/login");
    }
  }

  state = {
    fname: {
      value: "Mark",
      valid: true
    },
    lname: {
      value: "Otto",
      valid: true
    },
    email: {
      value: "",
      valid: false
    },
    city: {
      value: "",
      valid: false
    },
    state: {
      value: "",
      valid: false
    },
    zip: {
      value: "",
      valid: false
    }
  };

  changeHandler = event => {
    this.setState({ [event.target.name]: { value: event.target.value, valid: !!event.target.value } });
  };


  render() {
    return (
      <div>
        <Navi />
        <Container className="cont">
          <div className="oguz">
          <Label style={{textAlign:'center'}}>String Parameter</Label>
          <Card>
          <Card.Body>
          <Label  sm={3}>Senario Name</Label>
          <Col sm={10}>
            <Input type="text" name="senarioname" id="senarioname"  />
          </Col>
          <Label  sm={3}>Description</Label>
          <Col sm={10}>
            <Input type="textarea" name="description" id="description"  />
          </Col>
          <Label  sm={3}>Region</Label>
          <Col sm={10}>
            <Input type="text" name="region" id="region" value="eu-west-1" />
          </Col>
          <Label  sm={3}>EC2 AMI ID</Label>
          <Col sm={10}>
            <Input type="text" name="ec2amiid" id="ec2amiid"  />
          </Col>
          <Label  sm={3}>EC2 Count</Label>
          <Col sm={10}>
            <Input type="text" name="ec2count" id="ec2count" value="1" />
          </Col>
          <Label  sm={3}>INSTANCE TYPE</Label>
          <Col sm={10}>
            <Input type="text" name="instancetype" id="instancetype" value="m5.large" />
          </Col>
          <Label  sm={3}>Security Group</Label>
          <Col sm={10}>
            <Input type="text" name="securitygroup" id="securitygroup"  />
          </Col>
          <Label  sm={3}>Security Group Id</Label>
          <Col sm={10}>
            <Input type="text" name="securitygroupid" id="securitygroupid"  />
          </Col>
          <Label  sm={3}>ISSPOT</Label>
          <Col sm={10}>
            <Input type="text" name="isspot" id="isspot"  />
          </Col>
          <Label  sm={3}>SpotPrice</Label>
          <Col sm={10}>
            <Input type="text" name="spotprice" id="spotprice"  />
          </Col>
          <Label  sm={3}>EC2 KeyPair</Label>
          <Col sm={10}>
            <Input type="text" name="keypair" id="keypair"  />
          </Col>
          </Card.Body>
          </Card>
          </div>
        <br/>
        <div className="oguz">
            <Card>
              <Card.Body>
              <Label  sm={4}>AWS Access KeyID</Label>
          <Col sm={10}>
            <Input type="text" name="accesskey" id="accesskey"  />
          </Col>
          <Label  sm={4}>AWS Secret Access KeyID</Label>
          <Col sm={10}>
            <Input type="text" name="secretaccesskey" id="secretaccesskey"  />
          </Col>
              </Card.Body>
            </Card>

          </div>
          <div className="btn">
          <Button color="success" size="lg" block>SAVE</Button>
          </div>

        </Container>

      </div>
    );
  }
}
