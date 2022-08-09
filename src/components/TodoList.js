import React from "react";
import { format } from "date-fns";
import { connect } from "react-redux";
import { deleteTodo, toggleComplete } from "../redux/todoSlice";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }

  render() {
    /* Toto je načítavanie pomocou reduxu zo storagu  */
    return (
      <div>
        <ul>
          {this.props.todos.todos.map((item) => (
            <li id="output" className={item.class} key={item.id}>
              {/*  <p className = "dateOfCreated">Date of created: {format(item.dateOfCreated, 'dd/MM/yyyy' )} </p> */}
              {item.state == 0 ? (
                <p className="dateOfCreated">State: Not started </p>
              ) : item.state == 1 ? (
                <p className="dateOfCreated">State: In progres </p>
              ) : (
                <p className="dateOfCreated">State: Finished </p>
              )}
              {item.text}
              <button
                id="deleteButton"
                className="delete"
                onClick={(e) => this.handleDelete(item)}
              >
                <i class="fa-solid fa-trash-can"></i>Remove
              </button>
              <button
                id="softButton"
                className="soft"
                onClick={(e) => this.softDelete(item)}
              >
                <i class="fa-solid fa-circle-check"></i>Done
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  handleDelete = (item) => {
    this.props.deleteTodo(item.id);
  };

  softDelete = (item) => {
    console.log(this.props.todos);
    this.props.toggleComplete(item.id);
  };
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    todos: state.todos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTodo: (id) => dispatch(deleteTodo(id)),
    toggleComplete: (id) => dispatch(toggleComplete(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
