import './Sections.css'
import aboutStyle from '../../assets/pattern.svg';

const AboutSection = () => {
    return ( 
        <section className="container lt">
                <img src={aboutStyle} alt='style' className='about__style' />
            <div className="flex-box">
                <About />
                <Mission />
            </div>

        </section>
     );
}

const About = () => {
    return (
        <div className="about">
            <p>About Us</p>
            <h4>We are a community of content writers who share their learnings</h4>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="read__btn">Read More</p>
        </div>
    )
}

const Mission = () => {
    return (
        <div className="about">
            <p>Our Mission</p>
            <h5>Creating valuable content for creatives all around the world</h5>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
        </div>
    )
}
 
export default AboutSection;