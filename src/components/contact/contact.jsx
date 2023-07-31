import ContactForm from '../../features/contactForm/contactForm'
import linkedInIcon from '../../assets/linkedin-logo.png'
import gitHubIcon from '../../assets/github-logo.png'

const Contact = () => {
  return (
    <section id='contact'>
      <ContactForm />
      <footer>
        <div className='socialLinkContainer'>
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
      </footer>
    </section>
  )
}

export default Contact
