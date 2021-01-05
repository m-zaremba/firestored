import React from "react";

import "./button.styles.css";

const Button = ({ text, style, action, dataValidated, rawData }) => {
  let dynamicClassNames;

  if (
    dataValidated !== undefined &&
    rawData !== undefined &&
    rawData !== "" &&
    dataValidated !== null
  ) {
    dynamicClassNames = "send-button active";
  } else {
    dynamicClassNames = "send-button";
  }

  return (
    <div
      className={dynamicClassNames}
      role="button"
      style={style}
      onClick={action}
    >
      {text}
    </div>
  );
};

export default Button;
