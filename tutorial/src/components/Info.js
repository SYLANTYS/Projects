import React from 'react'
import Patrick from '../images/fishin.avif'
import { MdMail } from 'react-icons/md'
import { FaLinkedinIn } from 'react-icons/fa'

export default function Info() {
  return (
    <div>
      <img src={Patrick} alt="pat"/>
      <h1 className='info--name'>Patrick Sylantys</h1>
      <h3 className='info--title'>Web3 Developer</h3>
      <a 
        href='javascript:https://typedream.site/patricksylantys'
        target="_blank"
        rel="noreferrer"
        className='info--website'>
        typedream.site/patricksylantys
      </a>
      <div className='info--buttons'>
        <a 
          href='mailto:2017catch.21@gmail.com'
          target="_blank"
          rel="noreferrer"
          className='info--email_button'><MdMail /> 
          Email
        </a>
        <a 
          href='https://www.linkedin.com/in/patrick-sylantys-5668a8215/'
          target="_blank"
          rel="noreferrer"
          className='info--linkedin_button'><FaLinkedinIn /> LinkedIn
        </a>
      </div>
    </div>
  )
}
