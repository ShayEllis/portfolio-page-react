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
        timeout={400}
        onEnter={() => {
          // gsap.set(pageNode.current, { backgroundColor: 'red' })
          gsap.set(pageNode.current.firstChild, {
            autoAlpha: 0,
            filter: 'blur(3rem)',
            scale: 0.8,
          })
          gsap.timeline().to(pageNode.current.firstChild, {
            autoAlpha: 1,
            filter: 'blur(0rem)',
            scale: 1,
            duration: .5,
          })
          // gsap.set(pageNode.current, {
          //   autoAlpha: 0,
          //   scale: 0.8,
          //   yPercent: 100,
          // })
          // gsap.timeline()
          //   .to(pageNode.current.firstChild, { autoAlpha: 1, duration: 0.25 })
          //   .to(pageNode.current, { autoAlpha: 1, yPercent: 0, duration: 0.25 })
          //   .to(pageNode.current, { scale: 1, duration: 0.25 })
        }}
        onExit={() => {
          // gsap.set(pageNode.current, { backgroundColor: '#404040' })
          gsap.timeline().to(pageNode.current.firstChild, {
            autoAlpha: 0,
            filter: 'blur(3rem)',
            scale: 0.8,
            duration: .5,
          })
          // .to(pageNode.current, {
          //   scale: 0.8,
          //   duration: 0.2,
          // })
          // .to(pageNode.current, {
          //   yPercent: 100,
          //   autoAlpha: 0,
          //   duration: 0.2,
          // })
        }}>
        <div ref={pageNode} id='pageTransitionContainer'>
          {children}
        </div>
      </Transition>
    </SwitchTransition>
  )
}

export default PageTransiton
