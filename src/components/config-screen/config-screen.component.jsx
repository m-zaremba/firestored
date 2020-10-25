import React, { useState } from "react";

import { configFirebase } from "../../firebase/firebase.utils";

import Button from "../button/button.component";
import logo from "../../images/2828682.jpg";

import './config-screen.styles.css';

const ConfigScreen = ({ setDbConfigured }) => {
  const [credentials, setCredentials] = useState({});

  const handleChange = (event) => {
    const value = event.target.value;
    setCredentials({
      ...credentials,
      [event.target.name]: value,
    });
  };

  return (
    <div className="config-screen_wrapper">
      <img src={logo} alt="graphic of people working on IT project" />
      <div className="form">
        <label>
          apiKey
          <input type="text" name="apiKey" onChange={handleChange} />
        </label>
        <label>
          authDomain
          <input type="text" name="authDomain" onChange={handleChange} />
        </label>
        <label>
          databaseURL
          <input type="text" name="databaseURL" onChange={handleChange} />
        </label>
        <label>
          projectId
          <input type="text" name="projectId" onChange={handleChange} />
        </label>
        <label>
          storageBucket
          <input type="text" name="storageBucket" onChange={handleChange} />
        </label>
        <label>
          messagingSenderId
          <input type="text" name="messagingSenderId" onChange={handleChange} />
        </label>
        <label>
          appId
          <input type="text" name="appId" onChange={handleChange} />
        </label>
      </div>
      <Button
        action={() => {
          configFirebase(credentials) || setDbConfigured(true);
        }}
        text={"Configure firestore"}
      />
    </div>
  );
};

export default ConfigScreen;
