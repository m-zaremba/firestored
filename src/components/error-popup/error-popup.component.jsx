import React from "react";

import uploadErrorLogo from '../../images/3805046.jpg';

import './error-popup.styles.css';

const ErrorPopup = (errorMessage) => {

  // console.log(errorMessage.includes('JSON'))

  return <div className="error-wrapper">
    <img src={uploadErrorLogo} alt=""/>
    <span>Ups... The Policeman says you can't go in.</span>
  </div>;
};

export default ErrorPopup;
