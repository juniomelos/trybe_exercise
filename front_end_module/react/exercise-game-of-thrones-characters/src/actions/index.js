import charAPI from "../services/charAPI";

export const CHAR_SEARCHED = "CHAR_SEARCHED";
export const CHAR_SUCCESS = "CHAR_SUCCESS";
export const CHAR_ERROR = "CHAR_ERROR";

export const charSearched = (characterSearched) => ({
  type: CHAR_SEARCHED,
  loading: true,
  characterSearched,
});

export const charSucess = (character) => ({
  type: CHAR_SUCCESS,
  loading: false,
  character,
});

export const charError = (error) => ({
  type: CHAR_ERROR,
  loading: false,
  error,
});

export function fetchThunkChar(name) {
  return (dispatch) => {
    dispatch(charSearched(name));
    return charAPI(name).then(
      (character) => dispatch(charSucess(character)),
      (error) => dispatch(charError(error.message))
    );
  };
}
