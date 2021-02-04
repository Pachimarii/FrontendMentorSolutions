import styled from'styled-components';

const StyledAttribution = styled.div`
    text-align: center;
    padding: 1rem 0 0.5rem;
    color: ${props => props.theme.active_text_color };
    transition: all 300ms !important;
    .attribution-link {
        color: hsl(280, 87%, 65%);
    }

`;

const Attribution = () => (
    <StyledAttribution className="attribution">
        Challenge by <a className="attribution-link" rel="noreferrer" href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a className="attribution-link" rel="noreferrer" href="https://pachimarii.github.io/" target="_blank">Minhui Xie</a>.
    </StyledAttribution>
);

export default Attribution;