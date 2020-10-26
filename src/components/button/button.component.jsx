import React from 'react'

import './button.styles.css';

const Button = ({action, text, style}) => {
  return (
    <div className="send-button" role="button" style={style} onClick={action}>
      {text}
    </div>
  )
}

export default Button;