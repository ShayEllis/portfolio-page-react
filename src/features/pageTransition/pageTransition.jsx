import { useRef } from 'react'
import { SwitchTransition, Transition } from 'react-transition-group'
import { useLocation } from 'react-router-dom'
import { gsap } from 'gsap'

const PageTransiton = ({ children }) => {
  const location = useLocation()
  const pageNode = useRef()

  return (
    <SwitchTransition>
      <Transition
        key={location.pathname}
        nodeRef={pageNode}
        timeout={200}
        onEnter={() => {
          gsap.set(pageNode.current.firstChild, {
            autoAlpha: 0,
            filter: 'blur(3rem)',
            scale: 0.8,
          })
          gsap.timeline().to(pageNode.current.firstChild, {
            autoAlpha: 1,
            filter: 'blur(0rem)',
            scale: 1,
            duration: 0.4,
          })
        }}
        onExit={() => {
          gsap.timeline().to(pageNode.current.firstChild, {
            autoAlpha: 0,
            filter: 'blur(3rem)',
            scale: 0.8,
            duration: 0.4,
          })
        }}>
        <div ref={pageNode} id='pageTransitionContainer'>
          {children}
        </div>
      </Transition>
    </SwitchTransition>
  )
}

export default PageTransiton
