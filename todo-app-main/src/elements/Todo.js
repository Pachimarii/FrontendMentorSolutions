import styled from 'styled-components';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { create, toggle, remove, selectTodoById }  from '../components/todoSlice';

const StyledTodo = styled.div`
    position: relative;
    width: calc(28.76rem + 10vw);
    height: 4.8rem;
    transition: all 500ms !important;
    background-color: ${props => props.theme.todo_bg_color};
    border-bottom: ${props => props.border? `solid 1px ${props.theme.checkbox_border_color}` : 'none'}; 

    display: flex;
    align-items: center;
    
    .todo-container {
        width: calc(100% - 4.8rem);
        cursor: pointer;
        margin: none;
    }

    .cross {
        cursor: pointer;
        height: 1.2rem;
        padding-left: 1.2rem;
        display: none;
        opacity: 0;
    }

    :hover .cross {
        display: initial;
        opacity: 1;
    }

    input {
        outline: none;
        border: none;
        width: calc(100% - 4.8rem);
        margin: 0 0 0 5.2rem;

        font-family: 'Josefin Sans', sans-serif;
        color: ${props => props.theme.active_text_color};
        background-color: ${props => props.theme.todo_bg_color};

        transition: all 500ms !important;
    }

    input::placeholder {
        font-family: 'Josefin Sans', sans-serif;
    }

    .checkbox {
        position: absolute;
        top: calc((4.8rem - 2rem) / 2);
        left: 2rem;

        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 500ms !important;

        width: 2rem;
        height: 2rem;
        border-radius: 2rem;
        background: ${props => props.theme.checkbox_border_color};
       
    }

    .active {
        cursor: pointer;
    }

 
    .check {
        display: none;
    }

    .check-box-inner {
        transition: all 500ms !important;
        width: 1.8rem;
        height: 1.8rem;
        border-radius: 1.8rem;
        margin: 0.1rem auto;
        display: flex;
        align-items: center;
        justify-content: center;
        background: ${props => props.theme.todo_bg_color}
    }

    .checked {
        background: var(--check-background);
    }

    .checked .check-box-inner {
        background: transparent;
    }

    .checked .check {
        display: initial;
    }

    .disabled-input {
        cursor: pointer;
    }

    .crossed {
        color: ${props => props.theme.crossed_text_color};
        text-decoration: line-through;
    }

    .active:hover {
        transition: all 500ms !important;
        background: var(--check-background);
    }

    @media screen and (min-width: 50rem) {
        width: calc(39.7rem + 10vw);
        height: ${props => props.border ? '6rem' : '6.4rem'};
        font-size: 1.8rem;
        letter-spacing: -0.025rem;

        input{
            margin: 0 0 0 7.2rem;
        }

        .cross {
            height: 1.8rem;
        }

        .checkbox {
            top: calc(((3.52rem + 2vw) - 2.4rem) / 2);
            left: 2.4rem;
            width: 2.5rem;
            height: 2.5rem;
            border-radius: 2.5rem;
            display: initial;
        }

        .check-box-inner {
            width: 2.2rem;
            height: 2.2rem;
            border-radius: 2.2rem;
            margin: 0.15rem 0 0 0.15rem;
            background: ${props => props.theme.todo_bg_color}
        }
    }
`;

const Todo = ({todoId, type}) => {
    const dispatch = useDispatch();
    const [val, setVal] = useState("");
    const todoData = useSelector((state) => selectTodoById(state, todoId));
    
    const toggleEvent = () => dispatch(toggle(todoId));
    const removeEvent = () => dispatch(remove(todoId));

    const recordValue = (e) => {
        setVal(e.target.value)
    };

    const pressEvent = (e) => {
        if (e.key.localeCompare('Enter') === 0 ) {
            if (e.target.value.trim().length > 0) {
                let task = e.target.value;
                console.log(task);
                dispatch(create(task));
            }
            setVal("");
        }
    };


    let classnames;
    if (todoData !== undefined && todoData.checked !== undefined){
        classnames = todoData.checked === true ? "checkbox active checked": "checkbox active";
    }

    return (
        type.localeCompare('creation') === 0 ? 
        <StyledTodo border={false}>
            <div className="checkbox">
                <div className="check-box-inner"><img className="check" alt="check" src={require('../assets/icon-check.svg').default}/></div>
            </div>
            <input type="text" placeholder="Create a new todo..."
                aria-label="Create a new todo..."
                onChange={(e) => recordValue(e)}
                onKeyDown={(e) => pressEvent(e)} 
                value={val} 
            />
        </StyledTodo>
        :<StyledTodo border={true}>
            <div className="todo-container" onClick={toggleEvent}>
                <div className={classnames}>
                    <div className="check-box-inner"><img className="check" alt="check" src={require('../assets/icon-check.svg').default}/></div>
                </div>
                <input className={todoData.checked ? "disabled-input crossed": "disabled-input"} type="text" value={todoData.task} disabled/>
            </div>
            <img className="cross" src={require('../assets/icon-cross.svg').default}
                alt="remove task" onClick={removeEvent}/>
        </StyledTodo>
    );
};

export default Todo;