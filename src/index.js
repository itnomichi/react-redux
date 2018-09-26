import {AppContainer} from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {createStore} from "redux";
import App from './components/app';
import reducers from "./reducers";

const render = Component =>
    ReactDOM.render(
        <AppContainer>
            <Provider store={createStore(reducers)}>
                <Component/>
            </Provider>
        </AppContainer>,
        document.getElementById('root')
    );

render(App);

// Webpack Hot Module Replacement API
if (module.hot) module.hot.accept('./components/app', () => render(App));