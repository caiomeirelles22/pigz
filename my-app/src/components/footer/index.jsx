import React from 'react'
import './index.css'

export default function Footer() {
    return (
        <div>
            <div className='footer-1'>
                <p >Fale com a Pigz</p> <img src='Icon awesome-whatsapp.png' /> <p>95 3224-2603</p>
            </div>
            <div className='footer'>
                <figure>
                    <img className='footer__logo' src='pigz-logotipo-colorido.png'></img>
                    <figcaption className='footer__caption'>Tudo que você precisa.</figcaption>
                </figure>
                <p className='footer__baixe'>Baixe o APP</p>
                <div>
                    <img className='footer__logo__app' src="selo-app-store.png" alt="" />
                    <img className='footer__logo__google' src="selo-google-play.png" alt="" />
                </div>
                <div className='footer__pigz'>
                    <p className='footer__pigz__titulo' >Pigz</p>
                    <p className='footer__pigz__texto' >Sobre o Pigz</p>
                    <p className='footer__pigz__texto' >Portal do Parceiro</p>
                    <p className='footer__pigz__texto' >Quero ser um Pigz Partner</p>
                </div>

                <span className='footer__fale'><img src='icone-fale-conosco.png'></img>Fale conosco </span>
                <p>falecom@pigz.com.br</p>
                <p>95 3224-2603</p>
                <p>Pigz nas redes</p>
                <div>
                    <img src="linkedin-with-circle.png" alt="" />
                    <img src="instagram-with-circle.png" alt="" />
                    <img src="facebook-with-circle.png" alt="" />
                    <img src="youtube-with-circle.png" alt="" />
                </div>
            </div>   </div>

    )
}
