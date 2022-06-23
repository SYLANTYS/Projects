import React from 'react'
import {MdLocationOn} from 'react-icons/md'

export default function Main(props) {
  const linkPro = props.imageUrl.indexOf("http") === -1 ? 
  `../images/${props.imageUrl}` : props.imageUrl

  return ( 
    <section className="main">
      <img src={linkPro} className="main--snap" />
      <div className='main--info'>
        <div className='main--items'>
          <MdLocationOn color='#F55A5A' size="12px"/>
          <p className='main--location'>{props.location}</p>
          <a href={props.googleMapsUrl} className='main--link'>View on Google Maps</a>
        </div>
        <h2 className='main--title'>{props.title}</h2>
        <h4 className='main--dates'>{props.startDate} - {props.endDate}</h4>
        <p className='main--description'>{props.description}</p>
      </div>
    </section>
  )
}
