//import css
import '../css/projetos.css'
//import hook play
import ReactPlayer from "react-player";
//import icons
import { FiGithub } from 'react-icons/fi'

const ProjetoD = ({titulo, descricao, linguagens, video, lado, git}) => {

    return (
    <div className='d-flex flex-column'>
        <h2 className='d-flex align-items-center'>{titulo}<div className='line'></div></h2>
        <div className={`d-flex flex-column ${lado} align-items-center justify-content-around`}>
            <div className='page col-11 col-sm-5'>
                <p>{descricao}
                </p>
                <span className='d-flex justify-content-between'>
                    <a target='_blank' className="d-flex justify-content-center" href={git}>
                        <FiGithub/>
                    </a>
                    <span>{linguagens}</span>
                </span>
            </div>
            <div className='video d-flex justify-content-center align-items-end col-11 col-sm-5'>
                <ReactPlayer controls url={video} />
            </div>
        </div>
    </div>
     );
}

export default ProjetoD;