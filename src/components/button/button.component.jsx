import React from 'react'

import './button.styles.css';

const Button = ({action}) => {
  return (
    <div className="send-button" role="button" onClick={action}>
      add data
    </div>
  )
}

export default Button;