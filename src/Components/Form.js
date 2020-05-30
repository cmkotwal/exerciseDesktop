import React, { Component } from "react";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@material-ui/core";

class Form extends Component {
  state = this.getInitialState();

  getInitialState() {
    const { exercise } = this.props;

    return exercise
      ? exercise
      : {
          title: "",
          description: "",
          muscles: "",
        };
  }

  componentWillReceiveProps({ exercise }) {
    this.setState({
      ...exercise,
    });
  }

  handleChange = (name) => ({ target: { value } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = () => {
    this.props.onSubmit({
      id: this.state.title.toLocaleLowerCase().replace(/ /g, "-"),
      ...this.state,
    });

    this.setState(this.getInitialState());
  };

  render() {
    const { title, description, muscles } = this.state;
    const { muscles: categories, onSubmit, exercise } = this.props;

    return (
      <div>
        <form>
          <TextField
            label="Title"
            value={title}
            onChange={this.handleChange("title")}
          />
          <br />

          <TextField
            label="Description"
            value={description}
            onChange={this.handleChange("description")}
            multiline
            rows="4"
          />
          <br />

          <FormControl>
            <InputLabel>Muscles</InputLabel>
            <Select value={muscles} onChange={this.handleChange("muscles")}>
              {categories.map((category) => (
                <MenuItem value={category}>{category}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <br />

          <Button color="primary" onClick={this.handleSubmit}>
            {exercise ? "Edit" : "Create"}
          </Button>
        </form>
      </div>
    );
  }
}

export default Form;
