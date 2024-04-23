import React from "react";
import defaultIcon from "../../assets/brand-icon.svg"
import "./Card.css"

export default function Card({ brandIcon = defaultIcon, cardTitle = "Easy Deployment", children }) {
    return (
        <div className="card-container">
            <img className="brand-icon" src={brandIcon} alt="A brand icon"></img>
            <p className="card-title">{cardTitle}</p>
            <p className="card-body">{children}</p>
        </div>
    )
}