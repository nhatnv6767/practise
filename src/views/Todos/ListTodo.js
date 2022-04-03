import React, { Component } from 'react';

class ListTodo extends Component {

    state = {
        listTodos: [
            { id: 'todo1', title: 'Doing homework' },
            { id: 'todo2', title: 'Coding ReactJS' },
            { id: 'todo3', title: 'Fixing bugs' },
        ],
    }

    render() {
        let { listTodos } = this.state
        return (
            <div className="list-todo-container">
                <div className="add-todo">
                    <input type="text" />
                    <button type="button" className='add'>Add</button>
                </div>
                <div className="list-todo-content">
                    <div className="todo-child">
                        Todo1
                    </div>
                    <div className="todo-child">
                        Todo1
                    </div>
                    <div className="todo-child">
                        Todo1
                    </div>
                </div>
            </div>
        );
    }
}

export default ListTodo;