import React, { useEffect, useState, useMemo } from "react";

const TextInput = props => {
  const [inputValue, setInputValue] = useState(props.initValue || "");
  const [inputValid, setInputValid] = useState(true);
  // Don't validate on blur until first validate has began.
  const [validateBegan, setValidateBegan] = useState(false);

  // Classnames
  const inputClassName = props.inputClassName || "",
    containerClassName = `${props.containerClassName || ""} ${
      props.required ? "required" : ""
    }`,
    labelClassName = props.labelClassName || "",
    errorClassName = props.errorClassName || "";

  const validateInputFunc = props.validateInputFunc || alwaysValid;
  // Copy
  const label = props.label || false,
    validateFailMessage = props.validateFailMessage || "Invalid input";

  // Functions
  const validateCallback = props.validateCallback || emptyFunc,
    required = props.required === true ? true : false;

  const alwaysValid = value => true;
  const emptyFunc = ret => {};

  useEffect(() => {
    if (props.validateTrigger) {
      console.log("Validation Trigger");
      validateInput();
    }
  }, [props.validateTrigger]);

  const validateInput = () => {
    console.log("Validation Ran");
    setValidateBegan(true);
    if ((!required && !inputValue) || validateInputFunc(inputValue)) {
      setInputValid(true);
      validateCallback(true);
      return true;
    } else {
      setInputValid(false);
      validateCallback(false);
      return false;
    }
  };

  const enterPressed = e => {
    if (e.charCode == 13 || e.keyCode == 13) {
      if (!validateInput()) {
        e.preventDefault();
      }
    }
    /* Edge case -- check for shift, select and delete
    // Must be onKeyUp
    if (
      e.charCode == 8 ||
      e.keyCode == 8 ||
      e.keyCode == 46 ||
      e.charCode == 46
    ) {
      console.log(e.target.value);
      setInputValue(e.target.value);
      validateInput();
    }
    */
  };

  return (
    <div className={containerClassName}>
      {label && <div className={labelClassName}>{label}</div>}
      <input
        className={inputClassName}
        onChange={e => {
          setInputValue(e.target.value);
          if (validateBegan) validateInput();
        }}
        onBlur={() => {
          validateInput();
        }}
        onKeyDown={enterPressed}
        type="text"
        placeholder={props.placeholder}
      />
      {!inputValid && (
        <div className={errorClassName}>{validateFailMessage}</div>
      )}
    </div>
  );
};

export default TextInput;
