//import css
import '../Sass/Header.css'

const Header = () => {
    return (
        <nav className='navbar d-flex flex-md-row flex-column'>
            <p className='text1'>ZANDROCR</p>
            <ul className='d-flex list'>
                <li className='text1 link'>
                    Sobre
                </li>
                <li className='text1 link'>
                    Portfolio
                </li>
                <li className='text1 link'>
                    Contatos
                </li>
            </ul>
        </nav>
     );
}

export default Header;