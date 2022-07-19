import React from 'react'

export default function Header(props) {
  return (
    <header className={props.darkMode ? "dark": ""}>
      <img 
        src="./images/troll-face.png" 
        alt="trollface" 
        className='header--image'
      />
      <h2 className='header--title'>Meme Generator</h2>
      <div className='switch'>
        <p>Light</p>
        <div 
          className='switch--outside' 
          onClick={props.toggleDarkMode}
        >
          <div className='switch--circle'></div>
        </div>
        <p>Dark</p>
      </div>
    </header>
  )
}
