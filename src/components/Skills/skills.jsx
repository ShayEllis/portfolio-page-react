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
import { Tooltip } from '@mui/material'

const Skills = () => {
  return (
    <div className='skillIconsConatiner'>
      <Tooltip
        title={<h3 style={{ fontSize: '1.2rem' }}>HTML5</h3>}
        followCursor>
        <div className='skillIcon'>
          <BiLogoHtml5 />
        </div>
      </Tooltip>
      <Tooltip
        title={<h3 style={{ fontSize: '1.2rem' }}>JavaScript</h3>}
        followCursor>
        <div className='skillIcon'>
          <BiLogoJavascript />
        </div>
      </Tooltip>
      <Tooltip
        title={<h3 style={{ fontSize: '1.2rem' }}>CSS3</h3>}
        followCursor>
        <div className='skillIcon'>
          <BiLogoCss3 />
        </div>
      </Tooltip>
      <Tooltip
        title={<h3 style={{ fontSize: '1.2rem' }}>PostreSQL</h3>}
        followCursor>
        <div className='skillIcon'>
          <BiLogoPostgresql />
        </div>
      </Tooltip>
      <Tooltip
        title={<h3 style={{ fontSize: '1.2rem' }}>React</h3>}
        followCursor>
        <div className='skillIcon'>
          <BiLogoReact />
        </div>
      </Tooltip>
      <Tooltip
        title={<h3 style={{ fontSize: '1.2rem' }}>Redux</h3>}
        followCursor>
        <div className='skillIcon'>
          <BiLogoRedux />
        </div>
      </Tooltip>
      <Tooltip
        title={<h3 style={{ fontSize: '1.2rem' }}>Node.js</h3>}
        followCursor>
        <div className='skillIcon'>
          <BiLogoNodejs />
        </div>
      </Tooltip>
      <Tooltip
        title={<h3 style={{ fontSize: '1.2rem' }}>React Router</h3>}
        followCursor>
        <div className='skillIcon'>
          <SiReactrouter />
        </div>
      </Tooltip>
      <Tooltip
        title={<h3 style={{ fontSize: '1.2rem' }}>Jest</h3>}
        followCursor>
        <div className='skillIcon'>
          <SiJest />
        </div>
      </Tooltip>
    </div>
  )
}

export default Skills
