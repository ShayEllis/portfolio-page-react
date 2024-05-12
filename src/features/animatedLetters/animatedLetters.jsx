import { useEffect, useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import AnimatedLetter from '../animatedLetter/animatedLetter'

const AnimatedLetters = ({ string, timelineRef, hover }) => {
  const animatedLettersContainer = useRef(null)

  useEffect(() => {
    const context = gsap.context(
      (self) => {
        const letters = self.selector('.animatedLetter')
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
      {hover
        ? string.split('').map((letter, idx) => {
            if (letter !== ' ') {
              return <AnimatedLetter key={idx} char={letter} />
            }
            return ' '
          })
        : string}
    </span>
  )
}

export default AnimatedLetters
