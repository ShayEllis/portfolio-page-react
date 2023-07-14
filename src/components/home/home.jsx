import './home.scss'
import { gsap } from 'gsap'
import { useEffect, useRef, useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../../features/animatedLetters/animatedLetters'

const Home = () => {
  const headingContainer = useRef(null)
  const aboutLinkContainer = useRef(null)
  // Main timeline for home page animations and animations in child components
  const timeline = useRef(null)
  // Strings that will be passed down to the AnimatedLetters components
  const headingText = [
    'Hi! My name is ',
    'Shay Ellis',
    "I'm a JavaScript developer",
  ]

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      timeline.current = gsap.timeline()
    })
    return () => ctx.revert()
  }, [])

  useEffect(() => {
    const context = gsap.context(() => {
      timeline.current.to(headingContainer.current, {
        scale: 1.25,
        duration: 1,
        ease: 'bounce',
      })
      timeline.current
        .to(aboutLinkContainer.current, {
          duration: 1,
          opacity: 1,
        })
        .to(aboutLinkContainer.current, {
          duration: 0.5,
          opacity: 1,
          scale: 1.25,
          repeat: -1,
          yoyo: true,
        })
    }, [headingContainer.current])
    return () => context.revert()
  }, [])

  return (
    <>
      <section id='home'>
        <div className='headingContainer' ref={headingContainer}>
          <h1>
            <AnimatedLetters
              string={headingText[0]}
              timelineRef={timeline}
              hover={true}
            />
            <strong>
              <AnimatedLetters
                string={headingText[1]}
                timelineRef={timeline}
                hover={true}
              />
            </strong>
          </h1>
          <h1>
            <AnimatedLetters
              string={headingText[2]}
              timelineRef={timeline}
              hover={true}
            />
          </h1>
        </div>
        <div className='aboutLinkContainer' ref={aboutLinkContainer}>
          <Link to='about' id='aboutLink'>
            About me
          </Link>
        </div>
      </section>
    </>
  )
}

export default Home
