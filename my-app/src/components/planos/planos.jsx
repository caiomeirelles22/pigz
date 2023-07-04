import React from 'react'
import './planos.css'
import Plano1 from './planos/plano1'
import Plano2 from './planos/plano2'

export default function Planos() {
  return (
    <div className='planos'>
        <Plano1/>
        <Plano2/>
    </div>
  )
}
