import React from 'react'
import FormField from './FormField'
import ProfileInfo from './ProfileInfo'
import SocialInfo from './SocialInfo'
import ProjectsInfo from './ProjectsInfo'
import ThemeInfo from './ThemeInfo'

const Form = () => {
  return (
    <div className=''>
        <ProfileInfo />
        <ThemeInfo />
        <SocialInfo />
        <ProjectsInfo />
    </div>
  )
}

export default Form