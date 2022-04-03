import React, { Component } from 'react';

class ListTodo extends Component {
    render() {
        return (
            <div className="list-todo-container">
                <div className="add-todo">
                    <input type="text" />
                    <button type="button" className='add'>Add</button>
                </div>
                <div className="list-todo-content">

                </div>
            </div>
        );
    }
}

export default ListTodo;