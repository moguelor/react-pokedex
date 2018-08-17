import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ConnectedRouter } from 'react-router-redux'
import { Provider } from 'react-redux'

import { Route, Switch } from "react-router-dom"
import { hot } from "react-hot-loader"
import { NotFoundPage } from './components';
import sidebarList from '../sidebarList';
import details from '../details';

class Container extends Component {
    render() {
        const { store, history } = this.props
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <div className="row">
                        <div className="col-md-4 col-sm-6">
                            <sidebarList.Container />
                        </div>
                        <div className="col-md-8 col-sm-6 col-12">
                            <Switch>
                                <Route exact path="/" component={details.Container} />
                                <Route exact path="/:id" component={details.Container} />
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

