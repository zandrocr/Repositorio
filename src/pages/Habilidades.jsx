//import css
import '../css/habilidades.css'
//import icon
import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript, IoLogoSass, IoLogoAngular } from 'react-icons/io'
import { DiJqueryLogo } from 'react-icons/di'
import { BsBootstrapFill } from 'react-icons/bs'
import { FaReact, FaJava } from 'react-icons/fa'
//icons amais
import { SiAdobeillustrator, SiAdobephotoshop, SiVisualstudiocode, SiYarn, SiJson } from 'react-icons/si'
import { FaGitAlt, FaFigma, FaMarkdown, FaUbuntu } from 'react-icons/fa'

const Habilidades = () => {

    return (
        <div id='habilidades' className='background col-12 d-flex justify-content-center'>
            <div className="page col-11 d-flex flex-column justify-content-around">
                <div className='lingua col-12 d-flex flex-column flex-sm-row align-items-center'>
                    <div className='col-12 col-sm-6 d-flex flex-column align-items-start'>
                        <div>
                            <IoLogoHtml5 className='html1'/>
                            <span className='col-12 d-flex'>
                                <div className='col-1'></div>
                                <div className='line html'></div>
                            </span>
                        </div>
                        <div>
                            <IoLogoCss3 className='css1'/>
                            <span className='col-12 d-flex'>
                                <div className='col-1'></div>
                                <div className='line css col-5'></div>
                            </span>
                        </div>
                        <div>
                            <IoLogoJavascript className='js1 col-3'/>
                            <span className='col-6 d-flex'>
                                <div className='col-2'></div>
                                <div className='line js col-5'></div>
                            </span>
                        </div>
                    </div>
                    <div className='col-12 col-sm-6 text-center text-sm-start'>
                        <p>
                            Uma parcela do meu aprendizado foi feito no <span className='textColor'>Curso em Vídeo</span>, alguns outros vídeos do <span className='textColor'>youtube</span> e <span className='textColor'>PDF</span>. Procurando por como melhorar os códigos e agilizar eles
                        </p>
                    </div>
                </div>

                <div className='col-12 d-flex justify-content-end'>
                    <span className='svg col-8 col-sm-5 d-flex justify-content-between'>
                        <SiJson />
                        <SiAdobeillustrator />
                        <FaFigma />
                        <SiAdobephotoshop />
                        <FaMarkdown />
                    </span>
                </div>

                <div className='lingua col-12 d-flex flex-column flex-sm-row align-items-center'>
                    <div className='col-12 col-sm-6 d-flex flex-column align-items-start'>
                        <div>
                            <DiJqueryLogo className='jquery1 col-1'/>
                            <span className='col-12 d-flex'>
                                <div className='col-1'></div>
                                <div className='line jquery'></div>
                            </span>
                        </div>
                        <div>
                            <BsBootstrapFill className='bootstrap1 col-2'/>
                            <span className='col-12 d-flex'>
                                <div className='col-1'></div>
                                <div className='line bootstrap col-5'></div>
                            </span>
                        </div>
                        <div>
                            <FaReact className='react1 col-3'/>
                            <span className='col-6 d-flex'>
                                <div className='col-2'></div>
                                <div className='line react col-5'></div>
                            </span>
                        </div>
                    </div>

                    <div className='col-12 col-sm-6 text-center text-sm-start'>
                        <p>
                        Já outras coisas foram só com a unha mesmo e <span className='textColor'>documentação</span>, direto na fonte.
                        Algumas olhadas no <span className='textColor'>stack overflow</span> para não perder o costume e assim aprendemos o que precisamos.
                        </p>
                    </div>
                </div>


                <div className='col-12 d-flex justify-content-sm-end'>
                    <span className='svg col-8 col-sm-5 d-flex justify-content-between'>
                        <SiVisualstudiocode />
                        <SiYarn />
                        <FaGitAlt />
                        <FaUbuntu />
                    </span>
                </div>

                <div className='lingua col-12 d-flex flex-column flex-sm-row align-items-center'>
                    <div className='col-12 col-sm-6 d-flex flex-column align-items-start'>
                        <div>
                            <IoLogoSass className='sass1 col-1'/>
                            <span className='col-12 d-flex'>
                                <div className='col-1'></div>
                                <div className='line sass'></div>
                            </span>
                        </div>
                        <div>
                            <IoLogoAngular className='angular1 col-2'/>
                            <span className='col-12 d-flex'>
                                <div className='col-1'></div>
                                <div className='line angular col-5'></div>
                            </span>
                        </div>
                        <div>
                            <FaJava className='java1 col-3'/>
                            <span className='col-6 d-flex'>
                                <div className='col-1'></div>
                                <div className='line java col-5'></div>
                            </span>
                        </div>
                    </div>

                    <div className='col-12 col-sm-6 text-center text-sm-start'>
                        <p>
                            Atualmente realizando um bootcamp na plataforma da <span className='textColor'>DIO</span> que está sendo oferecido pelo banco <span className='textColor'>Santander</span> onde vou retornar ao <span className='textColor'>Java</span> e começar com o <span className='textColor'>Angula</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Habilidades;