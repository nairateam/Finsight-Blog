import './Posts.css'
import { useState, useEffect } from 'react';
import { useParams } from "react-router";
import Nav from "../../Header/Navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import Footer from '../../Footer/Footer';
import Btn from '../../Ui/Button';
// import { async } from '@firebase/util';
import { db } from '../../../FirebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import AllPosts from './AllPosts';

const BlogDetails = ({blogs}) => {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(()=>{
        id && getDetails();
    }, [id])

    const getDetails = async () => {
        const docRef = doc(db, "posts", id);
        const postDetail = await getDoc(docRef);
        setPost(postDetail.data());

    }

    return ( 
        <div>
            <Nav />
            <div className="container blog_single">
                <div className="blog_info">
                    <div className='blog_head'>
                        <div className="blog_head_wrap">
                            {/* <FontAwesomeIcon icon={faUser} size='2x' /> */}
                            <img src={post && post.photo.image} alt="Profile" />
                            <div className="text_test">
                                <h5>{post && post.author.name}</h5>
                                <p>Date: {post && post.date.toDate().toDateString()}</p>
                            </div>
                        </div>
                        <h3>{post && post.title}</h3>
                        <p><FontAwesomeIcon icon={faRocket} style={{color: 'orange'}} /> {post && post.category}</p>
                    </div>
                    <div className="blog_img">
                        <img src={post && post.image} alt='banner' />
                    </div>
                    <div className="blog_body">
                        <p><b>Lorem ipsum dolor sit amet consectetur adipisicing 
                            elit. Quaerat, facere?</b></p><br/>
                        <p>{post && post.content}</p><br/>
                    </div>
                </div>
                <div className="tags_section">
                    <AllPosts blogs={blogs} />
                </div>
                
            </div>
            <div className="container related_posts">
                <p>What to read next</p>
                <div className="related_container">
                    {blogs.map((blog)=>{
                        return (
                        <div className="related_box">
                            <img src={blog.image} alt="" />
                            <p>By {blog.author.name} | Date</p>
                            <h3>{blog.title}</h3>
                            <p>{blog.content.slice(0, 100)}</p>
                        </div>
                        )
                    })}
                </div>
            </div>
            <section className="container team">
                <div className="team__container">
                    <h2>Join our team to be a part of our story</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    <Btn btn='Join Now' />
                </div>
            </section>
            <Footer />
        </div>
        // <div>
        //     <h2>Hello - {id}</h2>
        // </div>
     );
}
 
export default BlogDetails;