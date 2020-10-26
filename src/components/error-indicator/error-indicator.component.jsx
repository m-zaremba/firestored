import React from "react";

import errorLogo from '../../images/3805046.jpg';

import './error-indicator.styles.css';

const ErrorIndicator = () => {
  return <div className="error-wrapper">
    <img src={errorLogo} alt=""/>
    <span>Ups... The Policeman says you can't go in.</span>
  </div>;
};

export default ErrorIndicator;
