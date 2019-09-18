import { GET_RECIPES, GET_RECIPE, EMPTY_RECIPE } from "./types";

const initialState = {
  recipes: [],
  recipe: {}
};

export const getRecipes = (state = initialState, action) => {
  switch (action.type) {
    case GET_RECIPES:
      return {
        ...state,
        recipes: action.payload
      };
    case GET_RECIPE:
      return {
        ...state,
        recipe: action.payload
      };
    case EMPTY_RECIPE:
      return {
        ...state,
        recipe: action.payload
      };
    default:
      return state;
  }
};
