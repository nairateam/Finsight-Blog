import Footer from './Footer/Footer';
// import Nav from './Header/Navigation';
import AboutSection from './Sections/AboutSection';
// import Authors from './Sections/Authors';
import Categories from './Sections/Categories';
import FeatPost from './Sections/FeatPost';
import FeaturedHero from './Sections/FeaturedHero';
import Start from './Sections/Start';
import Testimonials from './Sections/Testimonials';

const Home = ({ blogs, isAuth, signOutUser}) => {
    return ( 
        <>
        {blogs && <FeaturedHero blogs={blogs} isAuth={isAuth} />}
        {blogs && <FeatPost blogs={blogs} signOutUser={signOutUser} />}
        <AboutSection />
        {blogs && <Categories blogs={blogs} />}
        <Start />
        {/* {authors && <Authors authors={authors} />} */}
        <Testimonials />
        <Footer />
        </>
     );
}
 
export default Home;