import linkedInIcon from '../../assets/linkedin-logo.png'
import gitHubIcon from '../../assets/github-logo.png'
import Carousel from '../../features/carousel/carousel'

const About = () => {
  return (
    <section id='about'>
      <h2>About</h2>
      <div className='aboutContainer'>
        <p>
          My name is Shay Ellis. I am a web developer based in central Oregon. I
          am currently enrolled in a the Full-Stack Engineering course at
          codecademy.
        </p>
        <div>
          <a
            href='https://github.com/ShayEllis'
            target='_blank'
            className='socialLink'>
            <img src={gitHubIcon} />
          </a>
          <a
            href='https://www.linkedin.com/in/shayellis815/'
            target='_blank'
            className='socialLink'>
            <img src={linkedInIcon} />
          </a>
        </div>
      </div>
      <section id='projects'>
        <h2>Projects</h2>
        <Carousel />
      </section>
    </section>
  )
}

export default About
