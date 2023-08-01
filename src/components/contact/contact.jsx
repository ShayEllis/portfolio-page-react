import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
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
      <footer>
        <div className='socialLinkContainer'>
          <a
            href='https://github.com/ShayEllis'
            target='_blank'
            className='socialLink'>
            <img src={gitHubIcon} />
          </a>
          <a
            href='https://www.linkedin.com/in/shayellis815/'
            target='_blank'
            className='socialLink'>
            <img src={linkedInIcon} />
          </a>
        </div>
      </footer>
    </section>
  )
}

export default Contact
