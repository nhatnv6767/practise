import React, { Component } from 'react';
import './ListTodo.scss';
import AddTodo from './AddTodo'
import { toast } from 'react-toastify'

class ListTodo extends Component {

    state = {
        listTodos: [
            { id: 'todo1', title: 'Doing homework' },
            { id: 'todo2', title: 'Coding ReactJS' },
            { id: 'todo3', title: 'Fixing bugs' },
        ],
        editTodo: {}
    }
    addNewTodo = (todo) => {
        this.setState({
            listTodos: [...this.state.listTodos, todo],
        })
        toast.success("Wow so easy!")
    }

    handleDeleteTodo = (todo) => {
        let currentTodos = this.state.listTodos
        currentTodos = currentTodos.filter(item => item.id !== todo.id)
        this.setState({
            listTodos: currentTodos
        })
        toast.success("Delete succeed!")
    }

    handleEditTodo = (todo) => {
        this.setState({
            editTodo: todo
        })
    }

    render() {
        let { listTodos, editTodo } = this.state

        let isEmptyObj = Object.keys(editTodo).length === 0;

        return (
            <div className="list-todo-container">
                <AddTodo
                    addNewTodo={this.addNewTodo}
                />
                <div className="list-todo-content">
                    {listTodos && listTodos.length > 0 &&
                        listTodos.map((item, index) => {
                            return (
                                <div className="todo-child" key={item.id}>
                                    {isEmptyObj ?
                                        <span>{index + 1} - {item.title}</span>
                                        :
                                        <span>
                                            {index + 1} - <input value={editTodo.value} />
                                        </span>
                                    }
                                    <button className="edit"
                                        onClick={() => this.handleEditTodo(item)}
                                    >
                                        Edit
                                    </button>
                                    <button className="delete"
                                        onClick={() => this.handleDeleteTodo(item)}
                                    >
                                        Delete
                                    </button>
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