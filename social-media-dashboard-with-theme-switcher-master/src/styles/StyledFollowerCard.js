import styled from 'styled-components';

export const StyledFollowerCard = styled.div`
    background-color: ${props => props.theme.cardBg};
    width: 100%;
    height: 21.6rem;
    border-radius: 0.5rem;
    overflow: hidden;
    cursor: pointer;
    transition: all 750ms !important;

    display: flex;
    flex-direction: column;
    align-items: center;

    .top-border {
        width: 100%;
        height: 0.4rem;
        background: var(${props => "--" + props.variation + "-color"});
    }

    .username-with-icon {
        padding: 3.2rem 0 2.5rem;
        display: flex;
        align-items: center;

        font-size: 1.2rem;
        line-height: 1.5rem;
        font-weight: 700;
        color: ${props => props.theme.subText};
        transition: all 750ms !important;
    }
    
    .follower-card-icon {
        padding-right: 0.7rem;
    }

    .follower-display{
        width: 100%;
        text-align: center;
        text-transform: uppercase;
        font-weight: 400;
        font-size: 1.2rem;
        line-height: 1.5rem;
        letter-spacing: 0.5rem;
        color: ${props => props.theme.subText};
        transition: all 750ms !important;
    }

    .follower-number {
        font-weight: 700;
        font-size: 5.6rem;
        line-height: 4.8rem;
        letter-spacing: -0.2rem;
        color: ${props => props.theme.mainText};
        padding-bottom: 1rem;
        transition: all 750ms !important;
    }

    .follower-variation {
        color: ${props => props.negative ? 'hsl(356, 69%, 56%)': 'hsl(163, 72%, 41%)'};
        font-weight: 700;
        font-size: 1.2rem;
        line-height: 1.5rem;
        padding: 2rem;

        display: flex;
        align-items: center;
    }

    .arrow{
        padding-right: 0.5rem;
    }

    :hover {
        background-color: ${props => props.theme.hoverCardBg};
        transition: all 300ms !important;
    }
`;