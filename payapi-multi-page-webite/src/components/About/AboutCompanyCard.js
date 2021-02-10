import React from 'react';

const AboutCompanyCard = ({ header, content }) => (
    <div className="about-company-card">
        <h3 className="about-company-card-header">{header}</h3>
        <p className="about-company-card-container">{content}</p>
    </div>
)

export default AboutCompanyCard