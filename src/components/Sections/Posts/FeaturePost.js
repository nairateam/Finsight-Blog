import Btn from "../../Ui/Button";
import './Posts.css'

const FeaturedPost = ({blogs}) => {
    const blog = blogs[0];
    return ( 
        <div className="featured__post">
            <h3>Featured Posts</h3>
            <div className="the__featured">
                <img src={blog.image} alt="Featured" />
            
                <p className="featured__date">
                    By <span>{blog.author.name}</span> | date
                </p>
                <h4 className="featured__title">
                    {blog.title}
                </h4>
                <p className="featured__content">
                    {blog.content.slice(0, 100)}...
                </p>
                <Btn btn='Read More' />
            </div>
        </div>
     );
}
 
export default FeaturedPost;