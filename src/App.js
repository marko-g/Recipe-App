import React, { Component } from "react";
import { connect } from "react-redux";
import { requestRecipes } from "./actions";
import Form from "./components/Form";
import Recipes from "./components/Recipes";
import "./App.css";

class App extends Component {
  getRecipe = event => {
    event.preventDefault();
    const recipeName = event.target.elements.recipeName.value;
    this.props.requestRecipes(recipeName);
  };

  render() {
    const { recipes } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe} />
        <Recipes recipes={recipes} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    recipes: state.recipes
  };
};

export default connect(
  mapStateToProps,
  { requestRecipes }
)(App);
