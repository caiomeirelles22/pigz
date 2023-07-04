import React from 'react'

export default function Plano1() {
    return (
        <div className='plano'>
            <h2 className='plano__titulo'>Pigz</h2>
            <h3 className='plano__sub-titulo'>Tudo o que você precisa</h3>
            <ul className='plano__itens'>
                <li className='plano__itens__item'>Pigz Marketplace</li>
                <li className='plano__itens__item'>Página exclusiva</li>
                <li className='plano__itens__item'>Pigz Gestão Desktop e Mobile</li>
                <li className='plano__itens__item'>Gestão de entregadores</li>
                <li className='plano__itens__item'>Vias de impressão personalizáveis</li>
            </ul>
            <h2 className='planos__preço'>R$199/mês</h2>
            <a className='plano__button'>Já sou parceiro</a>
        </div>
    )
}
