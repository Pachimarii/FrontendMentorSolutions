import styled from 'styled-components';

export const StyledOverviewCard = styled.div`
    background-color: ${props => props.theme.cardBg};
    width: 100%;
    height: 12.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2.7rem 3rem 2.4rem 2.4rem;
    align-content: center;
    transition: all 750ms !important;

    border-radius: 0.5rem;
    overflow: hidden;
    cursor: pointer;

    font-weight: 700;
    color: ${props => props.theme.subText};
    font-size: 1.4rem;
    line-height: 1.7rem;

    .overview-row1, .overview-row2{
        display:  flex;
        justify-content: space-between;
        align-items: flex-end;
        transition: all 750ms !important;
    }

    .count {
        font-size: 3.2rem;
        color: ${props => props.theme.mainText};
        line-height: 3.9rem;
        transition: all 750ms !important;
    }

    .trend-rate {
        color: ${props => props.trend.localeCompare("up") !== 0 ? 'hsl(356, 69%, 56%)': 'hsl(163, 72%, 41%)'};
        display: flex;
        align-items: center;
        transition: all 750ms !important;
    }

    .trend {
        padding-right: 0.5rem;
        transition: all 750ms !important;
    }

    :hover {
        background-color: ${props => props.theme.hoverCardBg}
    }

`;