import { createSlice, createSelector } from "@reduxjs/toolkit";
import { StatusFilters } from './filterSlice';


export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        tasks: {},
        nextId: 1
    },
    reducers: {
        // action.payload = task
        create: (state, action) => {
            state.tasks[state.nextId] = {
                id: state.nextId,
                task: action.payload,
                checked: false
            };
            state.nextId++;
        },
        toggle: (state, action) => {
            const status = state.tasks[action.payload].checked;
            state.tasks[action.payload].checked = !status;
        },
        // action.payload = id
        remove: (state, action) => {
            delete state.tasks[action.payload]
        },
        clearCompleted: (state) => {
            Object.values(state.tasks).forEach((todo) => {
                if (todo.checked) {
                    delete state.tasks[todo.id];
                }
            });
        },
        loadSampleTodos(state, action) {
            const obj = {};
            let len = action.payload.length - 1;
            action.payload.forEach((t) => {
                obj[t.id] = t;
            });
            state.tasks = obj;
            state.nextId = len+2;
        }
    }
});

export const {
    create, 
    toggle, 
    remove, 
    clearCompleted, 
    loadSampleTodos
} = todoSlice.actions;

export default todoSlice.reducer;

const selectTodoEntities = (state) => state.todo.tasks;

export const selectTodoById = (state, todoId) => {
    return selectTodoEntities(state)[todoId];
};

export const selectTodos = createSelector(selectTodoEntities, (entities) => 
    Object.values(entities)
);

export const selectTodoIds = createSelector(
    selectTodos, (todos) => todos.map((todo) => todo.id)
);

export const selectFilteredTodos = createSelector(
    selectTodos,
    (state) => state.filter,
    (todos, filter) => {
        const { status } = filter;
        const showAllCompletions = status === StatusFilters.All;
        //return all todos
        if (showAllCompletions) {
            return todos;
        }

        const completedStatus = status === StatusFilters.Completed;
        // Return either active or completed todos based on filter
        return todos.filter((todo) => todo.checked === completedStatus);
    }
);

export const selectFilteredTodoIds = createSelector(
    selectFilteredTodos,
    (filteredTodos) => filteredTodos.map((todo) => todo.id)
);