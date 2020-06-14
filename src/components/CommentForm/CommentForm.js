import React, { Component } from 'react'
import './CommentForm.css';
import { Button, Textarea } from '../Utils/Utils'

export class CommentForm extends Component { 
  render() {
    return (
      <form
        className='CommentForm'
      >
        <Textarea
          required
          className='text_form'
          aria-label='Type a comment...'
          name='text'
          cols='30'
          rows='3'
          placeholder='Type a comment..'>
        </Textarea>
        <Button type='submit' className='basic_btn'>
          Post
        </Button>
      </form>
    )
  }
}

export default CommentForm
