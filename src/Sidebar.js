import { Avatar } from '@material-ui/core';
import React from 'react'
import { Link } from 'react-router-dom';
import "./Sidebar.css";
import Fade from "react-reveal/Fade";

function Sidebar() {
    return (
        <Fade left>
        <div className="sidebar">
            <img src="./assets/background.png" alt="background"/>
            <Avatar src="./assets/me 1.jpg" className="avatar1"/>
            <div className="sidebar__info">
                <Link to="/profile">
                    <h1>Amritpreet Singh</h1>
                    <p>Web Developer | SEO Executive | Content Writing Intern at Getinstartup</p>
                </Link>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__views">
                    <p className="profile">Who viewed your profile: </p>
                    <p className="number">1649</p>
                </div>
                <div className="sidebar__views">
                    <p className="profile">Views of your post: </p>
                    <p className="number">1197</p>
                </div>
            </div>
            <div className="sidebar__tags">
                    <p>Recent</p>
                    <ul>
                        <li># linkedin</li>
                        <li># sparksfoundation</li>
                        <li># gtbit</li>
                        <li># seo</li>
                        <li># digital marketing</li>
                        <li># basic of java fundamentals</li>
                    </ul>
            </div>
        </div>
        </Fade>
    )
}

export default Sidebar;