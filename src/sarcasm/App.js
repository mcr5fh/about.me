import React from "react";
import SarcasmForm from "./SarcasmForm";
import { connect } from "react-redux";
import spongebob from "../assets/images/sarcastic_sponge.jpg";

const App = props => {
  let formattedText;
  if (props.submitted) {
    formattedText = <h3>{`${props.text}!!!!`}</h3>;
  }

  return (
    <div className="ui container">
      <img
        className="ui medium centered middle aligned rounded image"
        src={spongebob}
        alt="SpongeBob MeMe"
      />
      <div>Enter your sarcastic text here</div>
      <div className="ui text container">
        <SarcasmForm />
        {formattedText}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    submitted: state.sarcasmReducer.submitted,
    text: state.sarcasmReducer.formText
  };
};
export default connect(
  mapStateToProps,
  null
)(App);
