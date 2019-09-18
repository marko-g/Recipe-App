import React, { Component } from "react";
import { requestRecipe, emptyRecipe } from "../actions";
import { connect } from "react-redux";

import { Link } from "react-router-dom";

class Recipe extends Component {
  componentDidMount = () => {
    this.props.emptyRecipe();
    const { id } = this.props.match.params;
    this.props.requestRecipe(id);
  };
  render() {
    const { recipe } = this.props;
    return (
      <div className="container">
        {Object.keys(recipe).length !== 0 && (
          <div className="active-recipe">
            <img
              className="active-recipe__img"
              src={recipe.image_url}
              alt={recipe.title}
            />
            <h3 className="active-recipe__title">{recipe.title}</h3>
            <h4 className="active-recipe__publisher">
              Publisher: <span>{recipe.publisher}</span>
            </h4>
            <p className="active-recipe__website">
              Website:
              <span>
                <a href={recipe.publisher_url}>{recipe.publisher_url}</a>
              </span>
            </p>
            <button className="active-recipe__button">
              <Link to="/">Go Home</Link>
            </button>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    recipe: state.recipe
  };
};

export default connect(
  mapStateToProps,
  { requestRecipe, emptyRecipe }
)(Recipe);
