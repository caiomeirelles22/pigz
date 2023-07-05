import React, { useState } from 'react';
import './slide.css'
import SlideMark from './serviços/marke/marke.jsx';
import SlideGestao from './serviços/gestao/gestao';
import SlideEntregadores from './serviços/entregadores/entregadores';
import SlidePagamento from './serviços/pagamento/pagamento';

const ComponenteSlide = () => {
  const [componenteAtual, setComponenteAtual] = useState(<SlideMark/>);

  const trocarImagem = (novoComponente) => {
    setComponenteAtual(novoComponente);
  };

  return (
    <div className='teste'>
      <div className="barrinhas">
        <div className='barrinha' onClick={() => trocarImagem(<SlideMark/>)}></div>
        <div className='barrinha' onClick={() => trocarImagem(<SlideGestao/>)}></div>
        <div className='barrinha' onClick={() => trocarImagem(<SlideEntregadores/>)}></div>
        <div className='barrinha' onClick={() => trocarImagem(<SlidePagamento/>)}></div>
      </div>
      
      <div className="componente-atual">{componenteAtual}</div> 
    </div>
  );
};

export default ComponenteSlide;
