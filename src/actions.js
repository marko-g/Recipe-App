import { GET_RECIPES, GET_RECIPE, EMPTY_RECIPE } from "./types";
import axios from "axios";

//const API_KEY = "fddd7d13d61344e5b0b0b9106f04494c";

const API_KEY2 = "d270f61c8c9fe2ef89633f4b609966de";
export const requestRecipes = recipeName => dispatch => {
  axios
    .get(
      `https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY2}&q=${recipeName}&page=2`
    )
    .then(data =>
      dispatch({
        type: GET_RECIPES,
        payload: data.data.recipes
      })
    )
    .catch(err => console.log(err));
};

export const requestRecipe = id => dispatch => {
  axios
    .get(
      `https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/get?key=${API_KEY2}&rId=${id}`
    )
    .then(data =>
      dispatch({
        type: GET_RECIPE,
        payload: data.data.recipe
      })
    )
    .catch(err => console.log(err));
};

export const emptyRecipe = () => dispatch => {
  return dispatch({
    type: EMPTY_RECIPE,
    payload: {}
  });
};
