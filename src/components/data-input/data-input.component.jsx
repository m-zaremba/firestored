import React from "react";

import "./data-input.styles.css";

const DataInput = ({ onChange, dataToUpload }) => {
  return (
    <textarea
      className="data-input"
      placeholder="PASTE DATA HERE"
      onChange={onChange}
      disabled={dataToUpload !== null ? true : false}
    ></textarea>
  );
};

export default DataInput;
