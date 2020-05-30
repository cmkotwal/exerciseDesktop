import React, { Fragment, Component } from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Content from "./Components/Content";
import { muscles, exercises } from "./Components/Store";

class App extends Component {
  state = {
    exercises,
    exercise: {},
  };

  getExerciseByMuscles() {
    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise;

        exercises[muscles] = exercises[muscles]
          ? [...exercises[muscles], exercise]
          : [exercise];

        return exercises;
      }, {})
    );
  }

  handleCategorySelect = (category) => {
    this.setState({
      category,
    });
  };

  handleDisplayData = (id) => {
    this.setState(({ exercises }) => ({
      exercise: exercises.find((ex) => ex.id === id),
      editMode: false,
    }));
  };

  handleExerciseCreate = (exercise) => {
    this.setState(({ exercises }) => ({
      exercises: [...exercises, exercise],
    }));
  };

  handleExerciseDelete = (id) => {
    this.setState(({ exercises }) => ({
      exercises: exercises.filter((ex) => ex.id !== id),
      editMode: false,
      exercise: {},
    }));
  };

  handleExerciseSelectEdit = (id) => {
    this.setState(({ exercises }) => ({
      exercise: exercises.find((ex) => ex.id === id),
      editMode: true,
    }));
  };

  handleExerciseEdit = (exercise) => {
    this.setState((exercises) => ({
      exercises: [...exercises.filter((ex) => ex.id !== exercise.id), exercise],
      exercise,
    }));
  };
  render() {
    const exercises = this.getExerciseByMuscles();
    const { category, exercise, editMode } = this.state;
    return (
      <div className="App">
        <Fragment>
          <Header
            muscles={muscles}
            handleSubmit={this.handleExerciseCreate}
            exercise={exercise}
          />
          <Content
            exercise={exercise}
            exercises={exercises}
            category={category}
            onSubmit={this.handleDisplayData}
            onDelete={this.handleExerciseDelete}
            onHandleEdit={this.handleExerciseSelectEdit}
            editMode={editMode}
            muscles={muscles}
            onEdit={this.handleExerciseEdit}
          />

          <Footer
            category={category}
            muscles={muscles}
            onSubmit={this.handleCategorySelect}
          />
        </Fragment>
      </div>
    );
  }
}

export default App;
