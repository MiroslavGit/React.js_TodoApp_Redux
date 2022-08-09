import React from 'react';
import Form from './components/Form'
import TodoList from './components/TodoList'
import Filter from "./components/Filter"


class TodoApp extends React.Component {
  render() {
    return (
      <div >
        <h3 className="title" >TODO</h3>
        <Form />
        <h5 htmlFor="input" className="subtitle">
            What needs to be done?
        </h5>
        <Filter />
        <TodoList/> 
    </div>
    );
  }
  
}

export default TodoApp;

