import React from 'react';

const Input = ({handleSubmit, updateText, task}) => {
    return (
        <form className="form-inline" onSubmit={handleSubmit} >
                <input type="text" 
                    className="form-control mr-sm-2" 
                    placeholder="Введите задачу..." 
                    onChange={updateText}
                    value={task}
                />
        </form>
    )

}

export default Input;