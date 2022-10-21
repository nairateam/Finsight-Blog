import './Sections.css'
import startBg from '../../assets/IMAGES/slit.svg'
import Btn from '../Ui/Button';

const Start = () => {
    return ( 
        <div className="container start">
            <div className="inner__start">
                {/* <img src={startBg} alt="" /> */}
            </div>
            <div className="inner__write">
                <p>WHY WE STARTED</p>
                <h3>It started out as a simple idea and 
                    evolved into our passion</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                </p>
                <Btn btn="Discover Our Story" />
            </div>
        </div>
     );
}
 
export default Start;