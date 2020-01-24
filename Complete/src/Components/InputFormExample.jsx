import React, { useEffect, useState, useMemo } from "react";
import TextInput from "./FormInputs/TextInput";
import validator from "validator";

const InputFormExample = props => {
  const [initFormVal, setInitFormVal] = useState(false);
  const formExampleOne = e => {
    e.preventDefault();
    console.log("Form Submitted");
    setInitFormVal(true);
  };

  return (
    <div>
      <h1>Input Form Example</h1>
      <form method="post" name="formExampleOne" onSubmit={formExampleOne}>
        <TextInput
          validateInputFunc={validator.isEmail}
          validateField={initFormVal}
          className="test"
        />
        <input type="submit" className="button" value="Register" />
      </form>
    </div>
  );
};

export default InputFormExample;
