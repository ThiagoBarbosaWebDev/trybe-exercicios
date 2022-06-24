import React from 'react';
import Input from './Input';
import TextArea from './TextArea';

class JobHistory extends React.Component {
  render() {
    const { onChange, state } = this.props
    return (
      <fieldset className='form-job-history'>
        <legend>Job history</legend>
        <TextArea 
          labelText='Resumo do currículo: '
          inputName='cv'
          {...{ required: true, rows: 5, onChange} }
        />
        <TextArea 
          labelText='Cargo: '
          inputName='job'
          {...{ required: true , rows: 5, onChange} }
        />
        <Input
          labelText='Descrição do cargo: '
          {...{ required: true, onChange, inputName: 'jobDescription' }}
        />
      </fieldset>
    )
  }
}

export default JobHistory;
