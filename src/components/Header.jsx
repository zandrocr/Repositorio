import github from '../img/png/github.png'
import linkedin from '../img/png/linkedin.png'
import whatsapp from '../img/png/whatsapp.png'

//import css
import '../Sass/Header.css'

const Header = () => {
    return (
        <nav className='navbar'>
            <p>ZANDROCR</p>
            <ul className='d-flex '>
                <li>
                    <img src={github} alt="github" className='social-media' />
                </li>
                <li>
                    <img src={linkedin} alt="linkedin" className='social-media' />
                </li>
                <li>
                    <img src={whatsapp} alt="whatsapp" className='social-media' />
                </li>
            </ul>
        </nav>
     );
}

export default Header;