import React from 'react'
import { FaGlobe } from "react-icons/fa";
import { BiTrendingUp } from 'react-icons/bi'
import Button from '../../Components/Button/Button';

const AboutUs = () => {

    const functionForBtn = () => {

    }
    return (
        <div className='page'>

            <div className="AboutUs">

                <div className="left_content">
                    <div className="left_content_info">
                        <div className="circle"><FaGlobe /></div>
                        <span className='content_count'>23.8K</span>
                        <span className='content_title'>Reach</span>
                        <span className='content_progress'><BiTrendingUp /> 11.5%</span>
                    </div>
                </div>

                <div className="right_content">
                    <div>
                        <span className='aboutUs_title'>A B O U T  <span>U S</span></span>
                        <span className='content_title'>We start with discovery call to understand</span>
                        <span className='content_text'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Praesentium blanditiis modi at assumenda, delectus provident
                            quam veniam similique dolore temporibus sint facilis!
                            Voluptatum facere eos aliquam perferendis quia vitae vero!
                            <br /> <br />
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Dolorum placeat perspiciatis facilis libero minima neque.
                        </span>
                    </div>
                    <Button width={140} height={50} content={'Learn More'} click={functionForBtn} />
                </div>

            </div>
        </div>
    )
}

export default AboutUs