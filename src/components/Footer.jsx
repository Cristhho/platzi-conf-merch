import React from 'react'

import '../styles/components/Footer.css'

const Footer = () => {
  const date = new Date()
  const year = date.getFullYear()
  return (
    <div className='Footer'>
      <p className='Footer-title'>PlatziConf Merch</p>
      <p className='Footer-copy'>
        &copy;
        {year}
        {' '}
        - Derechos reservados
      </p>
    </div>
  )
}

export default Footer
