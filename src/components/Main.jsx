import '../Sass/Main.css'

//import icons
import { VscGithub } from "react-icons/vsc";
import { BsLinkedin } from "react-icons/bs"

const Main = () => {
    return ( <main className='d-flex flex-column justify-content-around'>
        <div>
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
            <a href="https://github.com/zandrocr">
                <VscGithub className='media'/>
            </a>
            <a href="https://www.linkedin.com/in/zandrocr/">
                <BsLinkedin className='media'/>
            </a>
        </div>
    </main> );
}

export default Main;