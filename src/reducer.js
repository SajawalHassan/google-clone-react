// The State that the data layer is going to look like
export const initialState = {
  term: null,
};

// Putting What the user types in the search engine into the datalayer
export const actionTypes = {
  SET_SEARCH_TERM: "SET_SEARCH_TERM",
};

// Listening and responding to the changes the user has made
const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case actionTypes.SET_SEARCH_TERM:
      return {
        ...state, // Spreading the initial state
        term: action.term, // Then putting what the user has typed in
      };

    default:
      return state; // If nothing then return the initial state
  }
};

export default reducer;
