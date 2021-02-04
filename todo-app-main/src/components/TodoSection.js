import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import Todo from '../elements/Todo';
import Attribution from '../elements/Attribution';
import { clearCompleted, selectFilteredTodoIds, selectTodos } from './todoSlice';
import { statusFilterChanged } from './filterSlice';


const StyledTodoSection = styled.div`
    position: absolute;
    z-index: 1;
    top: calc(0.24 * 0.533 * 100vw + 6rem);
    
    .input-section,
    .list-section {
        transition: all 500ms !important;
        border-radius: 0.5rem;
        overflow: hidden;
        box-shadow: 0rem 3.5rem 5rem -1.5rem ${props => props.theme.shadow_color}
    }

    .list-section {
        margin-top: 2.4rem;
    }

    .manipulation-sec1 {
        padding: 0 2.5rem 0;
        height: 5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: ${props => props.theme.sub_text_color};
        background: ${props => props.theme.todo_bg_color};
        font-size: 1.2rem;
        transition: all ease 500ms;
    }

    .clear_completed {
        cursor: pointer;
    }

    .clear_completed:hover {
        color: ${props => props.theme.active_text_color};
    }

    .manipulation-sec2 {
        transition: all ease 500ms;
        margin-top: 1.5rem;
        height: 5rem;
        border-radius: 0.5rem;
        width: calc(28.76rem + 10vw);
        background: ${props => props.theme.todo_bg_color};
        box-shadow: 0rem 3.5rem 5rem -1.5rem ${props => props.theme.shadow_color};
    
        display: flex;
        justify-content:center;
        align-items: center;
    }

    .manipulation-sec2 p {
        cursor: pointer;
        margin: 0 1rem;
        font-size: 1.4rem;
        letter-spacing: -0.02rem;
        font-weight: 700;
        color: ${props => props.theme.sub_text_color}; 

    }

    .manipulation-sec2 p:hover {
        color: var(--bright-blue);
    }

    .note {
        position: absolute;
        bottom: -4rem;
        width: 100%;
        text-align: center;
        color: ${props => props.theme.sub_text_color};
    }

    .attribution {
        position: absolute;
        bottom: -8rem;
        width: 100%;
    }

    @media screen and (min-width: 50rem) {
        top: calc(0.47 * 0.2083 * 100vw + 2rem);

        .manipulation-sec2 {
            position: absolute;
            bottom: 0;
            left: 30%;
            box-shadow: none;
            height: 5rem;
            width: fit-content;
            background: transparent;
        
            display: flex;
            justify-content:center;
            align-items: center;
        }
    }
`;


const TodoSection = () => {
    const dispatch = useDispatch();

    const todoIds = useSelector(selectFilteredTodoIds);

    const clearCompletedEvent = () => dispatch(clearCompleted());
    const countIncompleteEvent = useSelector((state) => {
        const incompletedTodos = selectTodos(state).filter( t => !t.checked);
        return incompletedTodos.length;
    });

    const suffix = countIncompleteEvent <= 1 ? '': 's';
    const handleFilterChange = e => {
        dispatch(statusFilterChanged(e.target.innerText));
    };


    var i = 0;
    return <StyledTodoSection>
        <div className="input-section">
            <Todo type="creation" todoId="-1"/>
        </div>
        
        <div className="list-section">
            {todoIds.map((id) => <Todo type="display" todoId={id} key={i++}/>)}
            
            <div className="manipulation-sec1">
                <p> {countIncompleteEvent} item{suffix} left </p> 
                <p className="clear_completed" onClick={clearCompletedEvent}> Clear Completed </p>
            </div>
        </div>
        <div className="manipulation-sec2">
            <p onClick={handleFilterChange}> All </p>
            <p onClick={handleFilterChange}> Active </p>
            <p onClick={handleFilterChange}> Completed </p>
        </div>
        {/* <p className="note"> Drag and dorp to reorder list </p> */}
        <Attribution />
        
    </ StyledTodoSection>;
}

export default TodoSection;