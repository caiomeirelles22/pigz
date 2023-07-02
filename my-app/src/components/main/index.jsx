import React from 'react'
import './index.css'
import Mark from './markt/mark'
import AppFacil from './appFacil/appFacil'
import Gestao from './gestao/gestao'
import Impressao from './impressao/impressao'

export default function Main() {
  return (
    <div className='cards'>
        <p className='cards__titulo'>Você tem um novo Pigzdido!</p>
        <Mark/>
        <AppFacil/>
        <Gestao/>
        <Impressao/>
        <span className='cards__preço'>Tudo que você precisa por apenas R$199/mês</span>
        <p className='cards__texto'>Tenha todas as funcionalidades Pigz sem taxa de adesão, sem comissão por cada venda, sem letrinhas miúdas.</p>
    </div>
  )
}
