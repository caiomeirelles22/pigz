import React, { useState } from 'react'
import './queroVender.css'

export default function QueroVender() {

    return (
        <form className='form'>
          <h2 className='form__titulo'>Quero vender no Pigz</h2>
          <h3 className='form__sub-titulo'>Dê o primeiro passo para aumentar suas vendas</h3>
          <label className='form__labels' htmlFor="nome">Nome:</label>
          <input className='form__inputs' type="text" id="nome" name="nome" placeholder='Leonercio Goesfeeld' required /><br /><br />
          <label className='form__labels' htmlFor="email">Email:</label>
          <input className='form__inputs' type="email" id="email" name="email" placeholder='leonercio.goesfeeld@email.com' required /><br /><br />
          <label className='form__labels' htmlFor="telefone">Telefone:</label>
          <input className='form__inputs' type="tel" id="telefone" name="telefone" required /><br /><br />

          <label htmlFor='Continuar' className='aviso'>Ao continuar, aceito que a Pigz entre em contato comigo por telefone, e-mail ou WhatsApp.</label>          
          <input  type="submit" value="Continuar" className='submit' />
        </form>
      );
    };

