import React from "react";

import './text-input.styles.css';

const TextInput = ({name, onChange}) => {
  return (
    <label>
      {name}
      <input type="text" name={name} onChange={onChange} />
    </label>
  );
};

export default TextInput;
