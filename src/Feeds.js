import React from 'react'
import "./Feeds.css";
import HelpIcon from '@material-ui/icons/Help';
import DiscFullIcon from '@material-ui/icons/DiscFull';
import Fade from "react-reveal/Fade";

function Feeds() {
    return (
        <Fade right>
        <div className="feeds">
            <div className="feeds__container">
                <div className="feeds__info">
                    <p>Linkedin News</p>
                    <HelpIcon/>
                </div>
                <div className="feeds__lists">
                    <div className="feeds__list">
                        <DiscFullIcon className="feeds__icon"/>
                        <h3>How to cope with the rejection</h3>
                    </div>
                    <p>3d ago . 6,054 readers</p>
                    <div className="feeds__list">
                        <DiscFullIcon className="feeds__icon"/>
                        <h3>Average pay across job levels</h3>
                    </div>
                    <p>4h ago . 2,653 readers</p>
                    <div className="feeds__list">
                        <DiscFullIcon className="feeds__icon"/>
                        <h3>Counteroffers to retain top talent</h3>
                        
                    </div>
                    <p>1d ago . 3,005 readers</p>
                    <div className="feeds__list">
                        <DiscFullIcon className="feeds__icon"/>
                        <h3>SEO Tips and Tricks</h3>
                        
                    </div>
                    <p>2d ago . 9,345 readers</p>
                    <div className="feeds__list">
                        <DiscFullIcon className="feeds__icon"/>
                        <h3>Digital Marketing v/s Traditional Marketing </h3>
                        
                    </div>
                    <p>22h ago . 2,209 readers</p>
                    <div className="feeds__list">
                        <DiscFullIcon className="feeds__icon"/>
                        <h3>Job Hunt demands persistence</h3>
                        
                    </div>
                    <p>14h ago . 879 readers</p>
                </div>
            </div>
        </div>
        </Fade>
    )
}

export default Feeds
