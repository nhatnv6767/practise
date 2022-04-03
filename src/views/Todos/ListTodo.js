import React, { Component } from 'react';
import './ListTodo.scss';
import AddTodo from './AddTodo'

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
                <AddTodo />
                <div className="list-todo-content">
                    {listTodos && listTodos.length > 0 &&
                        listTodos.map((item, index) => {
                            return (
                                <div className="todo-child" key={item.id}>
                                    <span>{index + 1} - {item.title}</span>
                                    <button className="edit">Edit</button>
                                    <button className="delete">Delete</button>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        );
    }
}

export default ListTodo;