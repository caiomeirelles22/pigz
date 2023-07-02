import React from 'react'
import Textual from './textual/textual'
import './index.css'
import QueroVender from './queroVender/queroVender'


export default function Intro() {
  return (
    <div className='intro'>
        <Textual/>
        <QueroVender/>
    </div>
  )
}
