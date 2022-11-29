import { Component } from "react";
import { Container, Alert, Form, FormControl } from "react-bootstrap";

class WarningSign extends Component {
  render() {
    return (
      <div>
        <Alert variant="danger">{this.props.message}</Alert>
      </div>
    );
  }
}

export default WarningSign;
