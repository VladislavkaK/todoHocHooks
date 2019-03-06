import {FILL_STATE} from '../constants';

/* 1) Делаем запрос к серверу на получение данных и 
    отправляем полученные данные при успехе в action.payload */

export default function loadTodoData() {

    // Эту анонимную функцию он выполняет, передав аргуметом dispatch
    return function(dispatch, getState) {
     
      return fetch('https://api.myjson.com/bins/w4fr4')
        .then(function(response) {
        
          return response.json();
         })
        .then(function(state) {
          // Ну вот данные получили, теперь можно диспатчить наш экшн
          dispatch({ type: FILL_STATE, payload: state });
        });
        
    };
  
}