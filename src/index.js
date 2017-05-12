import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import ChatContainer from './containers/ChatContainer';
import reducers from './reducers/index';
import thunk from 'redux-thunk';
import {persistStore, autoRehydrate} from 'redux-persist'

const store = createStore(reducers, compose(
  applyMiddleware(thunk),
  autoRehydrate(),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

persistStore(store, {whitelist: ['settings']});

ReactDOM.render(<Provider store={store}><ChatContainer /></Provider>, document.getElementById('app'));
