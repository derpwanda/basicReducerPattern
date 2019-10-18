export const initialState = {
  title: "The Reducer Pattern",
  editing: false
};

export function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_EDITING":
      return {
        ...state, //spread the existing state
        editing: !state.editing //returns the opposite of the current state
      };

    case "UPDATE_TITLE":
      return {
        ...state,
        title: action.payload
      };

    default:
      return state;
  }
}
