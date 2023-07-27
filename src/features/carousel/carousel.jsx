import { useRef, useEffect, useLayoutEffect, useState, useReducer } from 'react'
import { gsap } from 'gsap'

const Carousel = () => {
  const scene = useRef()
  const projectsCarousel = useRef()

  useLayoutEffect(() => {
    const projectCells = [...projectsCarousel.current.children]
    // Calculate Z postion for carousel
    const translateZ = Math.round(
      scene.current.offsetWidth / 2 / Math.tan(Math.PI / projectCells.length)
    )
    console.log('translate', translateZ)
    // Set carousel Z position and use rotateY to rotate carousel
    projectsCarousel.current.style.transform = `translateZ(${-translateZ}px)`
    // Set cell 3d placement
    projectCells.forEach((cell, index) => {
      const rotateIncrement = 360 / projectCells.length
      if (index === 0) {
        cell.style.transform = `rotateY(0deg) translateZ(${translateZ}px)`
      } else {
        cell.style.transform = `rotateY(${
          rotateIncrement * index
        }deg) translateZ(${translateZ}px)`
      }

      const context = gsap.context(() => {
        gsap.to(projectsCarousel.current, {
          rotationY: '+=360',
          duration: 4 * projectCells.length,
          ease: 'none',
          repeat: -1,
        })
      }, [scene.current])

      return () => context.revert()
    })

    const angle = (1 /*selectedIndex*/ / 4) /*cellCount*/ * -360
    console.log('angle', angle)
  }, [])

  return (
    <div className='scene' ref={scene}>
      <div className='projectsCarousel' ref={projectsCarousel}>
        <div className='projectCell'>1</div>
        <div className='projectCell'>2</div>
        <div className='projectCell'>3</div>
        <div className='projectCell'>4</div>
      </div>
    </div>
  )
}

export default Carousel
