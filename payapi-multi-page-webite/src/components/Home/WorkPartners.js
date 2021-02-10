import React from 'react';
import { PartnersGrid, Button } from '../';

const WorkPartners = () => (
    <div className="work-partners">
        <div className="work-partners-text">
            <h2 className="work-partners-text-header">Who we work with</h2>
            <p className="work-partners-text-content">
                Today, millions of people around the world have successfully connected their accounts to apps they love using our API. We provide developers with the tools they need to create easy and accessible experiences for their users.
            </p>
            <Button text="About Us" href="/about" color="transparent-white" />
        </div>
        <PartnersGrid white={true} />
    </div>
)

export default WorkPartners;