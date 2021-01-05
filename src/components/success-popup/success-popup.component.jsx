import React from "react";

import successLogo from '../../images/Goal-pana.png';

import './success-popup.styles.css';

const SuccessPopup = () => {
  return <div className="success-wrapper">
    <img src={successLogo} alt=""/>
    <span>Yay! Data delivered safely.</span>
  </div>;
};

export default SuccessPopup;