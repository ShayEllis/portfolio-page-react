import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import AnimatedLetter from '../animatedLetter/animatedLetter'

const AnimatedLetters = ({ string, timelineRef, hover }) => {
  const animatedLettersContainer = useRef(null)

  useEffect(() => {
    const context = gsap.context(
      (self) => {
        const letters = self.selector('.letter')
        for (let l of letters) {
          timelineRef.current.from(l, {
            opacity: 0,
            scale: 2,
            rotation: 360,
            duration: 0.1,
          })
        }
      },
      [animatedLettersContainer.current]
    )
    return () => context.revert()
  }, [])

  return (
    <span ref={animatedLettersContainer} className='animatedLetters'>
      {string.split('').map((i, idx) => {
        if (i !== ' ') {
          return <AnimatedLetter key={idx} char={i} className='letter' />
        } else {
          return ' '
        }
      })}
    </span>
  )
}

export default AnimatedLetters
