import './FeatPost.css'
import AllPosts from './Posts/AllPosts';
import FeaturedPost from './Posts/FeaturePost';

const FeatPost = ({blogs}) => {
    return ( 
        <section className="feat__post">
            <FeaturedPost blogs={blogs} />
            <AllPosts blogs={blogs} />
        </section>
     );
}
 
export default FeatPost;