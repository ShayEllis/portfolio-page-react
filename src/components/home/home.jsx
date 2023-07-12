import './home.scss'
import { CgScrollV } from 'react-icons/cg'
import { gsap } from 'gsap'
import { useEffect, useRef, useLayoutEffect } from 'react'
import AnimatedLetters from '../../features/animatedLetters/animatedLetters'

const Sidebar = () => {
  const headingContainer = useRef(null)
  const scrollContainer = useRef(null)
  // Main timeline for home page animations and animations in child components
  const timeline = useRef(null)
  // Strings that will be passed down to the AnimatedLetters components
  const headingLineOne = 'Hi! My name is '
  const headingStrongText = 'Shay Ellis'
  const headingLineTwo = "I'm a JavaScript developer"

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
        .to(scrollContainer.current, {
          duration: 1,
          opacity: 1,
        })
        .to(scrollContainer.current, {
          duration: 0.5,
          opacity: 1,
          scale: 1.5,
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
              string={headingLineOne}
              timelineRef={timeline}
              hover={true}
            />
            <strong>
              <AnimatedLetters
                string={headingStrongText}
                timelineRef={timeline}
                hover={true}
              />
            </strong>
          </h1>
          <h1>
            <AnimatedLetters
              string={headingLineTwo}
              timelineRef={timeline}
              hover={true}
            />
          </h1>
        </div>
        <div className='scrollContainer' ref={scrollContainer}>
          <CgScrollV />
        </div>
      </section>
    </>
  )
}

export default Sidebar
