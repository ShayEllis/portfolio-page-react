import myPicture from '../../assets/my-picture.jpg'
import linkedInIcon from '../../assets/linkedin-logo.png'
import gitHubIcon from '../../assets/github-logo.png'

const About = () => {
  return (
    <section id='about'>
      <h2>About</h2>
      <div className='about-container'>
        <p>
          My name is Shay Ellis. I am a web developer based in central Oregon. I
          am currently enrolled in a the Full-Stack Engineering course at
          codecademy.
        </p>
        <div className='picture-container'>
          <img
            src={myPicture}
            alt='Professional portrait of Shay Ellis'
            className='my-picture'
          />
        </div>
        <div className='social-link-container'>
          <a href='https://github.com/ShayEllis' target='_blank'>
            <img src={gitHubIcon} />
          </a>
          <a href='https://www.linkedin.com/in/shayellis815/' target='_blank'>
            <img src={linkedInIcon} />
          </a>
        </div>
        <section id='projects'>
          <h2>Projects</h2>
          <div className='projects-container'>
            <div className='project'></div>
            <div className='project'></div>
            <div className='project'></div>
            <div className='project'></div>
          </div>
        </section>
      </div>
    </section>
  )
}

export default About
