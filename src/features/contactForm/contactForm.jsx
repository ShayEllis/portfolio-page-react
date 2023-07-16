import { useState, useRef } from 'react'
import { Form } from 'react-router-dom'

const ContactForm = () => {
  const spanRef = useRef()

  const formElement = useRef()
  const nameInput = useRef()
  const emailInput = useRef()

  useState(() => {
    console.log(spanRef)
    console.log('form', formElement.current)
    console.log('name input', nameInput.current)
    console.log('email input', emailInput.current)
  })

  // let moveLabel = (event) => {
  //   event.target.labels[0].classList.add('active-input')
  //   event.target.parentElement.style.setProperty('--before-scale', 'scaleX(1)')
  // }

  // let resetLabel = (event) => {
  //   if (event.target.value.length === 0) {
  //     event.target.parentElement.style.setProperty('--before-scale', '')
  //     event.target.labels[0].classList.remove('active-input')
  //   }
  // }

  // for (let el of inputContainers) {
  //   el.lastElementChild.addEventListener('focus', moveLabel)
  //   el.lastElementChild.addEventListener('blur', resetLabel)
  // }

  return (
    <>
      <span ref={spanRef}>hi</span>
      <Form action='#' method='get' className='contact-form' ref={formElement}>
        <h2>Contact</h2>
        <div className='input-container' ref={nameInput}>
          <label htmlFor='name'>Name</label>
          <input type='text' name='name' id='name' placeholder=' ' required />
        </div>
        <div className='input-container' ref={emailInput}>
          <label htmlFor='email'>Email</label>
          <input type='text' name='email' id='email' placeholder=' ' required />
        </div>
        <button type='submit' className='button'>
          Submit
        </button>
      </Form>
    </>
  )
}

export default ContactForm
