import React, { useEffect, useState, useMemo } from "react";

const TextInput = props => {
  const [inputValue, setInputValue] = useState(props.initValue || "");
  const [inputValid, setInputValid] = useState(true);
  // Don't validate on blur until first validate has began.
  const [validateBegan, setValidateBegan] = useState(true);

  const className = props.className || "";
  const alwaysValid = value => true;
  const validateInputFunc = props.validateInputFunc || alwaysValid;
  const emptyFunc = ret => {};
  const validateCallback = props.validateCallback || emptyFunc,
    validateFailMessage = props.validateFailMessage || "Invalid input";

  useEffect(() => {
    if (props.validateTrigger) {
      console.log("Validation Trigger");
      validateInput();
    }
  }, [props.validateTrigger]);

  const validateInput = () => {
    console.log("Validation Ran");
    if (validateInputFunc(inputValue)) {
      setInputValid(true);
      validateCallback(true);
    } else {
      setInputValid(false);
      validateCallback(false);
    }
  };

  return (
    <div>
      <input
        className={className}
        onFocus={() => setValidateBegan(true)}
        onChange={e => {
          setInputValue(e.target.value);
          validateInput();
        }}
        onBlur={() => validateInput()}
        type="text"
        placeholder={props.placeholder}
      />
      {!inputValid && <div>{validateFailMessage}</div>}
    </div>
  );
};

export default TextInput;
