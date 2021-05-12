import "babel-polyfill"

import React from 'react'
import ReactDOM from 'react-dom'
//redux
import { createStore, applyMiddleware } from 'redux'
//saga
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga.js';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
  );
//initiates the sagaMiddleware
sagaMiddleware.run(rootSaga);
const action = type => store.dispatch({type})



//components
import Counter from './Counter'
import reducer from './reducers'



function render() {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrementAsync={() => action('INCREMENT_ASYNC')}
      onIncrement={() => action('INCREMENT')}
      onDecrement={() => action('DECREMENT')}
    />,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)
