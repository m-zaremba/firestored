import React from "react";

import successLogo from '../../images/Goal-pana.png';

import './success-indicator.styles.css';

const SuccessIndicator = () => {
  return <div className="success-wrapper">
    <img src={successLogo} alt=""/>
    <span>Yay! Data delivered safely.</span>
  </div>;
};

export default SuccessIndicator;