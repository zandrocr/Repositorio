import '../Sass/Main.css'

//import icons
import { VscGithub } from "react-icons/vsc";
import { BsLinkedin } from "react-icons/bs"

const Main = () => {

    return ( <main className='d-flex flex-column justify-content-around'>
        <div className='d-flex justify-content-around'>
            <a target="_blank" href="https://github.com/zandrocr">
                <VscGithub className='lg media'/>
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/zandrocr/">
                <BsLinkedin className='lg media'/>
            </a>
        </div>

        <div className='d-flex flex-column justify-content-around'>
            <p className='text2'>
                Eae,
            </p>
            <p className='text2'>
                Eu sou Alezandro
            </p>
            <p className='text2'>
                Front-end Developer
            </p>
        </div>
        <div>
            <a target="_blank" href="https://github.com/zandrocr">
                <VscGithub className='gl media'/>
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/zandrocr/">
                <BsLinkedin className='gl media'/>
            </a>
        </div>
    </main> );
}

export default Main;