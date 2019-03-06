import React from 'react';

const Input = () => {

    return (
        // <form className="form-inline" onSubmit={this.handleSubmit} >
        <form className="form-inline">
                <input type="text" 
                    className="form-control mr-sm-2" 
                    placeholder="Введите задачу..." 
                    // onChange={this.updateText}
                    // value={this.state.task}
                />
        </form>
    )

}

export default Input;