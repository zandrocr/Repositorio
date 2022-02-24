import github from '../img/png/github.png'

const Header = () => {
    return (
        <nav>
            <ul>
                <li>
                    <img src={github} alt="github" />
                </li>
            </ul>
        </nav>
     );
}

export default Header;