import React from "react";

const InputFormExample = props => {
  const formExampleOne = e => {
    e.preventDefault();
    console.log("Form Submitted");
  };

  return (
    <div>
      <h1>Input Form Example</h1>
      <form method="post" name="formExampleOne" onSubmit={formExampleOne}>
        <input type="text" placeholder="Enter something" />
        <input type="submit" className="button" value="Register" />
      </form>
    </div>
  );
};

export default InputFormExample;
