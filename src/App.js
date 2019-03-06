import React, { useState } from 'react';
import './styles/App.scss';
import { Provider } from 'react-redux';
import store from './store/store';
import Container from './containers/Container/';

const App = () => {

  return (
    <Provider store={store}>
        <div className="TodoApp">
            <h1 style={{textAlign:"center"}}>Todolist используя hooks, recompose, hoc</h1>
            <Container />
        </div>
    </Provider>
  )

}

export default App;
