import React from 'react';
import { AboutCompany } from '../';

const AboutBottom = () => (
    <>
    <ul className="about-metadata-list">
        <li className="about-metadata-list-item">
            <small className="metadata-name">Team Members</small>
            <span className="number">300+</span>
        </li>
        <li className="about-metadata-list-item">
            <small className="metadata-name">Offices in the US</small>
            <span className="number">3</span>
        </li>
        <li className="about-metadata-list-item">
            <small className="metadata-name">Transactions analyzed</small>
            <span className="number">10M+</span>
        </li>
    </ul>
    <div className="about-bottom-card-container">
        <AboutCompany
            header="The Culture"
            content="We strongly believe there's always an opportunity to learn from each other outside of day-to-day work, whether it's company-wide offsites, internal hackathons, or co-worker meetups. We always value cross-team collaboration and diversity of thought, no matter the job title."
        />
        <AboutCompany
            header="The People"
            content="We're all passionate about building a more efficient and inclusive financial infrastructure together. At PayAPI, we have diverse backgrounds and skills."
        />
    </div>
    </>
)

export default AboutBottom