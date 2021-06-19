const defaultState = {
    todos: [
        { 
            id:1, 
            name: "Завести новую задачу", 
            description: 'Для выполнения всех задач на день', 
            childrens: [{
              id:2, 
              name: "Дочерняя задача", 
              description: 'Описание дочерней задачи',
              completed: false
            }],
            completed: false
          }
    ]
}

const PROJECT_ID = 289324;

async function postData(data = {}) {
    // Default options are marked with *
    const url = 'http://valerystatinov.com/api/projects';
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
            'Token': 'Valera',
            'Content-Type': 'application/json'
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *client
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return await response.json(); // parses JSON response into native JavaScript objects
  }
  

export default function(state = defaultState, action) {
    switch (action.type) {
        case 'ADD_TODO': {
            const obj = {
                id: state.todos.length - 1, 
                name: action.name,
                description: action.description,
                completed: false,
                childrens: []
            };
            postData(obj)
            .then((data) => {
                console.log(data); // JSON data parsed by `response.json()` call
                state.todos = [...state.todos, {
                    id: state.todos.length - 1, 
                    name: action.name,
                    description: action.description,
                    completed: false,
                    childrens: []
                }];
            });
            return state;
        }
        case 'INIT_TODO': {
            debugger;
            state.todos = [...action.todos, ...defaultState.todos];
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