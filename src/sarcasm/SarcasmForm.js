import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { sarcasmFormatText, clearText } from "./actions";

class SarcasmForm extends React.Component {
  renderError({ error }) {
    return <div className="ui error message">{error}</div>;
  }

  renderField = ({ input, label, type, meta: { touched, error } }) => {
    console.log("Render form input: " + JSON.stringify(input));

    return (
      <div>
        <label>{label}</label>
        <div>
          <input {...input} placeholder={label} type={type} />
          {touched && error && <span>{error}</span>}
        </div>
      </div>
    );
  };

  onSubmit = formValues => {
    //Redux form calls preventDefaultForYou
    //OnSubmit gets called with the values in the form
    console.log("Submitting Sarcasm Form " + JSON.stringify(formValues));
    this.props.sarcasmFormatText(formValues);
  };

  onClear = () => {
    this.props.clearText();
    // this.props.reset("sarcasmForm");
  };

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;

    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit)} className="ui form error">
          <Field
            name="inputText"
            type="text"
            component={this.renderField}
            label="Sarcastic Text"
          />
          <button
            type="submit"
            className="ui button primary"
            disabled={pristine || submitting}
          >
            Submit
          </button>
          <button
            type="button"
            className="ui button secondary"
            disabled={pristine || submitting}
            onClick={reset}
          >
            Clear Values
          </button>
        </form>
      </div>
    );
  }
}

/**
 * Returning an empty object means that the input is valid,
 * the error messages returned are shown on the form.
 *
 * The error values key must match the field name exactly
 */
const validate = formValues => {
  const errors = {};

  if (!formValues.text) {
    errors.title = "You must enter some text";
  }

  return errors;
};

SarcasmForm = connect(
  null, //map state to props
  { sarcasmFormatText, clearText } //actionCreators
)(SarcasmForm);

//WrappedForm
export default reduxForm({
  form: "sarcasmForm",
  validate
})(SarcasmForm);
