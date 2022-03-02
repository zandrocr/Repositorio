//import css
import '../Sass/Main.css'
import '../Sass/ImgAle.css'

//import png
import ale from '../img/png/ale.png'

//import icons
import { VscGithub } from "react-icons/vsc";
import { BsLinkedin } from "react-icons/bs"

const Main = () => {

    return (
    <main className='d-flex flex-column justify-content-evenly'>
        <span className='d-flex flex-column-reverse flex-lg-row justify-content-around'>
            <div className='textMain d-flex flex-column justify-content-center'>
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

            <div className='back d-flex flex-column justify-content-center'>
                <span className='d-flex justify-content-center'>
                    <img src={ale} alt="ale" className='col-8 col-lg-12'/>
                </span>

                <div className='d-flex justify-content-around'>
                    <a target="_blank" href="https://github.com/zandrocr">
                        <VscGithub className='lg media'/>
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/in/zandrocr/">
                        <BsLinkedin className='lg media'/>
                    </a>
                </div>
            </div>

        </span>

        <div className='d-flex'>
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