import { Link } from "react-router-dom";

const Post = ({author, image, date, title, id}) => {
    return ( 
        <div className="single__post__highlight">
            <div className="left_post">
                <img src={image} alt="" />
            </div>
            <div className="right_post">
                <p>
                    By <span>{author.name}</span> | {date.toDate().toDateString()}
               </p>
                <Link to={`/blogs/${id}`}><h4>{title}</h4></Link>
            </div>
        </div>
     );
}
 
export default Post;