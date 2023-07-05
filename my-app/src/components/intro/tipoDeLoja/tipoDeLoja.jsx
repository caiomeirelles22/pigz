import React from 'react'
import './tipoDeLoja.css'

export default function TipoDeLoja() {
    return (
        <form className='form'>
          <h2 className='form__titulo'>Me conta um pouco sobre a sua loja</h2>
         
          <label className='form__labels' htmlFor="nome">Nome da loja:</label>
          <input className='form__inputs' type="text" id="nome" name="nome" placeholder='Leonercio Goesfeeld' required /><br /><br />
          <label className='form__labels' htmlFor="cnpj">Cnpj:</label>
          <input className='form__inputs' type="text" id="cnpj" name="cnpj" placeholder='leonercio.goesfeeld@cnpj.com' required /><br /><br />
          <label className='form__labels' htmlFor="tipo-de">tipo de loja:</label>
          <input className='form__inputs' placeholder='varejista, atacadista...' type="tel" id="tipo-de" name="tipo-de" required /><br /><br />

          <input type="submit" value="Concluir" className='submit' />
        </form>
      );
    };