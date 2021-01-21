import styled from 'styled-components';

export const StyledOverviewTrackingSection = styled.div`
    font-size: 2.4rem;
    line-height: 2.9rem;
    color: ${props => props.theme.subText};
    transition: all 750ms !important;
    
    .overview-header {
        padding: 0rem calc((100vw - 31.475rem - 3vw) / 2) 13rem;
    }
    
    @media screen and (min-width: 75rem) {
        .overview-header {
            padding: 0rem calc((100vw - 103.8rem - 5vw) / 2) 13rem;
        }
    }
`;