import ReactPlayer from "react-player";

//import css
import '../Sass/Span.css'

//import icons
import { FaGithubSquare } from "react-icons/fa"

const Span = () => {
    return (
        <span className="portfolio d-flex justify-content-between">
            <div className="d-flex justify-content-center">
                <p>

                </p>
                <a target='_blank' className="media" href="https://github.com/zandrocr/KiDelicia-TiaMaria">
                    <FaGithubSquare className='gl media'/>
                </a>
            </div>

            <ReactPlayer url='https://www.youtube.com/watch?v=Y5aQc0ElcMk&ab_channel=ZANDROCR' />
        </span>
     );
}

export default Span;