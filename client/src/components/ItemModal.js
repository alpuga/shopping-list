import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import { connect } from "react-redux";
import { addItem } from "../actions/itemActions";

class ItemModal extends Component {
  state = {
    modal: false,
    name: ""
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newItem = {
      name: this.state.name
    };

    //Add item via addItem action
    this.props.addItem(newItem);

    //Close Modal
    this.toggle();
  };

  render() {
    return (
      <div>
        <Button
          style={{ marginBottom: "2rem" }}
          onClick={this.toggle}
          block
          className="juju button"
        >
          Add Item
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader className="mod jiji" toggle={this.toggle}>
            Add To Shopping List
          </ModalHeader>
          <ModalBody className="mod">
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label className="jiji" for="item">
                  Item
                </Label>
                <Input
                  className="ghost-input"
                  type="text"
                  name="name"
                  id="item"
                  placeholder="Shopping Item"
                  onChange={this.onChange}
                />
                <Button
                  className="juju button"
                  color="dark"
                  style={{ marginTop: "2rem" }}
                  block
                >
                  Add
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  item: state.item
});

export default connect(
  mapStateToProps,
  { addItem }
)(ItemModal);
