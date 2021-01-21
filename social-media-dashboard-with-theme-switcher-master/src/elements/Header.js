import {StyledHeader} from '../styles/StyledHeader';

const Header = ({toggle}) => {
    return (
    <StyledHeader>
        <div className="text-container">
            <p className="title"> Social Media Dashboard </p>
            <p className="sub-title"> Total Followers: 23,004 </p>
        </div>
        <hr className="horizontal-rule"/>
        <div className="switch-container">
            <p className="switch-label"> Dark Mode </p>
            <input
                aria-label="switch for dark mode"
                type="checkbox"
                className="switch-btn"
                id="btn"
                onClick={() => toggle()}                
            />
        </div>
    </StyledHeader>
)};

export default Header;