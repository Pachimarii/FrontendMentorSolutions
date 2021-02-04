import { configureStore } from '@reduxjs/toolkit';

import todoReducer from './components/todoSlice';
import filterReducer from './components/filterSlice';
import { loadSampleTodos } from './components/todoSlice';


const sample_tasks = [
    {
        "id": 1,
        "task": "Complete online JavaScript course",
        "checked": true,
    },
    {
        "id": 2,
        "task": "Jog around the park 3x",
        "checked": false,
    },
    {   
        "id": 3,
        "task": "10 minutes meditation",
        "checked": false,
    },
    {   
        "id": 4,
        "task": "Read for 1 hour",
        "checked": false,
    },
    {
        "id": 5,
        "task": "Pick up groceries",
        "checked": false,
    },
    {   
        "id": 6,
        "task": "Complete Todo App on Frontend Mentor",
        "checked": false,
    }
];

const store = configureStore({
    reducer: {
        todo: todoReducer,
        filter: filterReducer
    }
});

store.dispatch(loadSampleTodos(sample_tasks));
export default store;