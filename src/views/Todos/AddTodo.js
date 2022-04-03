import React, { Component } from 'react';

class AddTodo extends Component {
    render() {
        return (
            <div className="add-todo">
                <input type="text" />
                <button type="button" className='add'>Add</button>
            </div>
        );
    }
}

export default AddTodo;