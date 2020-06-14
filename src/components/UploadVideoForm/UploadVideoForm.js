import React, { Component } from 'react'
import './UploadVideoForm.css';
import { Button, Input } from '../Utils/Utils'

export default class UploadVideoForm extends Component {
  render() {
    return (
      <form
        className='UploadForm'
      >
        <div className='form_input'>
          <label htmlFor='UploadForm__title'>
            Title 
          </label>
          <Input
            required
            name='title'
            type='text'
            id='UploadForm__title'>
          </Input>
        </div>
        <div className='form_input'>
          <label htmlFor='UploadForm__link'>
            Link 
          </label>
          <Input
            required
            name='link'
            type='url'
            id='UploadForm__link'>
          </Input>
        </div>
        <div className='form_input'>
          <label htmlFor='UploadForm__description'>
            Description 
          </label>
          <textarea
            required
            name='description'
            type='text'
            id='UploadForm__description'>
          </textarea>
        </div>
        <Button type='submit' className='submit_btn'>
          Upload
        </Button>
      </form>
    )
  }
}