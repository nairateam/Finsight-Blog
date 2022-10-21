import './Sections.css'
import testimonies from '../../data/TestData'
import { useState } from 'react';
import Btn from '../Ui/Button';

const Testimonials = () => {
    const [index, setIndex] = useState(0);
    const {Message, Name, Image, Location} = testimonies[index];

    const Next =()=> {
        setIndex((index)=>{
            let newIndex=(index + 1);
            return checkNumber(newIndex);
        });
    }
    const Prev = () => {
        setIndex((index)=>{
            let newIndex=(index - 1);
            return checkNumber(newIndex);
        });
    }
    const checkNumber = (num) => {
        if (num > testimonies.length - 1) {
            return 0;
        }
        if (num < 0) {
            return testimonies.length - 1;
        }
        return num;
    }

    return ( 
        <div>
            <section className="container testimonials">
                <div className="mid_testimonial">
                    <p>TESTIMONIALS</p>
                    <h5>What people say about our blog</h5>
                    <p>Read people's opinion about Techsight Commuinty.</p>
                </div>
                <div className="mid_testimonial">
                    <div className="wrap_it">
                        <p>{Message}</p>
                        <div className='wrap_tt'>
                            <img src={Image} alt="Gold" />
                            <div className="text_test">
                                <h5>{Name}</h5>
                                <p>{Location}</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="test__button">
                            <button onClick={Prev}>Prev</button>
                            <button onClick={Next}>Next</button>
                        </div>
            </section>
            <section className="container team">
                <div className="team__container">
                    <h2>Join our team to be a part of our story</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    <Btn btn='Join Now' />
                </div>
            </section>
        </div>
     );
}
 
export default Testimonials;