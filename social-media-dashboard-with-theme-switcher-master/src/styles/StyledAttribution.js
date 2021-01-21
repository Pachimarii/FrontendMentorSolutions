import styled from 'styled-components';

export const StyledAttribution = styled.div`
    width: 100%;
    text-align: center;
    padding: 1rem 0;
    color: ${props => props.theme.subText};
    
    .attribution-link {
        color: var(--facebook-color);
        font-weight: 700;
    }

    @media screen and (min-width: 75rem) {
        margin: -2.5rem;
    }
`;