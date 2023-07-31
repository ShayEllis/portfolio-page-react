import { useRef, useEffect, useLayoutEffect, useState } from 'react'
import { gsap } from 'gsap'
import { Tooltip } from '@mui/material'
import jammingProjectIcon from '../../assets/projectScreenshots/jammingProjectScreenshot.jpeg'
import redditProjectIcon from '../../assets/projectScreenshots/redditClientProjectScreenshot.jpeg'
import adoptAPetProjectIcon from '../../assets/projectScreenshots/adoptAPetProject.jpeg'
import articlesProjectIcon from '../../assets/projectScreenshots/articlesProject.jpeg'
import flashCardsProjectIcon from '../../assets/projectScreenshots/flashCardsProject.jpeg'

const Carousel = () => {
  const [windowWidth, setWindowWidth] = useState(null)
  const scene = useRef()
  const projectsCarousel = useRef()
  // Project information for carousel cells
  const projectInformation = {
    jamming: {
      url: 'https://sae-jammming-project-react.netlify.app',
      icon: jammingProjectIcon,
      tooltip:
        'A web app that creates Spotify playlists. Hosted on Netlify',
    },
    redditClient: {
      url: 'https://sae-reddit-client-project.netlify.app',
      icon: redditProjectIcon,
      tooltip:
        'A client that fetches reddit content. Hosted on Netlify',
    },
    adoptAPet: {
      url: 'https://github.com/ShayEllis/adopt-a-pet-starter-vite',
      icon: adoptAPetProjectIcon,
      tooltip: 'A Codecademy project using React Router v6',
    },
    articles: {
      url: 'https://github.com/ShayEllis/react-router-lesson-vite',
      icon: articlesProjectIcon,
      tooltip: 'A Codecademy project using React Router v6',
    },
    flashCards: {
      url: 'https://github.com/ShayEllis/flashcards-vite-react-redux',
      icon: flashCardsProjectIcon,
      tooltip: 'A Codecademy project using Redux',
    },
  }

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
        rotationY: '-=360',
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
        {Object.keys(projectInformation).map((project) => {
          return (
            <div className='projectCell' key={project}>
              <Tooltip
                title={
                  <h3 style={{ fontSize: '1.2rem' }}>
                    {projectInformation[project].tooltip}
                  </h3>
                }
                followCursor>
                <a href={projectInformation[project].url} target='_blank'>
                  <img
                    src={projectInformation[project].icon}
                    alt={`${project} project home page screenshot`}
                  />
                </a>
              </Tooltip>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Carousel
