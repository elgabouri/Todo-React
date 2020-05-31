import React, { Component } from "react";
import "./Style.css";

class AddTodo extends Component {
  constructor() {
    super();
    this.state = {
      today: new Date(),
      userInput: "",
      list: [],
    };
  }

  onChange(event) {
    // console.log(event.target.value);
    this.setState({
      userInput: event.target.value,
    });
  }

  addTodo(event) {
    event.preventDefault();
    //const newArray = [...this.state.list, this.state.userInput];
    this.setState({
      userInput: "",
      list: [...this.state.list, this.state.userInput],
    });
  }

  deleteTodo(index) {
    const array = this.state.list;
    //const index = array.indexOf(item.target.value);
    console.log("id", index);
    array.splice(index, 1);
    this.setState({
      list: array,
    });
  }

  affichage() {
    return this.state.list.map((item, index) => {
      return (
        <div key={item}>
          <div className="row">
            <div className="rol">
              <ul className="list-group inline btn-group">
                <li className="list-group-item mr-3">{item}</li>
              </ul>
            </div>
            <div className="rol">
              <button
                className=" btn-sm btn-outline-danger"
                onClick={this.deleteTodo.bind(this, index)}
              >
                X
              </button>
              {/* check box */}
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="box">
        <form onSubmit={this.onSubmit}>
          <br />
          <h3>
            Day {this.state.today.getDate()}-{this.state.today.getMonth() + 1}-
            {this.state.today.getFullYear()}
          </h3>
          <div className="input-group mb-3">
            <input
              className="form-control"
              type="text"
              placeholder="Entrer ton tache"
              value={this.state.userInput}
              onChange={this.onChange.bind(this)}
            />
            <div className="input-group-append">
              <button
                className="btn btn-primary"
                onClick={this.addTodo.bind(this)}
              >
                Ajouter
              </button>
            </div>
          </div>
        </form>
        <div>{this.affichage()}</div>
      </div>
    );
  }
}

export default AddTodo;
