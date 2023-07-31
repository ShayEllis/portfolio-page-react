import { useRef, useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import linkedInIcon from '../../assets/linkedin-logo.png'
import gitHubIcon from '../../assets/github-logo.png'
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
          My name is Shay Ellis. I am a web developer based in central Oregon. I
          am currently enrolled in a the Full-Stack Engineering course at
          codecademy.
        </p>
        <div>
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
      </div>
      <section id='projects'>
        <h2>
          {'Projects'.split('').map((letter, idx) => {
            return <AnimatedLetter key={idx} char={letter} className='letter' />
          })}
        </h2>
        <Carousel />
      </section>
    </section>
  )
}

export default About
