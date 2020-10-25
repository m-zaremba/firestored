import React from 'react'

import './button.styles.css';

const Button = ({action, text}) => {
  return (
    <div className="send-button" role="button" onClick={action}>
      {text}
    </div>
  )
}

export default Button;