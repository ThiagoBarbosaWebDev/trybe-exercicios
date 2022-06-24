import React from "react";
import Input from "./Input";
import ComboBox from "./ComboBox";

class PersonalInfo extends React.Component {
  render() {
    const { onChange, state } = this.props

    const estados = [
      "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES",
      "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR",
      "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC",
      "SP", "SE", "TO"]

    const nameProps = {
      labelText:'Nome: ', 
      inputId:'form-nome', 
      inputType:'text', 
      placeHolder:'Nome Completo', 
      inputName:'nome', 
      // otherProps
      required: 'required', 
      onChange,
      state
    }

    const emailProps = {
      labelText:'Email: ', 
      inputId:'form-email', 
      inputType:'email', 
      placeHolder:'Email', 
      inputName:'email', 
      // otherProps
      required: 'required', 
      onChange,
      state
    }

    const cpfProps = {
      labelText:'CPF: ', 
      inputId:'form-cpf', 
      inputType:'text', 
      placeHolder:'000.000.000-00', 
      inputName:'cpf', 
      // otherProps
      required: 'required', 
      onChange,
      state
    }

    const enderecoProps = {
      labelText:'Endereço: ', 
      inputId:'form-address', 
      inputType:'text', 
      placeHolder:'Endereço', 
      inputName:'address', 
      // otherProps
      required: 'required', 
      onChange,
      state
    }

    const cidadeProps = {
      labelText:'Cidade: ', 
      inputId:'form-city', 
      inputType:'text', 
      placeHolder:'Cidade', 
      inputName:'cidade', 
      // otherProps
      required: 'required', 
      onChange,
      state
    }

    const radioResidenciaAptProps = {
      labelText:'Apartamento: ', 
      inputId:'form-radio-apt', 
      inputType:'radio', 
      inputName:'residence', 
      // otherProps
      required: 'required', 
      value: 'Apartamento',
      onChange
    }

    const radioResidenciaCasaProps = {
      labelText:'Casa: ', 
      inputId:'form-radio-casa', 
      inputType:'radio', 
      inputName:'residence', 
      // otherProps
      required: 'required', 
      value: 'Casa',
      onChange
    }

    return (
      <fieldset className="form-dados-pessoais">
        <legend> Dados Pessoais </legend>
        <Input {...nameProps}/>
        <Input {...emailProps}/>
        <Input {...cpfProps}/>
        <Input {...enderecoProps}/>
        <Input {...cidadeProps}/>
        <ComboBox data={estados} onChange={onChange}/>
        <fieldset className="residencia-wrapper">
          <legend> Residência </legend>
          <Input {...radioResidenciaAptProps} state={state}/>
          <Input {...radioResidenciaCasaProps} state={state}/>
        </fieldset>
      </fieldset>
    )
  }
}

export default PersonalInfo;