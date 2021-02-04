import styled from'styled-components';
import desktop_dark from '../assets/bg-desktop-dark.jpg';
import desktop_light from '../assets/bg-desktop-light.jpg';

const StyledHeader = styled.div`
    width: 100%;
    height: calc(100vh - 7rem);

    .bg {
        position: absolute;
        left: 0;
        top: 0;
        width: 100vw;
        min-width: 35.5rem;
    }

    .enter-bg {
        animation: bg-fadeIn ease 0.7s;
    }

    .exit-bg {
        opacity: 0;
        animation: bg-fadeOut ease 0.7s;
    }

    .header-content-wrapper {
        position: absolute;
        top: calc(0.23 * 0.533 * 100vw);
        width: calc(28.76rem + 10vw);
        margin: auto;
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        z-index: 1;
        transition: all 500ms !important;
    }

    .title {
        color: white;
        text-transform: uppercase;
        font-size: 2.5rem;
        line-height: 2.5rem;
        font-weight: 700;
        letter-spacing: 1.1rem;
    }

    .btn {
        outline: none;
        width: 2rem;
        height: 2rem;
        border-radius: 2rem;
        border: none;
        position: relative;
        cursor: pointer;
        background: none;
    }

    .icon{
        position: absolute;
        top: 0;
        left: 0;
        width: 2rem;
    }

    .enter-icon {
        animation: btn-fadeIn ease 1s;
        transition: transform ease 1s;
    }

    .exit-icon {
        opacity: 0;
        animation: btn-fadeOut ease 1s; 
        transition: transform ease 1s;
    }

    @keyframes btn-fadeIn {
        0% {
            opacity: 0;
        }
        50% {
            opacity: 0;
        }
        100% {
            opacity: 1;
            transform: rotate(720deg);
        }
    }

    @keyframes btn-fadeOut {
        0% {
            opacity: 1;
            transform: rotate(720deg);
        }
        50% {
            opacity: 0;
        }
        100% {
            opacity: 0;
        }
    }
    
    @keyframes bg-fadeIn {
        0% {
            opacity: 0;
        }
        30% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    @keyframes bg-fadeOut {
        0% {
            opacity: 1;
        }
        30% {
            opacity: 0;
        }
        100% {
            opacity: 0;
        }
    }

    @media screen and (min-width: 50rem) {

        .light-bg {
            content: url(${desktop_light});
        }

        .dark-bg {
            content: url(${desktop_dark});
        }
    
        .header-content-wrapper {
            position: absolute;
            top: calc(0.24 * 0.2083 * 100vw);
            width: calc(39.7rem + 10vw);
        }

        .title {
            font-size: 4rem;
            line-height: 4rem;
            letter-spacing: 1.5rem;
        }

        .icon{
            top: -1rem;
            left: -1rem;
            width: 2.6rem;
        }
    }


`;

const Header = ({toggle, theme}) => {
    return (
    <StyledHeader>
        <div className="header-content-wrapper">
            <p className="title"> TODO </p>
            <button className="btn" onClick={() => toggle()} >
                <img className={theme.localeCompare('light') === 0 ? "icon light-icon enter-icon": "icon light-icon exit-icon"} 
                    src={require('../assets/icon-moon.svg').default} alt='moon icon'/>
                <img className={theme.localeCompare('light') === 0 ? "icon dark-icon exit-icon": "icon dark-icon enter-icon"} 
                    src={require('../assets/icon-sun.svg').default} alt='sun icon'/>
            </button>
        </div>

        <img className={theme.localeCompare('light') === 0 ? "bg light-bg enter-bg" : "bg light-bg exit-bg"}
            src={require('../assets/bg-mobile-light.jpg').default} alt='light background'/>
        <img className={theme.localeCompare('light') === 0 ? "bg dark-bg exit-bg": "bg dark-bg enter-bg"} 
            src={require('../assets/bg-mobile-dark.jpg').default} alt='dark background'/>

    </StyledHeader>
)};

export default Header;