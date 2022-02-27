import ale from '../img/png/ale.png'

//import css
import '../Sass/Back.css'

const Back = () => {
    return ( <div className='back d-flex justify-content-center'>
        <img src={ale} alt="ale" className='col-6'/>
    </div> );
}

export default Back;