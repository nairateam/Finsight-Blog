// import { useState } from "react";
import Footer from "../components/Footer/Footer";
import AllPosts from "../components/Sections/Posts/AllPosts";
import './Blogs.css'

const Blogs = ({blogs}) => {
    // const [index, setIndex] = useState(0);
    const blog = blogs[0];
    const pbg = blog.image;
    const authorr = blog.author;

    // const checkValue =(number)=>{
    //     if (number > blogs.length - 1){
    //         return 0;
    //     }
    //     if (number < 0){
    //         return blogs.length - 1;
    //     }
    //     return number;
    // }
    
    // const next = () =>{
    //     setIndex((index)=>{
    //         let newIndex = index + 1;
    //         return checkValue(newIndex);
    //     })
    // }
    // const prev =()=>{
    //     setIndex((index)=>{
    //         let newIndex = index - 1;
    //         return checkValue(newIndex);
    //     })
    // }
    return ( 
        <>
        <div className="container top_blogs">
            <div className="top_left">
                <p className="hero__cat">
                        POSTED ON <b>{blog.category}</b>
                    </p>
                    <h2 className="hero__title">
                        {blog.title}
                    </h2>

                    <p className="hero__date">
                        By <span>{authorr.name}</span> | {blog.date.toDate().toDateString()}
                    </p>
                    <p className="hero__content">
                        {blog.content.slice(0, 100)}...
                </p>
            </div>
            <div className="top_right">
                <img src={pbg} alt="" />
            </div>
        </div>
        <div className="blogs_all_post">
            <AllPosts blogs={blogs} />
        </div>
        <Footer />
        </>
     );
}
 
export default Blogs;