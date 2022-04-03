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

    render() {
        let { title } = this.state;
        return (
            <div className="add-todo">
                <input type="text" value={title}
                    onChange={(event) => this.handleOnChangeTitle(event)}
                />
                <button type="button" className='add'>Add</button>
            </div>
        );
    }
}

export default AddTodo;