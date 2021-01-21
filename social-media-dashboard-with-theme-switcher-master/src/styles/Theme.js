import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
    bgColor: 'hsl(0, 0%, 100%)',
    topBgPattern: 'hsl(225, 100%, 98%)',
    cardBg: 'hsl(227, 47%, 96%)',
    hoverCardBg: 'hsl(228, 33%, 91%)',
    subText: 'hsl(228, 12%, 44%)',
    mainText: 'hsl(230, 17%, 14%)',
    hrColor: '#c8cbdb',
    togglerColor: 'hsl(230, 22%, 74%)',
};

export const darkTheme = {
    bgColor: 'hsl(230, 17%, 14%)',
    topBgPattern: 'hsl(232, 18%, 16%)',
    cardBg: 'hsl(228, 28%, 20%)',
    hoverCardBg: 'hsl(228, 25%, 27%)',
    subText: 'hsl(228, 34%, 66%)',
    mainText: 'hsl(0, 0%, 100%)',
    hrColor: '#333a55',
    togglerColor:
        'linear-gradient(225deg, hsl(210, 78%, 56%), hsl(146, 68%, 55%))',
};

export const GlobalStyle = createGlobalStyle`

    :root {
        box-sizing: border-box;
        font-size: 62.5%;

        --facebook-color: hsl(208, 92%, 53%);
        --twitter-color: hsl(203, 89%, 53%);
        --instagram-color: linear-gradient(90deg, hsl(37, 97%, 70%), hsl(329, 70%, 58%));
        --youtube-color: hsl(348, 97%, 39%);
    }

    *,
    ::before,
    ::after {
        box-sizing: inherit;
        margin: 0;
        padding: 0;
    }

    /* width */
    ::-webkit-scrollbar {
        width: 1.5rem;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: ${props => props.theme.cardBg};
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background:  ${props => props.theme.hoverCardBg};
    }

    body {
        min-width: 35.5rem;
        background-color: ${(props) => props.theme.bgColor};
        font-family: 'Inter', sans-serif;
        display: flex;
        justify-content: center;
        animation: fadeIn ease 1s;
        transition: all 750ms !important;
        overflow-x: hidden;

        -webkit-touch-callout: none; /* iOS Safari */
        -webkit-user-select: none; /* Safari */
        -khtml-user-select: none; /* Konqueror HTML */
        -moz-user-select: none; /* Old versions of Firefox */
            -ms-user-select: none; /* Internet Explorer/Edge */
                user-select: none; /* Non-prefixed version, currently
                                    supported by Chrome, Edge, Opera and Firefox */
    }

    @keyframes fadeIn {
        0% {
            opacity: 0;
        }

        40% {
            opacity: 0.3;
        }

        100% {
            opacity: 1;
        }
    }
`;