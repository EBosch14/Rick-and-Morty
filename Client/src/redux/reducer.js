import { ADD_FAV, REMOVE_FAV } from "./actions/types";

const initialState = {
  data: [],
  myFavorites: [],
};

export default function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.myFavorites, payload],
      };
    case REMOVE_FAV:
      const filterFavorites = state.myFavorites.filter(
        (ch) => ch.id !== payload
      );
      return {
        ...state,
        myFavorites: filterFavorites,
      };
    default:
      return state;
  }
}
