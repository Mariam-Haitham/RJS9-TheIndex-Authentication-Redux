import * as actionTypes from "../actions/actionTypes";

const initialState = {
  user: null
};
export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CURRENT_USER:
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
};
