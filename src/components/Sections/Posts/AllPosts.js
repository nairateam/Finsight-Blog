import Post from "./Post";
import './Posts.css'
import { useState } from "react";

const AllPosts = ({blogs}) => {
    const [viewAll, setViewAll] = useState(true);

    if (viewAll) {
        return ( 
            <div className="all__posts">
                <div className="post__menu">
                    <h3>All Posts</h3>
                    <p onClick={()=> setViewAll(!viewAll) }>View All</p>
                </div>
                {blogs.slice(0, 3).map((blog) => {
                    return <>
                    <Post key={blog.id} {...blog} />
                    {/* <button onClick={()=> handleSurf(blog.id)}>Delete</button> */}
                    </> 
                })}
            </div>
         );
    }
    else {
        return ( 
            <div className="all__posts">
                <div className="post__menu">
                    <h3>All Posts</h3>
                    <p onClick={()=> setViewAll(!viewAll) }>View Less</p>
                </div>
                {blogs.map((blog) => {
                    return <>
                    <Post key={blog.id} {...blog} />
                    {/* <button onClick={()=> handleSurf(blog.id)}>Delete</button> */}
                    </> 
                })}
            </div>
         );
    }
}
 
export default AllPosts;