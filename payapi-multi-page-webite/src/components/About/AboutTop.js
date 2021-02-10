import React from 'react';
import { AboutCompany } from '..';

const AboutHeader = () => (
    <div className="about-header">
        <h1 className="about-header-title">
            We empower innovators by delivering access to the financial system
        </h1>
        <div className="about-header-card-container">
            <AboutCompany
                header="Our Vision"
                content="Our main goal is to build beautiful consumer experiences along with developer-friendly infrastructure. The result is an intelligent tool that gives everyone the ability to create amazing products that solve big problems. We are deeply focused on democratizing financial services through technology."
            />
            <AboutCompany
                header="Our Business"
                content="At the core of our platform is the technical infrastructure APIs that connect consumers. Our innovative product provides key insights for businesses and individuals, as well as robust reporting for traditional financial institutions and developers."
            />
        </div>
    </div>
)

export default AboutHeader