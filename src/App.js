import React, { Component } from "react";
import Form from "./components/Form";
import "./App.css";

class App extends Component {
  getRecipe = event => {
    event.preventDefault();
    //const recipeName = event.target.elements.recipeName.value;
    const recipeName = event.target.value;
    console.log("dela" + recipeName);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe} />
      </div>
    );
  }
}

export default App;
