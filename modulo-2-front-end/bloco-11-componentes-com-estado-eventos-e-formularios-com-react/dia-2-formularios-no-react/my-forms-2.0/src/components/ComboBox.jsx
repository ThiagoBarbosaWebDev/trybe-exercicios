import React from 'react';

class ComboBox extends React.Component {
  render() {
    const { data, onChange, state } = this.props;
    console.log(state);
    return (
      <div>
        <label>Estado: </label>
        <select
          value={state}
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
