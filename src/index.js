import {AppContainer} from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

const render = Component =>
    ReactDOM.render(
        <AppContainer>
            <Component/>
        </AppContainer>,
        document.getElementById('root')
    );

render(App);

// Webpack Hot Module Replacement API
if (module.hot) module.hot.accept('./components/app', () => render(App));