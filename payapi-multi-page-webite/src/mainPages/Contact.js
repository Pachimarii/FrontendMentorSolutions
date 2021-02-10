import React from 'react';
import { Form, PartnersGrid } from '../components';

const Contact = () => (
    <div className="page-container contact-page-container">
        <h1 className="contact-header">
            Submit a help request and we’ll get in touch shortly.
        </h1>
        <main className="contact-main">
            <Form />
            <div className="contact-investors-grid">
                <h3 className="contact-investors-grid-header">Join the thousands of innovators already building with us</h3>
                <PartnersGrid white={false} />
            </div>
        </main>
    </div>
)

export default Contact