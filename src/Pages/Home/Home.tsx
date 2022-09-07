import React from 'react'
import Button from '../../Components/Button/Button'
import { FiGithub } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { BsLightningCharge } from "react-icons/bs";

const Home = () => {
    const functionForBtn = () => {

    }

    return (
        <div className='page'>
            <div className="Home">

                <div className="HomeLeft">
                    <span className="HomeTitle">Professional marketing copy for anyone</span>
                    <div className="HomeSupTitle">
                        <div className="SupTitleAva">
                            <div className='TitleAvaImg'></div>
                        </div>
                        <span className='SupTitleText'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Qui labore veritatis sapiente expedita illum! 
                        </span>
                    </div>
                    <div className="HomeFollow">
                        <span>My contacts</span>
                        <div className="HomeContacts">
                            <div className="contact">
                                <FiGithub />
                            </div>
                            <div className="contact">
                                <FaLinkedinIn />
                            </div>
                            <div className="contact">
                                <BsInstagram />
                            </div>

                        </div>
                    </div>
                    <Button width={130} height={50} content={'Learn More'} click={functionForBtn}/>
                </div>

                <div className="HomeRight">

                    <div className="HomeRightContent">
                        <div className="RightContentCircle">
                            <div className="img"></div>
                        </div>
                        <div className="rightContentInfo">
                            <span className='contentInfoTitle'>
                                <BsLightningCharge />
                                Perfomance
                            </span>
                            <div className="progressBar">
                                <div className="progressBarOne" style={{width: '37%'}}></div>
                                <div className="progressBarTwo" style={{width: '100%'}}>
                                    <div className="progressBarInline" style={{width: '67%'}}></div>
                                </div>
                            </div>
                            <div className="progressBar">
                                <div className="progressBarOne" style={{width: '27%'}}></div>
                                <div className="progressBarTwo" style={{width: '100%'}}>
                                    <div className="progressBarInline" style={{width: '47%'}}></div>
                                </div>
                            </div>
                            <div className="progressBar">
                                <div className="progressBarOne" style={{width: '57%'}}></div>
                                <div className="progressBarTwo" style={{width: '100%'}}>
                                    <div className="progressBarInline" style={{width: '80%'}}></div>
                                </div>
                            </div>
                        </div>
                        <div className="rightContentInfoTwo">
                            <div>
                                <span className="procent">2M+ </span>
                                <span className="procent_text">Trusted Users</span>
                            </div>
                            <div>
                                <span className="procent">95% </span>
                                <span className="procent_text">Return Customers</span>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Home