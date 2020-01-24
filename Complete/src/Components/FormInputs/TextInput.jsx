import React, { useEffect, useState, useMemo } from "react";

const TextInput = props => {
  const [inputValue, setInputValue] = useState(props.initValue);
  const [inputValid, setInputValid] = useState(true);

  // Don't validate on blur until first validate has began.
  const validateBegan = false;

  const className = props.className || "";

  const alwaysValid = value => true;
  const validateInputFunc = props.validateInputFunc || alwaysValid;

  useEffect(() => {
    if (props.validateField === true) {
      debugger;
      validateInput();
    }
  }, [props.validateField]); // Only re-run the effect if count changes

  const validateInput = () => {
    console.log("Ran");
    debugger;
    setInputValid(validateInputFunc(inputValue));
  };

  return (
    <div>
      <input
        className={className}
        onChange={e => setInputValue(e.target.value)}
        type="text"
        placeholder="Enter something"
      />
      <div>Valid: {inputValid ? "Valid" : "Not"}</div>
    </div>
  );
};

export default TextInput;
