import React from 'react';

class TextArea extends React.Component {
  render() {
   const { labelText, inputId, inputType, placeHolder, inputName, state, ...otherProps } = this.props
   const valueAttr = state ? state[inputName] : '';

   if (labelText) { 
    return (
      <div className='input-wrapper'>
        <label htmlFor={inputId}>{labelText} {inputType === 'radio' ? null : <br/>}
          <textarea  
            id={inputId}
            type={inputType}
            placeholder={placeHolder}
            name={inputName}
            value={valueAttr}
            {...otherProps}
          />
        </label>
      </div>
    )} else {
      return (
        <div className='input-wrapper'>
          <textarea  
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

export default TextArea;
  