import React, { Component } from 'react'
import './RegistrationPage.css';

// components
import { Section } from '../../components/Utils/Utils'
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm'

export default class RegistrationPage extends Component {
  render() {
    return (
      <Section className='RegistrationPage'>
        <h2>Register</h2>
        <RegistrationForm />
      </Section>
    )
  }
}