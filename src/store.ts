import { createStore } from 'redux';

interface Todo {
    id: number;
    text: string;
}

interface State {
    todos: Todo[];
}

interface AddTodoAction {
    type: 'ADD_TODO';
    payload: Todo;
}

interface RemoveTodoAction {
    type: 'REMOVE_TODO';
    payload: number;
}

type Action = AddTodoAction | RemoveTodoAction;

const initialState: State = {
    todos: []
};

const todoReducer = (state = initialState, action: Action): State => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos: [...state.todos, action.payload]
            };
        case 'REMOVE_TODO':
            return {
                ...state,
                todos: state.todos.filter((_, index) => index !== action.payload)
            };
        default:
            return state;
    }
};

const store = createStore(todoReducer);

export type RootState = State;

export default store;
