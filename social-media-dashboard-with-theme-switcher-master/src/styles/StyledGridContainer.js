import styled from 'styled-components';

export const StyledGridContainer = styled.div`
    transition: all 250ms !important;
    margin: -5rem calc((100vw - (31.475rem + 3vw)) / 2) 0;
    padding: 0 0 5rem;
    width: calc(31.475rem + 3vw);
    display: grid;
    grid-template-columns: 1;
    grid-template-rows: auto;
    gap: 2.4rem;

    @media screen and (min-width: 50rem) {
        gap: 3rem;
        margin: -11rem calc((100vw - 70rem - 5vw) / 2) 0;
        width: calc(70rem + 5vw); 
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (min-width: 75rem) {
        margin: -11rem calc((100vw - 103.8rem - 5vw) / 2) 0;
        width: calc(103.8rem + 5vw); 
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
    
`;