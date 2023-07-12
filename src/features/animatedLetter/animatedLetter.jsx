import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import './animatedLetter.scss'

const AnimatedLetter = ({ char, className }) => {
  const letterRef = useRef(null)
  const letterTween = useRef(null)

  const onMouseEnter = ({ target }) => {
    if (letterTween.current.totalProgress() === 0) {
      letterTween.current.play()
    } else if (letterTween.current.totalProgress() === 1) {
      letterTween.current.reverse()
    }
  }

  useEffect(() => {
    const context = gsap.context(() => {
      letterTween.current = gsap.to(letterRef.current, {
        color: 'red',
        transform: 'scale(-1, 1)',
        repeat: 1,
        ease: 'back',
        yoyo: true,
        reversed: true,
      })
    })
    return () => context.revert()
  })

  return (
    <span ref={letterRef} className={className} onMouseOver={onMouseEnter}>
      {char}
    </span>
  )
}

export default AnimatedLetter
