import React from "react";
import doubleQuotes from "../../assets/double-quotes.svg";
import dotPattern from "../../assets/dot-pattern.svg";
import profilePicDefaultSmall from "../../assets/profile-pic.png";
import profilePicDefaultLarge from "../../assets/profile-pic-lg.png"
import "./Testimonials.css";

export default function Testimonials({ profilePic = profilePicDefaultLarge, name, title, orgIcon, children }) {

    const profilePicEl = (
        <div 
            className="profile-pic" 
            role="img" 
            aria-label="An image of the person that is giving this testimonial."
            style={{
                backgroundImage: `url("${profilePic}")`
            }}
        ></div>
    );

    return (
        <div className="testimonial-container">
            {profilePicEl}
            <div className="testimonial-body">
                <img src={doubleQuotes} alt="An icon of double quotation marks." />
                <p className="testimonial-body-text">{children}</p>
                <div className="testimonial-source">
                    <p className="testimonial-source-name">{name}</p>
                    <p>{title}</p>
                </div>
            </div>
        </div>
    )
}