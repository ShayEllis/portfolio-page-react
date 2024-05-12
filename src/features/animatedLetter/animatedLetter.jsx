import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const AnimatedLetter = ({ char }) => {
  const letterRef = useRef(null)
  const letterTween = useRef(null)

  useEffect(() => {
    const context = gsap.context(() => {
      letterTween.current = gsap.to(letterRef.current, {
        color:
          getComputedStyle(letterRef.current).color === 'rgb(220, 68, 5)'
            ? '#000'
            : '#dc4405',
        transform: 'scale(-1, 1)',
        repeat: 1,
        ease: 'back',
        yoyo: true,
        reversed: true,
      })
    })
    return () => context.revert()
  })

  const onMouseEnter = () => {
    if (letterTween.current.totalProgress() === 0) {
      letterTween.current.play()
    } else if (letterTween.current.totalProgress() === 1) {
      letterTween.current.reverse()
    }
  }

  return (
    <span ref={letterRef} className='animatedLetter' onMouseOver={onMouseEnter}>
      {char}
    </span>
  )
}

export default AnimatedLetter
