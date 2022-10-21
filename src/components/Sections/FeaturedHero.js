import Btn from '../Ui/Button';
import './FeaturedHero.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleLeft, faCircleRight } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const FeaturedHero = ({blogs}) => {
    const [index, setIndex] = useState(0);
    const blog = blogs[index];
    const pbg = blog.image;
    const authorr = blog.author;

    const checkValue =(number)=>{
        if (number > blogs.length - 1){
            return 0;
        }
        if (number < 0){
            return blogs.length - 1;
        }
        return number;
    }
    
    const next = () =>{
        setIndex((index)=>{
            let newIndex = index + 1;
            return checkValue(newIndex);
        })
    }
    const prev =()=>{
        setIndex((index)=>{
            let newIndex = index - 1;
            return checkValue(newIndex);
        })
    }
    return ( 
        <section style={{ backgroundImage: `url('${pbg}')` }} className="hero">
        {/* <section className="hero"> */}
            <div className="featured__blog">
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
            <Link to={`/blogs/${blog.id}`}><Btn btn='Read More' /></Link>
            <div className="switch_btn">
                <button onClick={prev}><FontAwesomeIcon icon={faCircleLeft} /></button>
                <button onClick={next}><FontAwesomeIcon icon={faCircleRight} /></button>
            </div>
        </section>
     );
}
 
export default FeaturedHero;