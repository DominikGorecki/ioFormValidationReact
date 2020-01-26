import React, { useEffect, useState, useMemo } from "react";
import TextInput from "./FormInputs/TextInput";
import validator from "validator";

const InputFormExample = props => {
  const [emailInputValid, setEmailInputValid] = useState(false);
  const [secondaryEmailValid, setSecondaryEmailValid] = useState(true);

  const [validateTriggerKey, setValidateTriggerKey] = useState(false);
  const [formValidated, setFormValidated] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);

  const formExampleOne = e => {
    e.preventDefault();
    if (formIsValid) {
      console.log("Form valid");
      console.log("Form Submitted");
    } else if (!formValidated) {
      // We know some input is invalid, trigger validation of elements to show error messages
      setValidateTriggerKey(new Date().getTime());
      setFormValidated(true);
      console.log("Form invalid");
    }
  };

  useEffect(() => {
    setFormIsValid(emailInputValid === true);
  }, [emailInputValid]);

  return (
    <div>
      <h1>Input Form Example</h1>
      <form method="post" name="formExampleOne" onSubmit={formExampleOne}>
        <TextInput
          placeholder="Enter email required"
          label="Email:"
          validateInputFunc={validator.isEmail}
          validateCallback={ret => setEmailInputValid(ret)}
          validateTrigger={validateTriggerKey}
          validateFailMessage="Not a valid email."
          required={true}
          containerClassName="container-class-name"
          labelClassName="label-class-name"
          errorClassName="error-class-name"
        />
        <input type="submit" className="button" value="Register" />
      </form>
    </div>
  );
};

export default InputFormExample;
