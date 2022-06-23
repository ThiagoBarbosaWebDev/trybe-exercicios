import React from 'react';
import Input from './Input';
import TextArea from './TextArea';

class JobHistory extends React.Component {
  render() {
    return (
      <fieldset className='form-job-history'>
        <legend>Job history</legend>
        <TextArea 
          labelText='Resumo do currículo: '
          inputName='cvResume'
          {...{ required: true, rows: 5,} }
        />
        <TextArea 
          labelText='Cargo: '
          inputName='cargo'
          {...{ required: true , rows: 5,} }
        />
        <Input
          labelText='Descrição do cargo: '
          {...{ required: true }}
        />
      </fieldset>
    )
  }
}

export default JobHistory;
