import React, { Component } from "react";
import AddTodo from "./AddTodo";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <h1 className="text-title">Todo list</h1>
          <br />
          <AddTodo />
        </div>
      </div>
    );
  }
}

export default App;
