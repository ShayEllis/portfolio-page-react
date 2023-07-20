import { useEffect, useState } from 'react'
import { Form } from 'react-router-dom'

const ContactForm = () => {
  const [nameInputSelected, setNameInputSelected] = useState(false)
  const [emailInputSelected, setEmailInputSelected] = useState(false)
  const [textareaInputSelected, setTextareaInputSelected] = useState(false)

  useEffect(() => {

  }, [])

  const sendEmail = async (event) => {

    event.preventDefault()
    const data = {
      service_id: 'service_c3cmdx7',
      template_id: 'template_0whkxbj',
      user_id: 'DD77Vmqh7zERaDc9f',
      template_params: {
        from_name: event.target.name.value,
        reply_to: event.target.email.value,
        message: event.target.message.value,
      },
    }

    try {
      const response = await fetch(
        'https://api.emailjs.com/api/v1.0/email/send',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }
      )
      if (!response.ok) {
        const textResponse = await response.text()
        throw new Error(`Email could not be sent, response from server: ${textResponse}`)
      }
    } catch (error) {
      console.error(error)
    }
  }

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
    <form action='#' className='contactForm' onSubmit={sendEmail}>
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
    </form>
  )
}

export default ContactForm
