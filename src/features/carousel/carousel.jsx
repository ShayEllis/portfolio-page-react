import { useRef, useEffect, useLayoutEffect, useState } from 'react'
import { gsap } from 'gsap'

const Carousel = () => {
  const [windowWidth, setWindowWidth] = useState(null)
  const scene = useRef()
  const projectsCarousel = useRef()

  const handleResize = ({ target }) => {
    setWindowWidth(target.innerWidth)
  }

  useLayoutEffect(() => {
    const projectCells = [...projectsCarousel.current.children]
    // Calculate Z postion for carousel
    const translateZ = Math.round(
      scene.current.offsetWidth / 2 / Math.tan(Math.PI / projectCells.length)
    )
    // Calculate cell rotateY position
    const rotateIncrement = 360 / projectCells.length
    // Set carousel Z position
    const ctx = gsap.context(() => {
      gsap.set(projectsCarousel.current, {
        translateZ: -translateZ,
      })
    })
    // Set each cells 3d placement using translateZ and rotateY
    projectCells.forEach((cell, index) => {
      if (index === 0) {
        cell.style.transform = `rotateY(0deg) translateZ(${translateZ}px)`
      } else {
        cell.style.transform = `rotateY(${
          rotateIncrement * index
        }deg) translateZ(${translateZ}px)`
      }
    })
    // Add resize listener to window to rerender carousel dimentions
    window.addEventListener('resize', handleResize)

    return () => {
      ctx.revert()
      window.removeEventListener('resize', handleResize)
    }
  }, [windowWidth])

  useEffect(() => {
    // Use rotateY to rotate the entire carousel
    const ctx = gsap.context(() => {
      gsap.to(projectsCarousel.current, {
        rotationY: '+=360',
        duration: 4 * projectsCarousel.current.children.length,
        ease: 'none',
        repeat: -1,
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <div className='scene' ref={scene}>
      <div className='projectsCarousel' ref={projectsCarousel}>
        <div className='projectCell'>1</div>
        <div className='projectCell'>2</div>
        <div className='projectCell'>3</div>
        <div className='projectCell'>4</div>
        <div className='projectCell'>4</div>
        <div className='projectCell'>4</div>
        <div className='projectCell'>4</div>
      </div>
    </div>
  )
}

export default Carousel
