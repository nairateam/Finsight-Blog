import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
const Footer = () => {
    return ( 
        <div>
            <section className="footer container">
                <div className="top__footer">
                    <h1>Techsight</h1>
                    <ul>
                        <li>Home</li>
                        <li>Blog</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="middle__footer">
                    <h2>Subscribe to our news letter to get latest updates and news</h2>
                    <form action="">
                        <input type="email" name="email" id="email" placeholder='Enter Your Email' />
                        <button>Subscribe</button>
                    </form>
                </div>
                <div className="bottom__footer">
                    <div className="foot_text">
                        <p>Finstreet 118 2561 Fintown</p>
                        <p>Hello@finsight.com  020 7993 2905</p>
                    </div>
                    <div className="foot_text foot2">
                        <FontAwesomeIcon icon={faEnvelope} />
                        <FontAwesomeIcon icom={faEnvelope} />
                    </div>
                </div>
            </section>
        </div>
     );
}
 
export default Footer;
