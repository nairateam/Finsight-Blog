import './Sections.css'
import f1 from '../../assets/IMAGES/Featured/Logo1.svg'
import f2 from '../../assets/IMAGES/Featured/Logo2.svg'
import f3 from '../../assets/IMAGES/Featured/Logo3.svg'
import f4 from '../../assets/IMAGES/Featured/Logo4.svg'
import f5 from '../../assets/IMAGES/Featured/Logo5.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faLocation } from '@fortawesome/free-solid-svg-icons'

const Authors = ({authors}) => {
    return ( 
        <section className="container">
            <h2>List of Authors</h2>
            <div className="authors__container">
                {authors.slice(0, 4).map((auth)=>{
                    return (
                            <Author key={auth.id} {...auth} />
                    )
                })}
            </div>
            <div className="featured">
                <div className="featured_text">
                    <p>We are</p>
                    <h5>Featured in</h5>
                </div>
                <div className="featured_logos">
                    <img src={f1} alt="Featured" />
                    <img src={f2} alt="Featured" />
                    <img src={f3} alt="Featured" />
                    <img src={f4} alt="Featured" />
                    <img src={f5} alt="Featured" />
                </div>
            </div>
        </section>
     );
} 

const Author = ({Author, Image}) => {
    return (
        <div className="author__wrap">
            <img src={Image} alt="log" />
            <h2>{Author}</h2>
            <p>Content Craetor @ Finsight</p>
            <div className="socials_auth">
                <FontAwesomeIcon icon={faEnvelope} />
                <FontAwesomeIcon icon={faPhone} />
                <FontAwesomeIcon icon={faLocation} />
            </div>
        </div>
    )
}
 
export default Authors;