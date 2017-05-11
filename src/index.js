import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import Chat from './components/Chat';
import reducers from './reducers/index';

const store = createStore(reducers,
compose(applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : f => f)
);

ReactDOM.render(<Provider store={store}><Chat /></Provider>, document.getElementById('app'));
