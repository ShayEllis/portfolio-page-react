import { Link, NavLink } from 'react-router-dom'
import './sidebar.scss'
import { TbHexagonLetterS } from 'react-icons/tb'
import { gsap } from 'gsap'
import { useEffect, useRef, useLayoutEffect } from 'react'

const Sidebar = () => {
  const heading = useRef()
  const timeline = useRef()

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const headings = self.selector('h2')

      timeline.current = gsap
        .timeline({
          repeat: 1,
          yoyo: false,
        })
        .from('.sIcon', {
          duration: 1,
          scale: 0,
          opacity: 0,
          ease: 'back',
        })
        .to('.sIcon', {
          duration: 1,
          rotation: 360,
        })
        .from(headings[0], {
          duration: 1,
          scale: 0,
          opacity: 0,
          ease: 'back',
        })
        .from(headings[1], {
          duration: 1,
          scale: 0,
          opacity: 0,
          ease: 'back',
        })
    }, heading)

    return () => ctx.revert()
  }, [])

  return (
    <div>
      <Link to='/' ref={heading}>
        <TbHexagonLetterS className='sIcon' alt='S logo' />
        <h2>Shay Ellis</h2>
        <h2>Front-End Developer</h2>
      </Link>
      <nav>
        <ul>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='about'>About</NavLink>
          </li>
          <li>
            <NavLink to='contact'>Contact</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar
