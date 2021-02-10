import React from 'react'

const AppAttributeCard = ({ icon, heading, subheading }) => (
    <div className="grid-card">
        <div className="grid-card-icon-container">
            <img className="grid-card-icon" src={icon} alt={`${heading} icon`} />
        </div>
        <div className="grid-card-text">
            <h4 className="grid-card-header">{heading}</h4>
            <p className="grid-card-content">{subheading}</p>
        </div>
    </div>
)

export default AppAttributeCard