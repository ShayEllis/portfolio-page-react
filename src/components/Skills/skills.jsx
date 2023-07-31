import {
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoCss3,
  BiLogoPostgresql,
  BiLogoReact,
  BiLogoRedux,
  BiLogoNodejs,
} from 'react-icons/bi'
import { SiReactrouter, SiJest } from 'react-icons/si'

const Skills = () => {
  return (
    <div className='skillIconsConatiner'>
      <BiLogoJavascript className='skillIcon' />
      <BiLogoHtml5 className='skillIcon' />
      <BiLogoCss3 className='skillIcon' />
      <BiLogoPostgresql className='skillIcon' />
      <BiLogoReact className='skillIcon' />
      <BiLogoRedux className='skillIcon' />
      <BiLogoNodejs className='skillIcon' />
      <SiReactrouter className='skillIcon' />
      <SiJest className='skillIcon' />
    </div>
  )
}

export default Skills
