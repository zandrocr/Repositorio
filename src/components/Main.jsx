//import css
import '../Sass/Main.css'
import '../Sass/ImgAle.css'

//import png
import ale from '../img/png/ale.png'

//import icons
import { SiCss3, SiHtml5, SiJavascript, SiJquery, SiReact } from "react-icons/si";
import { BsFillBootstrapFill } from 'react-icons/bs';
import { IoLogoSass } from 'react-icons/io';

const Main = () => {

    return (
    <main className='d-flex flex-column justify-content-evenly'>
        <div className='d-flex flex-column-reverse flex-lg-row justify-content-around'>
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

                <div className='mediaM d-flex justify-content-around'>
                    <p>
                        <SiHtml5 className='lg h media'/>
                    </p>
                    <p>
                        <SiCss3 className='lg c media'/>
                    </p>
                    <p>
                        <SiJavascript className='lg j media'/>
                    </p>
                    <p>
                        <SiJquery className='lg q media'/>
                    </p>
                    <p>
                        <BsFillBootstrapFill className='lg b media'/>
                    </p>
                    <p>
                        <SiReact className='lg r media'/>
                    </p>
                    <p>
                        <IoLogoSass className='lg s media'/>
                    </p>
                </div>
            </div>

        </div>

        <div className='d-flex col-lg-6 justify-content-around'>
            <p>
                <SiHtml5 className='gl h media'/>
            </p>
            <p>
                <SiCss3 className='gl c media'/>
            </p>
            <p>
                <SiJavascript className='gl j media'/>
            </p>
            <p>
                <SiJquery className='gl q media'/>
            </p>
            <p>
                <BsFillBootstrapFill className='gl b media'/>
            </p>
            <p>
                <SiReact className='gl r media'/>
            </p>
            <p>
                <IoLogoSass className='gl s media'/>
            </p>
        </div>
    </main> );
}

export default Main;
