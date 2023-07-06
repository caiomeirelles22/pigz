import React, { useEffect, useState } from 'react'
import Textual from './textual/textual'
import './index.css'
import QueroVender from './queroVender/queroVender'
import OndeFica from './ondeFica/ondeFica'
import TipoDeLoja from './tipoDeLoja/tipoDeLoja'


export default function Intro() {

  return (
    <div className='intro'>
        <Textual/>
         <QueroVender/>
        {/* <OndeFica/>
        <TipoDeLoja/>  */}
    </div>
  )
}
