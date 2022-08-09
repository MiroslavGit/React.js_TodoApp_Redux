import {createSlice} from "@reduxjs/toolkit"


const todoSlice = createSlice({
    name: "todos",
    initialState:{
        todos: []
    },
    reducers: {
        addTodo:(state, action) => {
            const newTodo={
                text: action.payload,
                id: Date.now(),
                state: 0,
            }
            state.todos = [...state.todos, newTodo];         
        },
        toggleComplete: (state, action) => {
            /* console.log(state.todos) */
            state.todos.map(i => {
                return (
                  action.payload === i.id ? i.class = "done" : i.class = ""  
                 )
            })
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        } 
    },
});

export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;