import React from 'react'
import Logo from './logo/logo'
import ButtomJaSou from './buttom/buttom'
import './index.css'

export default function Header() {
  return (
    <div className='header'>
        <Logo/>
        <ButtomJaSou/>
    </div>
  )
}
