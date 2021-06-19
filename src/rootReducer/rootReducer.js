
const defaultState = {
    todos: [
        {
            id: 1,
            name: 'Завести новую задачу',
            description: 'Для выполнения всех задач на день',
            childrens: [
                {
                    id: 2,
                    name: 'Дочерняя задача',
                    description: 'Описание дочерней задачи',
                    completed: false
                }
            ],
            completed: false
        }
    ]
}

export default function(state = defaultState, action) {
    switch (action.type) {
        case 'ADD_TODO': {
            state.todos = [...state.todos, {
                id: state.todos.length - 1, 
                name: action.name,
                description: action.description,
                completed: false,
                childrens: []
            }];
            return state;
        }
        case 'CHANGE_STATE': {
            const todoEdit = state.todos.find(todo => todo.id === action.id);
            todoEdit.completed = !todoEdit.completed;
            state.todos = [...state.todos.filter(todo => todo.id !== action.id), todoEdit];
            return state;
        }
        case 'REMOVE_TODO': {
            state.todos = [...state.todos.filter(todo => todo.id !== action.id)];
            return state;
        }
        case 'ADD_CHILDREN_TODO': {
            const todo = state.todos.find(todo => todo.id === action.parentId);
            todo.childrens = [...todo.childrens, {
                id: todo.childrens.length, 
                name: action.name,
                description: action.description,
                completed: false,
                childrens: []
            }];
            state.todos = [...state.todos.filter(todo => todo.id !== action.parentId), todo];
            return state;
        }
        case 'CHANGE_CHILDREN_STATE': {
            return state;
        }
        case 'REMOVE_CHILDREN_TODO': {
            return state;
        }
        default:
            return state;
    }
}