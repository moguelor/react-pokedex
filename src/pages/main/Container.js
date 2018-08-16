import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ConnectedRouter } from 'react-router-redux'
import { Provider } from 'react-redux'

import { Route, Switch } from "react-router-dom"
import { hot } from "react-hot-loader"
import { NotFoundPage } from './components';
import sidebarList from '../sidebarList';

class Container extends Component {
    render() {
        const { store, history } = this.props
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <div className="row">
                        <div className="col-3">
                            <sidebarList.Container />
                        </div>
                        <div className="col-8">
                            <Switch>
                                <Route exact path="/" component={() => (<div>hola Yellowme</div>)} />
                                <Route component={NotFoundPage} />
                            </Switch>
                        </div>
                    </div>
                </ConnectedRouter>
            </Provider>
        );
    }
}

Container.propTypes = {
    /**
     * Redux store.
     */
    store: PropTypes.object.isRequired,

    /**
     * Browser histoy.
     */
    history: PropTypes.object.isRequired
};

export default hot(module)(Container)

