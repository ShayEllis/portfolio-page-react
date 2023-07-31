import { useRef, useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { Link } from 'react-router-dom'
import Skills from '../Skills/skills'
import Carousel from '../../features/carousel/carousel'
import AnimatedLetter from '../../features/animatedLetter/animatedLetter'
const About = () => {
  const letterTimeline = useRef()

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      letterTimeline.current = gsap.timeline()
    })
    return ctx.revert()
  })

  return (
    <section id='about'>
      <h2>
        {'About'.split('').map((letter, idx) => {
          return <AnimatedLetter key={idx} char={letter} className='letter' />
        })}
      </h2>
      <div className='aboutContainer'>
        <p>
          I am a JavaScript based in central Oregon. I have completed training
          from freeCodeCamp and I am currently enrolled in a the Full-Stack
          Engineering course at Codecademy. During this training I have gained
          experience working on small projects and have an appreciation for
          writing clean and maintainable code.
        </p>
      </div>
      <section id='projects'>
        <h2>
          {'Projects'.split('').map((letter, idx) => {
            return <AnimatedLetter key={idx} char={letter} className='letter' />
          })}
        </h2>
        <Carousel />
      </section>
      <section id='skills'>
        <h2>
          {'Skills'.split('').map((letter, idx) => {
            return <AnimatedLetter key={idx} char={letter} className='letter' />
          })}
        </h2>
        <Skills />
      </section>
      <footer>
        <div className='contactLinkContainer'>
          <Link to='/contact' id='contactLink'>
            Contact
          </Link>
        </div>
      </footer>
    </section>
  )
}

export default About
