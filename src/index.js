import React from "react";
import { render } from "react-dom";
import store from './store'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/styles.scss';

render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    </Provider>,
    document.getElementById("app")
);