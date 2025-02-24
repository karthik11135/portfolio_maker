import React from 'react'
import ProfileInfo from './ProfileInfo'
import SocialInfo from './SocialInfo'
import ProjectsInfo from './ProjectsInfo'
import ThemeInfo from './ThemeInfo'
import Publish from './Publish'

const Form = () => {
  return (
    <div className=''>
        <ProfileInfo />
        <ThemeInfo />
        <SocialInfo />
        <ProjectsInfo />
        <Publish />
    </div>
  )
}

export default Form