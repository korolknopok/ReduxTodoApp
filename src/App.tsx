import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './store';

const App: React.FC = () => {
    const [inputValue, setInputValue] = useState<string>('');
    const todos = useSelector((state: RootState) => state.todos);
    const dispatch = useDispatch();

    const addTodo = () => {
        if (inputValue.trim()) {
            const newTodo = { id: Date.now(), text: inputValue };
            dispatch({ type: 'ADD_TODO', payload: newTodo });
            setInputValue('');
        }
    };

    const removeTodo = (index: number) => {
        dispatch({ type: 'REMOVE_TODO', payload: index });
    };

    return (
        <div>
            <h1>Список задач</h1>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={addTodo}>Добавить задачу</button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={todo.id}>
                        {todo.text}
                        <button onClick={() => removeTodo(index)}>Удалить</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default App;
