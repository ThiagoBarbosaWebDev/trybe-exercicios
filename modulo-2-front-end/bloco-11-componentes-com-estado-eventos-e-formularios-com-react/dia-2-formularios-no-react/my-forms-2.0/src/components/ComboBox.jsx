import React from 'react';
import Input from './Input';

class ComboBox extends React.Component {
  render() {
    const { data, onChange } = this.props;
    return (
      <div>
        <label>Estado: </label>
        <select
          id='form-state'
          name='state'
          required
          onChange={onChange}
        >
          {data.map((estado) => <option key={estado} name='state' value={estado}>{estado}</option>)}
        </select>
      </div>
    )
  }
}

export default ComboBox;
