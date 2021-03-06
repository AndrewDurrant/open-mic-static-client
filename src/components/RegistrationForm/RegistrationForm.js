import React, { Component } from 'react'
import './RegistrationForm.css';

import { Button, Input, Required } from '../Utils/Utils'

export default class RegistrationForm extends Component {
  render() {
    return (
      <form
        className='RegistrationForm'
      >
        <div className='form_input'>
          <label htmlFor='RegistrationForm__full_name'>
            Full name <Required />
          </label>
          <Input
            name='full_name'
            type='text'
            required
            id='RegistrationForm__full_name'>
          </Input>
        </div>
        <div className='form_input'>
          <label htmlFor='RegistrationForm__user_name'>
            User name <Required />
          </label>
          <Input
            name='user_name'
            type='text'
            required
            id='RegistrationForm__user_name'>
          </Input>
        </div>
        <div className='form_input'>
          <label htmlFor='RegistrationForm__password'>
            Password <Required />
          </label>
          <Input
            name='password'
            type='password'
            required
            id='RegistrationForm__password'>
          </Input>
        </div>
        <div className='form_input'>
          <label htmlFor='RegistrationForm__email'>
            Email
          </label>
          <Input
            name='email'
            type='email'
            required
            id='RegistrationForm__email'>
          </Input>
        </div>
        <Button type='submit' className='submit_btn'>
          Register
        </Button>
      </form>
    )
  }
}