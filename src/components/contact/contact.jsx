import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Tooltip } from '@mui/material'
import AnimatedLetter from '../../features/animatedLetter/animatedLetter'
import ContactForm from '../../features/contactForm/contactForm'
import linkedInIcon from '../../assets/linkedin-logo.png'
import gitHubIcon from '../../assets/github-logo.png'

const Contact = () => {
  const letterTimeline = useRef()

  useEffect(() => {
    const ctx = gsap.context(() => {
      letterTimeline.current = gsap.timeline()
    })
    return ctx.revert()
  })

  return (
    <section id='contact'>
      <h2>
        {'Contact'.split('').map((letter, idx) => {
          return <AnimatedLetter key={idx} char={letter} className='letter' />
        })}
      </h2>
      <ContactForm />
      <footer id='footer'>
        <div className='socialLinkContainer'>
          <Tooltip
            title={<h3 style={{ fontSize: '1.2rem' }}>GitHub</h3>}
            followCursor>
            <a
              href='https://github.com/ShayEllis'
              target='_blank'
              className='socialLink'>
              <img src={gitHubIcon} />
            </a>
          </Tooltip>
          <Tooltip
            title={<h3 style={{ fontSize: '1.2rem' }}>LinkedIn</h3>}
            followCursor>
            <a
              href='https://www.linkedin.com/in/shayellis815/'
              target='_blank'
              className='socialLink'>
              <img src={linkedInIcon} />
            </a>
          </Tooltip>
        </div>
      </footer>
    </section>
  )
}

export default Contact
