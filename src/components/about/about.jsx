import myPicture from '../../assets/my-picture.jpg'
import linkedInIcon from '../../assets/linkedin-logo.png'
import gitHubIcon from '../../assets/github-logo.png'

const About = () => {
  const translateZ = Math.round(
    42 /* cell size */ / 2 / Math.tan(Math.PI / 4 /* # cells */)
  )
  console.log(translateZ)
  const angle = 1/*selectedIndex*/ / 4/*cellCount*/ * -360
  console.log(angle)

  return (
    <section id='about'>
      <h2>About</h2>
      <div className='aboutContainer'>
        <p>
          My name is Shay Ellis. I am a web developer based in central Oregon. I
          am currently enrolled in a the Full-Stack Engineering course at
          codecademy.
        </p>
        <div className='social-link-container'>
          <a href='https://github.com/ShayEllis' target='_blank'>
            <img src={gitHubIcon} />
          </a>
          <a href='https://www.linkedin.com/in/shayellis815/' target='_blank'>
            <img src={linkedInIcon} />
          </a>
        </div>
      </div>
      <section id='projects'>
        <h2>Projects</h2>
        <div className='scene'>
          <div className='projectsCarousel'>
            <div className='projectCell'>1</div>
            <div className='projectCell'>2</div>
            <div className='projectCell'>3</div>
            <div className='projectCell'>4</div>
          </div>
        </div>
      </section>
    </section>
  )
}

export default About
