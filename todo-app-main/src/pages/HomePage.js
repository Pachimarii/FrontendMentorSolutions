import styled from'styled-components';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, lightTheme, darkTheme} from '../Theme';

import Header from '../elements/Header';
import TodoSection from '../components/TodoSection';


const StyledHomePage = styled.div`
    width: calc(28.76rem + 10vw);
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width: 50rem) {
        width: calc(39.7rem + 10vw);
    }

`;

const HomePage = () => {
    const [theme, setTheme] = useState('light');
    const [list, setList] = useState([
        {
            "task": "Complete online JavaScript course",
            "checked": true,
        },
        {
            "task": "Jog around the park 3x",
            "checked": false,
        },
        {
            "task": "10 minutes meditation",
            "checked": false,
        },
        {
            "task": "Read for 1 hour",
            "checked": false,
        },
        {
            "task": "Pick up groceries",
            "checked": false,
        },
        {
            "task": "Complete Todo App on Frontend Mentor",
            "checked": false,
        }
    ]);

    const switchTheme = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
    };

    const ToggleCheck = (e, text) => {
        
        setList(list.map((obj) => {
            if (obj.task.localeCompare(text) === 0) {
                obj.checked = !obj.checked;
            }
            return obj;
        }))
    }


    return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyle />
        <StyledHomePage>
            <Header toggle={switchTheme} theme={theme}/>
            <TodoSection data={list} toggle={ToggleCheck}  />
        </StyledHomePage>
    </ThemeProvider>);
};

export default HomePage;