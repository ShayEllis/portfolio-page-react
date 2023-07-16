import { NavLink } from 'react-router-dom'
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
            duration: 0.5,
            autoAlpha: 0,
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
      <h3>
        <NavLink
          to='/'
          className={({ isActive }) =>
            isActive ? 'navbarLinks navbarIconActive' : 'navbarLinks'
          }>
          <div>&#60;Shay Ellis&#47;&#62;</div>
        </NavLink>
      </h3>
      <nav>
        <ul>
          <li>
            <NavLink
              to='/'
              className={({ isActive }) =>
                isActive ? 'navbarLinks navbarLinksActive' : 'navbarLinks'
              }>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='about'
              className={({ isActive }) =>
                isActive ? 'navbarLinks navbarLinksActive' : 'navbarLinks'
              }>
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to='contact'
              className={({ isActive }) =>
                isActive ? 'navbarLinks navbarLinksActive' : 'navbarLinks'
              }>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
