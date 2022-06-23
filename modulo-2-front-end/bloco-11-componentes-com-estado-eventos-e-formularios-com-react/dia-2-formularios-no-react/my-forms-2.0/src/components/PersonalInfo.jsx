import React from "react";
import Input from "./Input";
import ComboBox from "./ComboBox";

class PersonalInfo extends React.Component {
  render() {
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
    }

    const emailProps = {
      labelText:'Email: ', 
      inputId:'form-email', 
      inputType:'email', 
      placeHolder:'Email', 
      inputName:'email', 
      // otherProps
      required: 'required', 
    }

    const cpfProps = {
      labelText:'CPF: ', 
      inputId:'form-cpf', 
      inputType:'text', 
      placeHolder:'CPF 000.000.000-00', 
      inputName:'cpf', 
      // otherProps
      required: 'required', 
    }

    const enderecoProps = {
      labelText:'Endereço: ', 
      inputId:'form-address', 
      inputType:'text', 
      placeHolder:'Endereço', 
      inputName:'endereco', 
      // otherProps
      required: 'required', 
    }

    const cidadeProps = {
      labelText:'Cidade: ', 
      inputId:'form-city', 
      inputType:'text', 
      placeHolder:'Cidade', 
      inputName:'cidade', 
      // otherProps
      required: 'required', 
    }

    const radioResidenciaAptProps = {
      labelText:'Apartamento: ', 
      inputId:'apt', 
      inputType:'radio', 
      inputName:'residencia', 
      // otherProps
      required: 'required', 
    }

    const radioResidenciaCasaProps = {
      labelText:'Casa: ', 
      inputId:'casa', 
      inputType:'radio', 
      inputName:'residencia', 
      // otherProps
      required: 'required', 
    }

    return (
      <fieldset className="form-dados-pessoais">
        <legend> Dados Pessoais </legend>
        <Input {...nameProps}/>
        <Input {...emailProps}/>
        <Input {...cpfProps}/>
        <Input {...enderecoProps}/>
        <Input {...cidadeProps}/>
        <ComboBox data={estados}/>
        <fieldset className="residencia-wrapper">
          <legend> Residência </legend>
          <Input {...radioResidenciaAptProps}/>
          <Input {...radioResidenciaCasaProps}/>
        </fieldset>
      </fieldset>
    )
  }
}

export default PersonalInfo;