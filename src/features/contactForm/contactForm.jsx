import { useState } from 'react'
import { Form } from 'react-router-dom'

const ContactForm = () => {
  const [nameInputSelected, setNameInputSelected] = useState(false)
  const [emailInputSelected, setEmailInputSelected] = useState(false)

  return (
    <Form action='#' className='contact-form'>
      <h2>Contact</h2>
      <div
        className='input-container'
        onFocus={() => setNameInputSelected(true)}
        onBlur={() => setNameInputSelected(false)}>
        <label
          htmlFor='name'
          className={nameInputSelected ? 'active-input' : undefined}>
          Name
        </label>
        <input type='text' name='name' id='name' required />
        <div
          className='inputColoredLine'
          style={
            nameInputSelected ? { transform: 'scaleX(1)' } : undefined
          }></div>
      </div>
      <div
        className='input-container'
        onFocus={() => setEmailInputSelected(true)}
        onBlur={() => setEmailInputSelected(false)}>
        <label
          htmlFor='email'
          className={emailInputSelected ? 'active-input' : undefined}>
          Email
        </label>
        <input type='email' name='email' id='email' required />
        <div
          className={'inputColoredLine'}
          style={
            emailInputSelected ? { transform: 'scaleX(1)' } : undefined
          }></div>
      </div>
      <button type='submit' className='button'>
        Submit
      </button>
    </Form>
  )
}

export default ContactForm
