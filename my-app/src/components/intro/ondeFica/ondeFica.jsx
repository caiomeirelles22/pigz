import React, { useEffect, useState } from 'react'
import '../queroVender/queroVender.css'

export default function OndeFica() {

    return (
        <form className='form'>
            <h2 className='form__titulo'>Onde fica a sua loja?</h2>

            <label className='form__labels' htmlFor="cep">CEP:</label>
            <input className='form__inputs' type="number" id="cep" name="cep" placeholder='00000-00' required /><br /><br />

            <label className='form__labels' htmlFor="estado">estado:</label>
            <select className='form__inputs' name="estado">
                <option value="estado">UF:</option>
                <option value="ac">Acre</option>
                <option value="al">Alagoas</option>
                <option value="am">Amazonas</option>
                <option value="ap">Amapá</option>
                <option value="ba">Bahia</option>
                <option value="ce">Ceará</option>
                <option value="df">Distrito Federal</option>
                <option value="es">Espírito Santo</option>
                <option value="go">Goiás</option>
                <option value="ma">Maranhão</option>
                <option value="mt">Mato Grosso</option>
                <option value="ms">Mato Grosso do Sul</option>
                <option value="mg">Minas Gerais</option>
                <option value="pa">Pará</option>
                <option value="pb">Paraíba</option>
                <option value="pr">Paraná</option>
                <option value="pe">Pernambuco</option>
                <option value="pi">Piauí</option>
                <option value="rj">Rio de Janeiro</option>
                <option value="rn">Rio Grande do Norte</option>
                <option value="ro">Rondônia</option>
                <option value="rs">Rio Grande do Sul</option>
                <option value="rr">Roraima</option>
                <option value="sc">Santa Catarina</option>
                <option value="se">Sergipe</option>
                <option value="sp">São Paulo</option>
                <option value="to">Tocantins</option>
            </select>

            <label className='form__labels' htmlFor="cidades">Cidade:</label>
            <select className='form__inputs' name="cidades">
                <option value="estado">Selecione</option>
                <option value="ac">Campinas</option>
                <option value="al">Campos dos Goytacazes</option>
                <option value="am">Belo Horizonte</option>
                <option value="ap">João Pessoa</option>

            </select>
            <label className='form__labels' htmlFor="endereço">Endereço:</label>
            <input className='form__inputs' placeholder='Avenida Brasil' type="text" id="endereço" name="endereço" required /><br /><br />

            <label className='form__labels' htmlFor="numero">número</label>
            <input className='form__inputs' placeholder='43' type="number" id="numero" name="numero" required /><br /><br />

            <label className='form__labels' htmlFor="complemento">complemento</label>
            <input className='form__inputs' placeholder='Sala 1' type="text" id="complemento" name="complemento" required /><br /><br />

            <input type="submit" value="Próximo" className='submit' />
        </form>
    );
};
