import React from 'react';
import * as logo from '../../images/shared';

const PartnersGrid = ({ white }) => (
    <div className="work-partners-grid">
        <img 
            className="work-partners-grid-logo-tesla" 
            src={white ? `${logo.teslaWhite}` : `${logo.tesla}`} 
            alt="Tesla company logo" 
        />
        <img 
            className="work-partners-grid-logo-microsoft" 
            src={white ? `${logo.microsoftWhite}` : `${logo.microsoft}`} 
            alt="Microsoft company logo" 
        />
        <img 
            className="work-partners-grid-logo-hp" 
            src={white ? `${logo.hpWhite}` : `${logo.hp}`} 
            alt="Hewlett-Packard company logo" 
        />
        <img 
            className="work-partners-grid-logo-oracle" 
            src={white ? `${logo.oracleWhite}` : `${logo.oracle}`} 
            alt="Oracle company logo" 
        />
        <img 
            className="work-partners-grid-logo-google" 
            src={white ? `${logo.googleWhite}` : `${logo.google}`} 
            alt="Google company logo" 
        />
        <img 
            className="work-partners-grid-logo-nvidia" 
            src={white ? `${logo.nvidiaWhite}` : `${logo.nvidia}`} 
            alt="Nvidia company logo" 
        />
    </div>
)

export default PartnersGrid