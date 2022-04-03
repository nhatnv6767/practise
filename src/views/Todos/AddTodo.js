import React, { Component } from 'react';

class AddTodo extends Component {
    state = {
        title: ''
    }
    render() {
        let { title } = this.state;
        return (
            <div className="add-todo">
                <input type="text" value={title} />
                <button type="button" className='add'>Add</button>
            </div>
        );
    }
}

export default AddTodo;