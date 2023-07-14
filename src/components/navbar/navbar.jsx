import { Link, NavLink } from 'react-router-dom'
import './navbar.scss'
import { gsap } from 'gsap'
import { useRef, useLayoutEffect } from 'react'

const Navbar = () => {
  const headingContainer = useRef(null)
  const timeline = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(
      (self) => {
        const navLinks = self.selector('.navbarLinks')
        timeline.current = gsap.timeline({
          repeat: 0,
          yoyo: false,
        })
        navLinks.forEach((element) => {
          timeline.current.from(element, {
            color: '#dc4405',
            duration: 0.75,
            opacity: 0,
            x: -window.innerWidth,
            ease: 'sine.out',
            onComplete: () => {
              gsap.set(element, {
                clearProps: '',
              })
            },
          })
        })
      },
      [headingContainer.current]
    )

    return () => ctx.revert()
  }, [])

  return (
    <div ref={headingContainer} id='headingContainer'>
      <h2>
        <Link to='/' className='navbarLinks'>
          <div>&#60;Shay Ellis&#47;&#62;</div>
        </Link>
      </h2>
      <nav>
        <ul>
          <li>
            <NavLink to='/' className='navbarLinks'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='about' className='navbarLinks'>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to='contact' className='navbarLinks'>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
