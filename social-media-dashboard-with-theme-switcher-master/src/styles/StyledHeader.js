import styled from 'styled-components';

export const StyledHeader = styled.div`
    width: 100%;
    min-width: 35.5rem;
    padding: 0 calc((100vw - 31.475rem - 3vw) / 2) 5rem;
    font-weight: 700;
    transition: all 750ms !important;
    background-color: ${props => props.theme.topBgPattern};
    border-radius: 0 0 2rem 2rem;
    
    .text-container {
        padding: 3.6rem 0 2rem 0;
    }

    .title {
        font-size: 2.4rem;
        line-height: 2.9rem;
        color: ${props => props.theme.mainText};
        padding-bottom: 0.3rem;
        transition: all 750ms !important;
    }

    .sub-title, .switch-label {
        color: ${props => props.theme.subText};
        font-size: 1.4rem;
        line-height: 1.7rem;
        transition: all 750ms !important;
    }

    .horizontal-rule {
        border: solid 1px ${props => props.theme.hrColor};
        transition: all 750ms !important;
    }

    .switch-container {
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 1.5rem 0 4rem;
    }

    .switch-btn {
        cursor: pointer;
        position: relative;
        appearance: none;
        outline: none;
        width: 4.8rem;
        height: 2.4rem;
        border-radius: 1.2rem;
        background: ${props => props.theme.togglerColor};
        transition: all 750ms !important;
    }

    .switch-btn:hover {
        background: linear-gradient(225deg, hsl(210, 78%, 56%), hsl(146, 68%, 55%));
    }

    .switch-btn::before {
        cursor: pointer;
        position: absolute;
        top: 0.3rem;
        right: 0.3rem;
        content: '';
        width: 1.8rem;
        height: 1.8rem;
        border-radius: 1.8rem;
        background-color: ${props => props.theme.bgColor};
        transition: all 500ms !important;
    }

    .switch-btn:checked::before {
        transform: translateX(-2.4rem);
        transition: all 500ms !important;
    }

    @media screen and (min-width: 50rem) {
        padding: 3.6rem  calc((100vw - 70rem - 5vw) / 2) 15rem;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .text-container {
            padding: 0;
        }

        .title {
            font-size: 2.8rem;
            line-height: 3.4rem;
        }

        .horizontal-rule {
            display: none;
        }

        .switch-container {
            width: fit-content;
            padding: 0;
        }

        .switch-btn {
            margin: 0 0 0 1rem;
        }
    }

    @media screen and (min-width: 75rem) {
        padding: 3.6rem calc((100vw - 103.8rem - 5vw) / 2) 16rem;
    }

`;