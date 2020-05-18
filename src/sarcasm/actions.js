export const FORMAT_TEXT = "FORMAT_TEXT";
export const CLEAR_TEXT = "CLEAR_TEXT";

export const sarcasmFormatText = formText => {
  console.log(
    "SarcasmFormatText Action. FormText: " + JSON.stringify(formText)
  );
  return {
    type: FORMAT_TEXT,
    payload: formText.inputText
  };
};

export const clearText = () => {
  console.log("ClearText Action");
  return {
    type: CLEAR_TEXT
  };
};
