import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import App from './pages/App';
import NotFound from './pages/NotFound';
import Configurator from './pages/Configurator';
import Testimonial from './pages/Testimonial';

const Routes = () => {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact={true} path="/" component={App} />
                <Route exact path="/configurator" component={Configurator} />
                <Route exact path="/testimonial" component={Testimonial} />
                <Route component={NotFound} />
            </Switch>
        </div>
    );
};

export default Routes;