import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from "../redux/todoSlice";

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} className="wrapper">
                    <input 
                        id="input"
                        type="text"
                        onChange={this.handleChange}
                        value={this.state.value}
                    />
                    <button 
                        className="add" 
                        id="add"
                        onClick={this.getTodos}>
                        Add #{this.props.todos.todos.length + 1} 
                    </button>
                </form>
            </div>
        );
    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.value)
    }


}

const mapStateToProps = (state) =>{
    return {
        todos: state.todos
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      addTodo: (text) => dispatch(addTodo(text)),
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Form);