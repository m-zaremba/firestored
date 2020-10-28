import React from "react";

import "./data-input.styles.css";

const DataInput = ({onChange}) => {
  return (
    <textarea
      className="data-input"
      placeholder="PASTE DATA HERE"
      onChange={onChange}
    ></textarea>
  );
};

export default DataInput;
