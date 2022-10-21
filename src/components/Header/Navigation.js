import { useRef } from 'react';
// import Btn from '../Ui/Button';
import { Link } from 'react-router-dom';
import './Navigation.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose, faSignIn, faSignOut, faNoteSticky } from '@fortawesome/free-solid-svg-icons';

const Nav = ({isAuth, signOutUser}) => {

    const navRef = useRef();
    // let navigate = useNavigate();

    const showMenu = () => {
        navRef.current.classList.toggle('responsive_nav');
    }

    return ( 
        <header>
            <Link to='/'><h1 className="log">Techsight</h1></Link>
            <nav ref={navRef} className="navbar">
                <h2 className="NavTitle">Techsight</h2>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/blogs">Blog</Link></li>
                <li><Link to="/">About Us</Link></li>
                <li><Link to="/">Contact Us</Link></li>
                <btnss>
                {!isAuth ? <Link to='/login'><FontAwesomeIcon icon={faSignIn} /> SIGNIN</Link> : <Link to='/create-post'><FontAwesomeIcon icon={faNoteSticky} /> CreatePost</Link>}
                {!isAuth ? '' : 
                    <Link onClick={signOutUser}><FontAwesomeIcon icon={faSignOut} /> SignOut</Link>
            }
                </btnss>
                <button className='nav_c nav_close' onClick={showMenu}><FontAwesomeIcon icon={faClose} size='1x' /></button>
            </nav>
            <div className="sub_btn">
                {/* {!isAuth ? <Link to='/login'><Btn btn='Sign In' /></Link> : <Btn btn='Create Post' />}
                {!isAuth ? '' : 
                    <button onClick={signOutUser}><Btn btn='Sign Out' /></button>
            } */}
                {!isAuth ? <Link to='/login'><FontAwesomeIcon icon={faSignIn} /> SIGNIN</Link> : <Link to='/create-post'><FontAwesomeIcon icon={faNoteSticky} /> CreatePost</Link>}
                {!isAuth ? '' : 
                    <Link onClick={signOutUser}><FontAwesomeIcon icon={faSignOut} /> SignOut</Link>
            }
            </div>
            <button className='nav_c' onClick={showMenu}><FontAwesomeIcon icon={faBars} /></button>
        </header>
     );
}
 
export default Nav;