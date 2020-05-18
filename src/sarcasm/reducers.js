import { FORMAT_TEXT, CLEAR_TEXT } from "./actions";
// import { dispatch } from 'react-redux';
// import { reset } from 'redux-form';

const INITIAL_STATE = {
  submitted: false,
  formText: null
};

function makeTextSarcastic(inputText) {
  let count = 0;
  let formatted = "";
  for (var letter of inputText) {
    // if (count % 4 == 0 || count % 3 == 0) {
    if (count % 2 == 0 || count % 5 == 0) {
      letter = letter.toUpperCase();
    } else {
      //In case someone enters all caps
      letter = letter.toLowerCase();
    }
    formatted += letter;
    count++;
  }
  return formatted;
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FORMAT_TEXT:
      const sarcastic = makeTextSarcastic(action.payload);
      return { ...state, formText: sarcastic, submitted: true };
    case CLEAR_TEXT:
      // dispatch(reset("sarcasmForm"));
      return INITIAL_STATE;
    default:
      return state;
  }
};
