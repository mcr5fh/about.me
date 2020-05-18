import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { default as sarcasmReducer } from "./sarcasm/reducers";

export default combineReducers({
  sarcasmReducer: sarcasmReducer,
  //NOTE: This must be called form
  form: formReducer
});
