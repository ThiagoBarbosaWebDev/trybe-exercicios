import React from 'react';

class Button extends React.Component {
  render() {
   const { buttonType, buttonClass, buttonText, ...otherProps } = this.props
    return (
        <button  
          type={buttonType}
          className={buttonClass}
          {...otherProps}
        > 
          {buttonText} 
        </button>
    )
  }
}

export default Button;