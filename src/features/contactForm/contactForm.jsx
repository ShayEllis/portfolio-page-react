import { useReducer } from 'react'
import { ImSpinner9 } from 'react-icons/im'
import contactFormReducer, { initialState } from './contactFormReducer'

const ContactForm = () => {
  const [state, dispatch] = useReducer(contactFormReducer, initialState)

  const sendEmail = async (event) => {
    event.preventDefault()
    dispatch({
      type: 'changeFormStatus',
      payload: { status: 'pending', error: null },
    })
    const data = {
      service_id: 'service_c3cmdx7',
      template_id: 'template_0whkxbj',
      user_id: 'DD77Vmqh7zERaDc9f',
      template_params: {
        from_name: state.name,
        reply_to: state.email,
        message: state.message,
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
        throw new Error(
          `Email could not be sent, response from server: ${textResponse}`
        )
      }
      dispatch({
        type: 'changeFormStatus',
        payload: { status: 'succeeded', error: '' },
      })
    } catch (error) {
      dispatch({
        type: 'changeFormStatus',
        payload: { status: 'failed', error: error.message },
      })
    }
  }

  return (
    <form className='contactForm' onSubmit={sendEmail}>
      {state.formStatus.status === 'idle' && (
        <>
          <div className='inputContainer'>
            <label
              htmlFor='name'
              className={state.name ? 'activeInput' : undefined}>
              Name
            </label>
            <input
              type='text'
              name='name'
              id='name'
              value={state.name}
              onChange={({ target: { name, value } }) =>
                dispatch({ type: 'changeInput', payload: { name, value } })
              }
              required
              maxLength={100}
            />
            <div
              className='inputColoredLine'
              style={state.name ? { transform: 'scaleX(1)' } : undefined}></div>
          </div>
          <div className='inputContainer'>
            <label
              htmlFor='email'
              className={state.email ? 'activeInput' : undefined}>
              Email
            </label>
            <input
              type='email'
              name='email'
              id='email'
              value={state.email}
              onChange={({ target: { name, value } }) =>
                dispatch({ type: 'changeInput', payload: { name, value } })
              }
              required
              maxLength={100}
            />
            <div
              className={'inputColoredLine'}
              style={
                state.email ? { transform: 'scaleX(1)' } : undefined
              }></div>
          </div>
          <div className='inputContainer'>
            <label
              htmlFor='message'
              className={state.message ? 'activeInput' : undefined}>
              Message
            </label>
            <textarea
              name='message'
              id='message'
              value={state.message}
              onChange={({ target: { name, value } }) =>
                dispatch({ type: 'changeInput', payload: { name, value } })
              }
              required
              minLength='10'
              maxLength='500'></textarea>
            <div
              className={'textareaColoredLine'}
              style={
                state.message ? { transform: 'scaleX(1)' } : undefined
              }></div>
          </div>
          <button type='submit' className='button'>
            Submit
          </button>
        </>
      )}
      {state.formStatus.status === 'pending' && (
        <ImSpinner9 className='spinner' />
      )}
      {state.formStatus.status === 'failed' && (
        <>
          <h3>Failed to send</h3>
          <p>{state.formStatus.error}</p>
          <input
            type='submit'
            value='Retry'
            className='button'
            onClick={() => dispatch({ type: 'retryFormSubmit' })}
          />
        </>
      )}
      {state.formStatus.status === 'succeeded' && (
        <>
          <h3>Sent successfully!</h3>
          <input
            type='submit'
            value='Reset'
            className='button'
            onClick={() => dispatch({ type: 'resetForm' })}
          />
        </>
      )}
    </form>
  )
}

export default ContactForm
