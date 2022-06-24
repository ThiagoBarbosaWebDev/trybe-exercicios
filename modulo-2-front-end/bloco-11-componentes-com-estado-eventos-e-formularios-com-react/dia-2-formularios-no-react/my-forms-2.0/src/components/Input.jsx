import React from 'react';

class Input extends React.Component {
  render() {
   const { labelText, inputId, inputType, placeHolder, inputName, state, ...otherProps } = this.props
   const currentState = {...state};
   const controlledValue = currentState[inputName];

   if (labelText) { 
    return (
      <div className='input-wrapper'>
        <label htmlFor={inputId}>{labelText} {inputType === 'radio' ? null : <br/>}
          <input
            value={controlledValue}  
            id={inputId}
            type={inputType}
            placeholder={placeHolder}
            name={inputName}
            {...otherProps}
          />
        </label>
      </div>
    )} else {
      return (
        <div className='input-wrapper'>
          <input  
            value={controlledValue}  
            id={inputId}
            type={inputType}
            placeholder={placeHolder}
            name={inputName}
            {...otherProps}
          />
      </div>
    )}
  } 
}

export default Input;
  