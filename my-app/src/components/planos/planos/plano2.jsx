import React from 'react'

export default function Plano2() {
    return (
        <div className='plano'>
            <h2 className='plano__titulo'>Pagamento On-line</h2>
            <h3 className='plano__sub-titulo'>Segurança e agilidade</h3>
            <ul className='plano__itens'>
                <li className='plano__itens__item'>Aceite Pix e Cartão de Crédito</li>
                <li className='plano__itens__item'>Antecipação Pix automática</li>
                <li className='plano__itens__item'>Não dependa de maquininha de cartão</li>
                <li className='plano__itens__item'>Segurança para receber pedidos</li>
                <li className='plano__itens__item'>Agilidade para entregar</li>
            </ul>
            <h2 className='planos__preço'>2,99% por transação</h2>
            <a className='plano__button'>Saiba mais</a>
        </div>
    )
}
