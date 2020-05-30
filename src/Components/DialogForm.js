import React, { Fragment, Component } from "react";
import AddIcon from "@material-ui/icons/Add";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
} from "@material-ui/core";
import Form from "./Form";
class DialogForm extends Component {
  state = {
    open: false,
  };

  onToggle = () => {
    this.setState({
      open: !this.state.open,
    });
  };

  onClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    const { muscles, handleSubmit, exercise } = this.props;
    const { open } = this.state;
    return (
      <Fragment>
        <Button variant="fab" color="secondary" onClick={this.onToggle}>
          <AddIcon />
        </Button>

        <Dialog open={this.state.open}>
          <DialogTitle>Create a New Form</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please fill out all the details
            </DialogContentText>
            <Form
              muscles={muscles}
              onSubmit={handleSubmit}
              exercise={exercise}
            />
          </DialogContent>

          <Button onClick={this.onClose}>Cancel</Button>
        </Dialog>
      </Fragment>
    );
  }
}

export default DialogForm;
