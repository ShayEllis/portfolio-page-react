import { useState } from 'react'
import { Form } from 'react-router-dom'

const ContactForm = () => {
  const [nameInputSelected, setNameInputSelected] = useState(false)
  const [emailInputSelected, setEmailInputSelected] = useState(false)
  const [textareaInputSelected, setTextareaInputSelected] = useState(false)

  const removeActiveStyle = ({ target }) => {
    if (target.value.length === 0) {
      switch (target.name) {
        case 'name':
          setNameInputSelected(false)
          break
        case 'email':
          setEmailInputSelected(false)
          break
        case 'message':
          setTextareaInputSelected(false)
          break
      }
    }
  }

  return (
    <Form action='#' className='contactForm'>
      <h2>Contact</h2>
      <div
        className='inputContainer'
        onFocus={() => setNameInputSelected(true)}
        onBlur={removeActiveStyle}>
        <label
          htmlFor='name'
          className={nameInputSelected ? 'activeInput' : undefined}>
          Name
        </label>
        <input type='text' name='name' id='name' required maxLength={100} />
        <div
          className='inputColoredLine'
          style={
            nameInputSelected ? { transform: 'scaleX(1)' } : undefined
          }></div>
      </div>
      <div
        className='inputContainer'
        onFocus={() => setEmailInputSelected(true)}
        onBlur={removeActiveStyle}>
        <label
          htmlFor='email'
          className={emailInputSelected ? 'activeInput' : undefined}>
          Email
        </label>
        <input type='email' name='email' id='email' required maxLength={100} />
        <div
          className={'inputColoredLine'}
          style={
            emailInputSelected ? { transform: 'scaleX(1)' } : undefined
          }></div>
      </div>
      <div
        className='inputContainer'
        onFocus={() => setTextareaInputSelected(true)}
        onBlur={removeActiveStyle}>
        <label
          htmlFor='message'
          className={textareaInputSelected ? 'activeInput' : undefined}>
          Message
        </label>
        <textarea
          name='message'
          id='message'
          required
          minLength='10'
          maxLength='500'></textarea>
        <div
          className={'textareaColoredLine'}
          style={
            textareaInputSelected ? { transform: 'scaleX(1)' } : undefined
          }></div>
      </div>
      <button type='submit' className='button'>
        Submit
      </button>
    </Form>
  )
}

export default ContactForm
