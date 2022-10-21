import React from 'react'
import './Login.css'
// import Nav from '../components/Header/Navigation'
import { auth, provider } from '../FirebaseConfig'
import {signInWithPopup} from 'firebase/auth'
import { useNavigate } from 'react-router'
// import {signOut} from 'firebase/auth'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHand } from '@fortawesome/free-solid-svg-icons'
import goog from '../assets/Icons/R.png'
import Footer from '../components/Footer/Footer'

function Login({setIsAuth}) {
    let navigate = useNavigate();

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            localStorage.setItem("isAuth", true);
            setIsAuth(true);
            navigate('/');
        });
    };

  return (
    <div>
        <div className="container login">
            <h2>Sign In</h2>
            <div className="sign_board">
                <h4>Welcome To Techsight  <FontAwesomeIcon icon={faHand} style={{color: 'black'}} /></h4>
                <p>Would you like to contribute to our commuinty? Please sign in below to make a post.</p>
                <button onClick={signInWithGoogle}><img src={goog} alt='Google' />Sign in with Google</button>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Login;