import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import App from './pages/App';
import NotFound from './pages/NotFound';
import Configurator from './pages/Configurator';
import Testimonial from './pages/Testimonial';

const Routes = () => {
    return (
        <div className="main-app-wrapper">
            <div className="container">
                <Header />
            </div>
            <div className="main-content-container">
                <Switch>
                    <Route exact={true} path="/" component={App} />
                    <Route exact path="/page-1" component={Testimonial} />
                    <Route exact path="/page-2" component={Configurator} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        </div>
    );
};

export default Routes;