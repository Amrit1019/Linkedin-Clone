import { Avatar, IconButton } from '@material-ui/core';
import React from 'react'
import "./Profile.css";
import AddIcon from '@material-ui/icons/Add';
import Fade from "react-reveal/Fade";


function Profile() {
    return (
        <div className="profile1">
            <div className="profile__container">
                
                <div className="profile__data">
                    <div className="profile__datacontainer">
                    <img src="./assets/background.png" alt="background"/>
                    <Avatar src="./assets/me 1.jpg" className="profile__avatar"/>
                    <div className="profile__details">
                        <div className="profile__info">
                            <h1>Amritpreet Singh</h1>
                            <p className="profile__description">Web Developer | SEO Executive | Content Writing Intern at Getinstartup</p>
                            <p className="profile__place">New Delhi, India</p>
                            <p className="profile__connect">500+ connections</p>
                        </div>
                        <div className="profile__buttons">
                            <button>Open to</button>
                            <button>Add section</button>
                            <button>More</button>
                        </div>
                        <div className="profile__about">
                            <h1>About</h1>
                            <p>'Myself Amritpreet Singh! I am currently pursuing Btech from GTBIT(IPU). Apart from this, I am really well versed in Javascript, HTML, CSS etc. I'm also a professional Cricketer'</p>
                        </div>

                        <div className="profile__experiences">
                            <div className="profile__heading">
                                <h1>Experience</h1>
                                <IconButton>
                                    <AddIcon/> 
                                </IconButton>
                                
                            </div>
                            <div className="profile__experience">
                                <Avatar src="./assets/experience1.png" className="avatar__profile"/>
                                <div className="profile__experienceInfo">
                                    <h1>Content Writing Intern</h1>
                                    <p>Getinstartup - Internship</p>
                                    <p>Nov 2021 - Present . 2 mos</p>
                                </div> 
                            </div>
                        </div>
                        <div className="profile__dashboard">
                            <h1>Your Dashboard</h1>
                            <div className="dashboard__box">
                                <div className="dashboard__content">
                                    <h1>1649</h1>
                                    <p>Who viewed your profile</p>
                                </div>
                                <div className="dashboard__content">
                                    <h1>569</h1>
                                    <p>Posts views</p>
                                </div>
                                <div className="dashboard__content" style={{"border": "none"}}>
                                    <h1>1182</h1>
                                    <p>Search appearances</p>
                                </div>
                            </div>
                        </div>
                        </div>
                       
                    
                    </div>
                </div>
               

                <Fade right>
                <diV className="profile__suggestions">
                    <h1>People also viewed</h1>
                    <diV className="profile__people">
                        <Avatar src="./assets/zayn.jpg"/>
                        <div className="profile__peopleInfo">
                            <h1>Arpit Saxena . 1st</h1>
                            <p>Android Developer | Enterpreneur</p>
                            <button>Pending</button>
                        </div>
                    </diV>
                    <diV className="profile__people">
                        <Avatar src="./assets/photo.jpg"/>
                        <div className="profile__peopleInfo">
                            <h1>Harneet. 2nd</h1>
                            <p>React Developer | Intern at Amazon</p>
                            <button>Connect</button>
                        </div>
                    </diV>
                    <diV className="profile__people">
                        <Avatar src="./assets/avatar1.jpg"/>
                        <div className="profile__peopleInfo">
                            <h1>Deepak Sharma . 1st</h1>
                            <p>Content Writer</p>
                            <button>Connect</button>
                        </div>
                    </diV>
                    <diV className="profile__people">
                        <Avatar src="./assets/avatar2.jpg"/>
                        <div className="profile__peopleInfo">
                            <h1>Karan Sharma . 3rd</h1>
                            <p>CEO at Ola Cabs | Entrepreneur</p>
                            <button>Connect</button>
                        </div>
                    </diV>
                    <diV className="profile__people">
                        <Avatar src="./assets/avatar3.jpg"/>
                        <div className="profile__peopleInfo">
                            <h1>Abhishek . 1st</h1>
                            <p>Entrepreneur | Businessman</p>
                            <button>Connect</button>
                        </div>
                    </diV>
                    <diV className="profile__people">
                        <Avatar src="./assets/avatar4.jpg"/>
                        <div className="profile__peopleInfo">
                            <h1>Nikhil . 1st</h1>
                            <p>MERN STACK Developer</p>
                            <button>Connect</button>
                        </div>
                    </diV>
                    <diV className="profile__people">
                        <Avatar src="./assets/avatar5.jpg"/>
                        <div className="profile__peopleInfo">
                            <h1>Kuldeep . 2nd</h1>
                            <p>React Developer</p>
                            <button>Connect</button>
                        </div>
                    </diV>
                    <diV className="profile__people">
                        <Avatar src="./assets/avatar6.jpg"/>
                        <div className="profile__peopleInfo">
                            <h1>Megha Rajouria . 1st</h1>
                            <p>Python Developer</p>
                            <button>Connect</button>
                        </div>
                    </diV>
                </diV>
                </Fade>
            </div> 
        </div>
    )
}

export default Profile
