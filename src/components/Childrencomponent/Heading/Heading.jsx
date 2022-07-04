import React from 'react'
import './Heading.css'
const Heading = ({title, subtitle}) => {
  return (
    <span className='heading'>
        <h2>{title} <br /> {subtitle}</h2>
    </span>
  )
}

export default Heading