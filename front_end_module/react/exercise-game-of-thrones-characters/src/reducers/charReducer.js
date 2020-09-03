import { CHAR_SEARCHED, CHAR_SUCCESS, CHAR_ERROR } from "../actions";

const initialState = {
  isLoading: false,
  character: "",
};

function charReducer(state = initialState, action) {
  switch (action.type) {
    case CHAR_SEARCHED:
      return {
        ...state,
        isLoading: true,
      };
    case CHAR_SUCCESS:
      return {
        ...state,
        isLoading: false,
        character: action.character[0],
      };
    case CHAR_ERROR:
      return {
        ...state,
        isLoading: false,
        character: action.error,
      };
    default:
      return state;
  }
}

export default charReducer;
