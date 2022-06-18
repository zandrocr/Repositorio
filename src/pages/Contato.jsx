import '../css/contato.css'
//import icons
import { BsLinkedin } from 'react-icons/bs'
import { FiGithub } from 'react-icons/fi'
//img imports
import oculos from '../img/oculos.svg'

const Contato = () => {

    return (
        <div id='contato' className='background col-12 d-flex justify-content-center'>
            <div className="page col-11 d-flex flex-column justify-content-between align-items-center">
                <div className="col-12 d-flex flex-column align-items-center text-center">
                    <p>Entre em contato comigo!</p>
                </div>
                <div className="col-12 d-flex flex-column align-items-center">
                    <p className='col-sm-8 text-center'>
                        Eu estou sempre de olho no meu e-mail, então pode me mandar um oi, e vamos ver o que de bom podemos criar.
                    </p>
                </div>

                <div className="col-12 d-flex flex-column align-items-center">
                    <a href="mailto:alezandrocosta@live.com" className='d-flex flex-column align-items-center'>
                        <img src={oculos} alt="oculos" className='col-10'/>
                        <button>Diga, oi!</button>
                    </a>
                </div>

                <div className='col-5 col-sm-3 d-flex d-lg-none align-items-center justify-content-between'>
                    <a href="https://github.com/zandrocr" target='_blank' ><FiGithub /></a>
                    <a href="https://www.linkedin.com/in/zandrocr/" target='_blank' ><BsLinkedin /></a>
                </div>

                <div className="back col-12 col-sm-8 d-flex flex-column align-items-center">
                    <p>
                        Projetado e desenvolvido por ZandroCR
                    </p>
                </div>
            </div>
        </div>
     );
}

export default Contato;