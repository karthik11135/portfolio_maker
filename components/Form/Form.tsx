import React from 'react'
import FormField from './FormField'
import ProfileInfo from './ProfileInfo'
import SocialInfo from './SocialInfo'
import ProjectsInfo from './ProjectsInfo'

const Form = () => {
  return (
    <div className=''>
        <ProfileInfo />
        <SocialInfo />
        <ProjectsInfo />
    </div>
  )
}

export default Form