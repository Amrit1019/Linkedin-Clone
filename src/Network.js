import React from 'react'
import "./Network.css";
import ContactsIcon from '@material-ui/icons/Contacts';
import PeopleIcon from '@material-ui/icons/People';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import EventIcon from '@material-ui/icons/Event';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import People from "./People";
import Fade from "react-reveal/Fade";

function Network() {
    return (
        <div className="network">
            <div className="network__container">
                <Fade left>
                <div className="network__sidebar">
                    <h1>Manage my network</h1>
                    <div className="sidebar__lists">
                        <ul>
                            <li>
                                <div className="sidebar__list">
                                    <div className="sidebar__content">
                                    <PeopleIcon/>
                                    <p>Connections</p>
                                    </div>
                                    <p>502</p>
                                </div>
                            </li>
                            <li>
                                <div className="sidebar__list">
                                    <div className="sidebar__content">
                                    <ContactsIcon/>
                                    <p>Contacts</p>
                                    </div>
                                    <p>3076</p>
                                </div>
                            </li>
                            <li>
                                <div className="sidebar__list">
                                    <div className="sidebar__content">
                                    <GroupAddIcon/>
                                    <p>Groups</p>
                                    </div>
                                    <p>4</p>
                                </div>
                            </li>
                            <li>
                                <div className="sidebar__list">
                                    <div className="sidebar__content">
                                    <EventIcon/>
                                    <p>Events</p>
                                    </div>
                                    <p>9</p>
                                </div>
                            </li>
                            <li>
                                <div className="sidebar__list">
                                    <div className="sidebar__content">
                                    <AssignmentIcon/>
                                    <p>Newsletter</p>
                                    </div>
                                    <p>2</p>
                                </div>
                            </li>
                        </ul>
                        <div className="show__less">
                        <p>Show less</p>
                        <ExpandLessIcon/>
                        </div>
                    </div>
                </div>
                </Fade>
                <div className="networks">
                    <div className="networks__container">
                        <div className="networks__heading">
                            <h1>People you may know</h1>
                            <p>See all</p>
                        </div>

                        <diV className="networks__cards">
                        <Fade bottom>
                        <div className="networks__card">
                            <People name="Hiren Mehta"
                            description="Android Developer "
                            avatarSrc="./assets/zayn.jpg"
                            mutual="4"/>
                            <People name="Kartik Doonga"
                            description="Digital Marketing Executive "
                            avatarSrc="./assets/avatar3.jpg"
                            mutual="100"/>
                            <People name="Ankit bhimani"
                            description="SEO Executive"
                            avatarSrc="./assets/avatar5.jpg"
                            mutual="45"/>
                            <People name="Codewithharry"
                            description="Python Developer"
                            avatarSrc="./assets/avatar6.jpg"
                            mutual="98"/>
                        </div>
                        </Fade>

                        <Fade bottom>
                        <div className="networks__card">
                            <People name="Vansh Agarwal"
                            description="SEO at i way digital"
                            avatarSrc="./assets/avatar4.jpg"
                            mutual="1"/>
                            <People name="John Jones"
                            description="Flutter Developer "
                            avatarSrc="./assets/avatar1.jpg"
                            mutual="100"/>
                            <People name="Ishmeet Singh"
                            description="Student at GTBIT | DM"
                            avatarSrc="./assets/avatar2.jpg"
                            mutual="62"/>
                            <People name="Rowan Roy"
                            description="Fashion Influencer "
                            avatarSrc="./assets/avatar9.png"
                            mutual="23"/>
                        </div>
                        </Fade>
                        
                        <Fade bottom>
                        <div className="networks__card">
                            <People name="Billie Ellish"
                            description="Singer | Bad Guy"
                            avatarSrc="./assets/avatar7.jpg"
                            mutual="7"/>
                            <People name="Alex Costa"
                            description="Fashion Influcer | CEO Forte "
                            avatarSrc="./assets/avatar10.jpg"
                            mutual="45"/>
                            <People name="Muskan Jawa"
                            description="Singer"
                            avatarSrc="./assets/avatar8.jpg"
                            mutual="45"/>
                            <People name="Joey Tribbiani"
                            description="Star of Days of our lives | Actor"
                            avatarSrc="./assets/avatar11.jpg"
                            mutual="12"/>
                        </div>
                        </Fade>
                        </diV>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Network
