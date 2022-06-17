//import css
import '../css/projetos.css'
import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript} from 'react-icons/io'
import ProjetoD from '../components/VideoPlay';

const Projetos = () => {

    return (
        <div id='projetos' className='background col-12 d-flex justify-content-center'>
            <div className="page d-flex col-12 flex-column justify-content-between">
                <div className='d-flex flex-column'>
                    <ProjetoD
                    titulo={'# KiDelicia'}
                    lado='flex-sm-row'
                    descricao='
                    Desenvolvido para divulgação e apresentação dos trabalhos efetuados pela pequena, mais porém empenhada, a empresa trás a variedade de pratos e e tipos de festas já feitos pela mesma. O site tem como ponto, um estilo mais limpo e simplista, criado para o intuito de demonstrar a qualidade dos produtos e incentivar a utilização do serviço pelas pessoas que o procuram.
                    '
                    git="https://github.com/zandrocr/KiDelicia-TiaMaria"
                    linguagens={<> <IoLogoHtml5 /> <IoLogoCss3 /> <IoLogoJavascript/> </>}
                    video='https://www.youtube.com/watch?v=Y5aQc0ElcMk&ab_channel=ZANDROCR'
                    />
                </div>
            </div>
        </div>
     );
}

export default Projetos;