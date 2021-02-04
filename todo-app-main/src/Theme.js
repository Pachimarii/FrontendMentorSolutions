import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
    bg_color: 'hsl(0, 0%, 98%)',
    active_text_color: 'hsl(235, 19%, 35%)',
    todo_bg_color: 'hsl(0, 0%, 98%)',
    checkbox_border_color: 'hsl(236, 33%, 92%)',
    crossed_text_color: 'hsl(233, 11%, 84%)',
    shadow_color: 'hsl(237, 20%, 80%)',
    sub_text_color: 'hsl(236, 9%, 61%)',
    bg_mobile_link: '../assets/bg-mobile-light.jpg',
    bg_desktop_link: '../assets/bg-desktop-light.jpg'
};

export const darkTheme = {
    bg_color: 'hsl(235, 21%, 11%)',
    active_text_color: 'hsl(234, 39%, 85%)',
    shadow_color: 'hsl(0,0%,0%)',
    todo_bg_color: 'hsl(235, 24%, 19%)',
    crossed_text_color: 'hsl(233, 14%, 35%)',
    light_grayish_blue_hover: 'hsl(236, 33%, 92%)',
    dark_grayish_blue: 'hsl(234, 11%, 52%)',
    sub_text_color: 'hsl(235, 16%, 43%)',
    checkbox_border_color: 'hsl(237, 14%, 26%)',
    bg_mobile_link: '../assets/bg-mobile-dark.jpg',
    bg_desktop_link: '../assets/bg-desktop-dark.jpg'
};

export const GlobalStyle = createGlobalStyle`

    :root {
        box-sizing: border-box;
        font-size: 62.5%;

        --bright-blue: hsl(220, 98%, 61%);
        --check-background: linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%));
    }

    *,
    ::before,
    ::after {
        box-sizing: inherit;
        margin: 0;
        padding: 0;
    }

    body {
        width: 100vw;
        min-width: 35.5rem;
        font-family: 'Josefin Sans', sans-serif;
        display: flex;
        justify-content: center;
        animation: fadeIn ease 1s;
        overflow-x: hidden;
        transition: ease 500ms;
        background-color: ${props => props.theme.bg_color};

        -webkit-touch-callout: none; /* iOS Safari */
        -webkit-user-select: none; /* Safari */
        -khtml-user-select: none; /* Konqueror HTML */
        -moz-user-select: none; /* Old versions of Firefox */
            -ms-user-select: none; /* Internet Explorer/Edge */
                user-select: none; /* Non-prefixed version, currently
                                    supported by Chrome, Edge, Opera and Firefox */
    }
`;