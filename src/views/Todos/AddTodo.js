import React, { Component } from 'react';

class AddTodo extends Component {
    state = {
        title: ''
    }

    handleOnChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleAddTodo = () => {
        let todo = {
            id: Math.floor(Math.random() * 1000000),
            title: this.state.title
        }
        this.props.addNewTodo(todo)
        this.setState({
            title: ''
        })
    }

    render() {
        let { title } = this.state;
        return (
            <div className="add-todo">
                <input type="text" value={title}
                    onChange={(event) => this.handleOnChangeTitle(event)}
                />
                <button type="button" className='add'
                    onClick={() => this.handleAddTodo()}
                >
                    Add
                </button>
            </div>
        );
    }
}

export default AddTodo;