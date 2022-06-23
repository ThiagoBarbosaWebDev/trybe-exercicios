import React from 'react';

class ComboBox extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <div>
        <label>Estado: </label>
        <select
          id='form-state'
          name='state'
          required
        >
          {data.map((estado) => <option key={estado}>{estado}</option>)}
        </select>
      </div>
    )
  }
}

export default ComboBox;
